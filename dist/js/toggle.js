var elem = document.getElementsByClassName('toggle');
for (var i = 0; i < elem.length; i++) {
    elem[i].addEventListener('click', function () {
        this.classList.toggle('active');
        var content = this.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        }
        else {
            content.style.display = 'block';
        }
    });
}
//# sourceMappingURL=toggle.js.map