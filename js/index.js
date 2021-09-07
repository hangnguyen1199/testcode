function checkUser() {
    var username = document.getElementById('username').value;
    var regexUse = /^[A-Za-z0-9_\.]{6,32}$/;
    var errorUse = document.getElementById('error_username');
    if (username == '' || username == null) {
        errorUse.innerHTML = " Vui lòng nhập tài khoản"
    } else if (!regexUse.test(username)) {
        errorUse.innerHTML = "Tên đăng nhập có độ dài từ 6 - 18 ký tự"
    } else {
        errorUse.innerHTML = " ";
    }
}

function checkPass() {
    var regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    var pw = document.getElementById('pass').value;
    var errorPass = document.getElementById('error_pass');
    if (pw == '' || pw == null) {
        errorPass.innerHTML = " Vui lòng nhập mật khẩu"
    } else if (!regexPass.test(pw)) {
        errorPass.innerHTML = "Tối thiểu tám ký tự, ít nhất một chữ cái và một số"
    } else {
        errorPass.innerHTML = " ";
    }
}

function checkMail() {
    var mail = document.getElementById('mail').value;
    var regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var errorMail = document.getElementById('error_mail')

    if (mail == '' || mail == null) {
        errorMail.innerHTML = " Vui lòng nhập mail"
    } else if (!regexMail.test(mail)) {
        errorMail.innerHTML = "Mail không đúng định dạng"
    } else {
        errorMail.innerHTML = " ";
    }
}