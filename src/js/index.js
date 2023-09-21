

var image = document.getElementsByClassName('heroimage');
new simpleParallax(image, {
	delay: .6,
	transition: 'cubic-bezier(0,0,0,1)'
});


// Age Gate Modal using cookies to only show once.

const myModal = new bootstrap.Modal('#agegate');
const myModalEl = document.getElementById('agegate')

if (!Cookies.get('popup')) {
    myModal.show();
}

myModalEl.addEventListener('hidden.bs.modal', event => {
  Cookies.set('popup', 'valid', { expires: 3, path: "/" });
})




