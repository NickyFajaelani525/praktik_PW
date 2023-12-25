function auth() {
    const usernmane = "Nicky"
    const Password = "050205"

    //tangkap input user 
    let userinput = document.getElementById('username').value
    let passinput = document.getElementById('password').value

    if (usernmane == userinput && Password == passinput) {
        alert("Login Success tapi maaf untuk sukses nanti ya hhe")
        document.location ="home.html"
    } else {
        alert("Username atau password salah yang bener blok")
    }

}