(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

// ---------- NUMBER COUNTING ANIMATION ---------------


/*let valueDisplays = document.querySelectorAll(".large-text");
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute
    ("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function() {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if(startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
})*/
