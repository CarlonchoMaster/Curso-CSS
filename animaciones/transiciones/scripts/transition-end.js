const button = document.getElementById("button");
const ball = document.getElementById("ball");
const bodyStyles = document.body.classList;

button.addEventListener("click", (e) => {
  bodyStyles.add("animate");
  ball.addEventListener("transitionend", (e) => {
    //document.body.classList.remove('animate');
    if (e.propertyName === "top") {
      bodyStyles.remove("animate");
    }
  });
});
