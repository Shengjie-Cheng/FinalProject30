//by Yue Yin "WEB CLIENT DEVELOPMENT Final-project 30 UFC Fans website" Lasalle college Winter 2020
function login() {
    var user = document.getElementById("username").value;
    var passwd = document.getElementById("password").value;
    if(user == "admin" && passwd == "12345") {
        alert("Welcome back to UFC Fans' Club");
        window.open('./Welcome.html');
        return ture;
    } else {
        alert("Please check again your username or password");
        return false;
        }
}
function reset(){
        var reset =document.getElementbyId('clear');
        reset.click = document.getElementByclass('form').reset();
}
function payment(){
    alert("Thank you for visiting our website");
}