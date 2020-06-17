$(document).ready(function(){
    console.log("Login script started...");
    //Нажатие кнопки Submit
    document.getElementById("submit").addEventListener("click", function(e){
        e.preventDefault();
        //Получение данных с формы
        let loginForm = document.forms["loginForm"];
        
        let captchaResp = loginForm.elements["g-recaptcha-response"].value;
        console.log(captchaResp);
        
        let login = loginForm.elements["login"].value;
        let password = loginForm.elements["password"].value;
        console.log("Data taken...");
        //Сериализация данных в JSON
        
        let userData = JSON.stringify({login: login, password: password, captchaResp: captchaResp});
        let request = new XMLHttpRequest();
        //Отправка POST на /login
        console.log("Data posting...");
        request.open("POST", "/login", true);
        request.setRequestHeader("Content-Type", "application/json");
        request.addEventListener("load", function(){
            console.log("Data returned...")
            let receivedUser = JSON.parse(request.response);
            //console.log(receivedUser.login, " - ", receivedUser.password, " - ", receivedUser.captchaResp); //Вывод ответа сервера
        });
        request.send(userData);
    })
});