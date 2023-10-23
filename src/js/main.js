const inputName = document.querySelector('.name')
const inputMail = document.querySelector('#mail')
const messageBox = document.querySelector('.message-box')
const submitBtn = document.querySelector('.send-message')
const error = document.querySelector('.error')
const footerYear = document.querySelector('.footer-year')

const imagesArr = [
	'portfoliog.jpg',
	'portfolio2.jpg',
	'portfolio4.jpg',
	'portfolio5.jpg',
	'portfolio12.jpg',
	'portfolio13.jpg',
	'portfolio14.jpg',
	'portfolio1.jpg',
	'mockmicha.jpg',
	'mockmk.png',
]

const slider = document.querySelector('.slider')
const sliderNav = document.querySelector('.slider-nav')
let currentIndex = 0

// function showing images
function showSlide(index) {
	const images = document.querySelectorAll('.slider img')
	images.forEach((image, i) => {
		if (i === index) {
			image.style.display = 'block'
		} else {
			image.style.display = 'none'
		}
	})
}

// Loop for adding images to slider
for (let i = 0; i < imagesArr.length; i++) {
	const newImg = document.createElement('img')
	newImg.src = `./dist/img/` + imagesArr[i]
	newImg.setAttribute('id', 'slide-' + (i + 1))
	slider.appendChild(newImg)

	const sliderBtn = document.createElement('a')
	sliderBtn.addEventListener('click', () => {
		currentIndex = i
		showSlide(currentIndex)
	})

	sliderNav.appendChild(sliderBtn)
}

// email validation
const checkEmail = () => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/

	if (re.test(inputMail.value)) {
		clearError()
	} else {
		showError()
	}
}

// showing error if data is wrong
const showError = () => {
	error.classList.add('active')
	error.innerHTML = 'Podałeś błędne dane!'
	inputMail.value = ''
	inputName.value = ''
	messageBox.value = ''
}

// clearing errors if data is fine
const clearError = () => {
	error.classList.remove('active')
	error.innerHTML = ''
}

submitBtn.addEventListener('click', checkEmail)

// sending form function
const msgStatus = document.querySelector('.msg-status')

if (document.location.search === '?mail_status=sent') {
	msgStatus.classList.add('success')
	msgStatus.textContent = 'Wiadomość wysłana!'

	setTimeout(() => {
		msgStatus.classList.remove('success')
	}, 3000)
}

if (document.location.search === '?mail_status=error') {
	msgStatus.classList.add('unsuccess')
	msgStatus.textContent = 'Wystąpił błąd!'

	setTimeout(() => {
		msgStatus.classList.remove('unsuccess')
	}, 3000)
}

// a function that shows the current year in the footer
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
