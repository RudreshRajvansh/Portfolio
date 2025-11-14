window.onload = function () {
  const change = document.getElementById("change");
  let x = 1;
  setInterval(() => {
    if (x === 1) {
      change.textContent = "Rudresh Rajvansh";
      x = 2;
    } else if (x === 2) {
      change.textContent = "a Student.";
      x = 3;
    } else {
      change.textContent = "a Developer.";
      x = 1;
    }
  }, 1000);
};
