let form = document.querySelector("form");
let submit = document.querySelector("button")

let LoginFrom = () => {
    if (form == true) {
        console.log("شما با موفقست ثبت نام شدید");
    } else {
        console.log("ثبت نام شما به مشکل خورد :((");
    }
}

submit.addEventListener("click", LoginFrom)