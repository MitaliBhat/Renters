function eyeShowHide() {
    var password = document.getElementById('password');
    var toggle = document.getElementById('eyetoggle');

    if (password.type === 'password') {
        password.setAttribute('type', 'text');
        toggle.classList.add('hide');
    } else {
        password.setAttribute('type', 'password');
        toggle.classList.remove('hide');
    }
}

function eyeShowHide1() {
    var password1 = document.getElementById('password1');
    var toggle1 = document.getElementById('eyetoggle1');

    if (password1.type === 'password') {
        password1.setAttribute('type', 'text');
        toggle1.classList.add('hide');
    } else {
        password1.setAttribute('type', 'password');
        toggle1.classList.remove('hide');
    }
}

function eyeShowHide2() {
    var password2 = document.getElementById('password2');
    var toggle2 = document.getElementById('eyetoggle2');

    if (password2.type === 'password') {
        password2.setAttribute('type', 'text');
        toggle2.classList.add('hide');
    } else {
        password2.setAttribute('type', 'password');
        toggle2.classList.remove('hide');
    }
}