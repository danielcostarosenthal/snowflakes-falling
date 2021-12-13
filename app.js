const snowFallContainer = document.body

const createSnowFlakes = () => {
	const snowFlake = document.createElement('i')
	const snowFlakeClasses = ['fas', 'fa-snowflake', 'snowflake']
	const sidewaysMovement = Math.floor(Math.random() * (Math.floor(250) - Math.ceil(-250)) + Math.ceil(-250))

	snowFlake.classList.add(...snowFlakeClasses)
	snowFlake.style.animationDuration = `${Math.floor(Math.random() * 10 + 5)}s`
	snowFlake.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`
	snowFlake.style.fontSize = `${Math.floor(Math.random() * 14 + 18)}px`
	snowFlake.style.opacity = (Math.random() * 1).toFixed(2)
	document.querySelector(':root').style.setProperty(`--sideways-movement`, `${sidewaysMovement}px`)
	snowFallContainer.appendChild(snowFlake)

	setTimeout(() => {
		snowFlake.remove()
	}, 15 * 1000)
}

setInterval(createSnowFlakes, 250)
