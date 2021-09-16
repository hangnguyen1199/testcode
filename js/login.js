// $(document).ready(function() {
//     const SALT = "12312";
//     const userUN = $("#username");
//     const passwordPW = $("#pass")

//     var person = localStorage.getItem('person') ? JSON.parse(localStorage.getItem('person')) : [];
//     const ACCOUNTS = localStorage.getItem("accounts") || [];

//     $("#form-login").on("submit", function(e) {
//         e.preventDefault();
//         console.log("login function");
//         var username = userUN.val();
//         var pass = passwordPW.val();
//         if (isExist(username, pass)) {
//             console.log("Success");
//             var _token = username + "." + pass + "."
//             localStorage.setItem("person", _token);
//             $(location).attr('href', 'http://127.0.0.1:5500/html/index.html')
//         } else {
//             console.log("Failute");
//         }

//     })
//     const isExist = (username, pass) => {
//         return ACCOUNTS.some((item) => item.username == username && item.pass == pass);
//     };
//     const islogged = () => {
//         if (person) {
//             var username = person.split(".")[0];
//             var pass = person.split(".")[1];
//             if (isExist(username, pass)) {
//                 return true;
//             }
//         }
//         return false;
//     };
//     const init = () => {
//         if (islogged()) {
//             console.log("Logged");
//             $(location).attr('href', 'http://127.0.0.1:5500/html/index.html')
//         }
//         init();
//     }

// });


function Login() {
    var person = localStorage.getItem('person') ? JSON.parse(localStorage.getItem('person')) : [];
    var username = document.getElementById('username').value;
    var pass = document.getElementById('pass').value;
    person.forEach(person => {
        if (username === person.username && pass === person.pass) {
            var user = {
                username: username
            }
            localStorage.setItem('userCurrent', JSON.stringify(user));
            $(location).attr('href', 'http://127.0.0.1:5500/index.html')
        } else {
            alert('Tên đăng nhập hoặc mật khẩu không chính xác');
        }
    })
    location.reload()
}