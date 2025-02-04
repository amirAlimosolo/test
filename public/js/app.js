let form = document.querySelector("form");
let submit = document.querySelector("button");

let loadingPage = () => {
  document.querySelector("html").classList.add("exitLoaded");
  // TODO
};

let LoginFrom = () => {
  if (form == true) {
    console.log("شما با موفقست ثبت نام شدید");
    return true;
  } else {
    console.log("ثبت نام شما به مشکل خورد :((");
    return false;
  }
};
console.log("show modal form");
// modal must be show

submit.addEventListener("click", LoginFrom);
if (form == true) {
  console.log("log IN✅")
} else{
  // FIXME
}