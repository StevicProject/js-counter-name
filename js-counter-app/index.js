const decrease = document.getElementById("decreasebtn");
const reset = document.getElementById("resetbtn");
const increase = document.getElementById("increasebtn");
const countlabel = document.getElementById("countlabel");
let count = 0;

increase.addEventListener("click", function () {
    count++;
    countlabel.textContent = count;
});

decrease.addEventListener("click", function () {
    if (count > 0) {
        count--;
        countlabel.textContent = count;
    }
});

reset.addEventListener("click", function () {
    count = 0;
    countlabel.textContent = count;
});