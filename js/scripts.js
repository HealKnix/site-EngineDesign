let time = 10000

document.addEventListener('DOMContentLoaded', function () {
	const slides = document.querySelectorAll('.slide')
	const controls = document.querySelectorAll('.slider-control')

	let currentSlide = 0

	// Function to reset all slides
	function resetSlides() {
		for (let i = 0; i < slides.length; i++) {
			slides[i].classList.remove('active-slide', 'prev-slide', 'next-slide')
		}
	}

	// Function to set slide positions
	function setSlidePositions() {
		slides[currentSlide].classList.add('active-slide')
		if (currentSlide === 0) {
			slides[slides.length - 1].classList.add('prev-slide')
			slides[currentSlide + 1].classList.add('next-slide')
		} else if (currentSlide === slides.length - 1) {
			slides[currentSlide - 1].classList.add('prev-slide')
			slides[0].classList.add('next-slide')
		} else {
			slides[currentSlide - 1].classList.add('prev-slide')
			slides[currentSlide + 1].classList.add('next-slide')
		}
	}

	// Function to set control states
	function setControlStates() {
		for (let i = 0; i < controls.length; i++) {
			controls[i].classList.remove('active-control')
		}
		controls[currentSlide].classList.add('active-control')
	}

	// Function to change slide
	function changeSlide(index) {
		resetSlides()
		currentSlide = (index + slides.length) % slides.length
		setSlidePositions()
		setControlStates()
	}

	// Set control event listeners
	for (let i = 0; i < controls.length; i++) {
		controls[i].addEventListener('click', () => {
			changeSlide(i)
		})
	}

	// Set initial slide positions and control states
	setSlidePositions()
	setControlStates()

	// Set automatic slide change
	setInterval(() => {
		changeSlide(currentSlide + 1)
	}, time)
})
