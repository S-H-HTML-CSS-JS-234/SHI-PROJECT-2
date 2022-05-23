const primaryNav = document.querySelector(".nav");
const navToggle = document.querySelector(".mobile-nav-toggle");
const passOne = document.querySelector("#pass-1", )
const passTwo = document.querySelector("#pass-2")
const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirm-password")
const submit = document.querySelector(".submit")

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible")
   
    const setTrue = () => {
        primaryNav.setAttribute("data-visible", true)
        navToggle.setAttribute("area-expanded", true)
    }

    const setFalse = () => {
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute("area-expanded", false)
    }

    visibility === "false" ? setTrue() : setFalse();
})

passOne.addEventListener("click", () => {
    const viewPass = passOne.getAttribute("view")

    const setTrue = () => {
        passOne.setAttribute("view", true);
        passOne.setAttribute("class", "fa fa-eye");
        password.setAttribute("type", "text");
    }

    const setFalse = () => {
        passOne.setAttribute("view", false);
        passOne.setAttribute("class", "fa fa-eye-slash");
        password.setAttribute("type", "password");
    }

    viewPass === "false" ? setTrue() : setFalse();
})

passTwo.addEventListener("click", () => {
    const viewPass = passTwo.getAttribute("view")

    const setTrue = () => {
        passTwo.setAttribute("view", true);
        passTwo.setAttribute("class", "fa fa-eye");
        confirmPassword.setAttribute("type", "text");
    }

    const setFalse = () => {
        passTwo.setAttribute("view", false);
        passTwo.setAttribute("class", "fa fa-eye-slash");
        confirmPassword.setAttribute("type", "password");
    }

    viewPass === "false" ? setTrue() : setFalse();
})

const signup = () => {
    alert("WEBSITE IS UNDER MAINTAINANCE, TRY AGAIN LATER")
}

handleSubmit = () => {
    const passValue = password.getAttribute("value")
    const confPassValue = confirmPassword.getAttribute("value")

    passValue === confPassValue ? signup() : alert("password must be same as confirm password")
}

submit.addEventListener("click", handleSubmit())