let valueDisplays = document.querySelectorAll(".pbig");
let interval = 1000;

valueDisplays.forEach((valueDisplays) => {
    let starValue = 0;
    let endValue = parseInt(valueDisplays.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        starValue +=1;
        valueDisplays.textContent = starValue;
        if (starValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});