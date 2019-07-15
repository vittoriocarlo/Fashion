const $burguerNav = document.getElementById('burguer-nav');
const $navSecond = document.querySelector('.nav-second');

$burguerNav.addEventListener('click', burguerButton);

function burguerButton() {
	if ($navSecond.classList.contains('is-active')) {
			$navSecond.classList.remove('is-active');
	} else {
		$navSecond.classList.add('is-active');
	}
}

