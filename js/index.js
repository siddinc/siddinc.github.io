// toolTips
$(function () {
	$('[data-toggle="tooltip"]').tooltip();
});

// ScrollToTop
const mybutton = document.getElementById('scroll-to-top');

window.onscroll = () => scrollCheck();

const scrollCheck = () => {
	if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
		mybutton.style.display = 'block';
	} else {
		mybutton.style.display = 'none';
	}
};

const scrollToTop = () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
};
