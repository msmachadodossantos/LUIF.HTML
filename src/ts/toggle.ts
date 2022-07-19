let elem = document.getElementsByClassName('toggle');
for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener('click', function () {
        this.classList.toggle('active');
        let content = this.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
}