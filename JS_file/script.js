    const userPassword = document.querySelector("#userPassword");
    const showpassword = document.querySelector("#check_btn");
    showpassword.addEventListener("click", () => {
        if (userPassword.type === "password") {
            userPassword.type = "text"
        } else {
            userPassword.type = "password"
        }
    });

    