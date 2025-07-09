startBtn.addEventListener("click", () => {
    startBtn.classList.toggle("shadow");
    audioPlayer.src = sounds.pressButton;
    audioPlayer.load();
    audioPlayer.play();
    if (startBtn.textContent.trim() === "START") {
        startBtn.textContent = "PAUSE";
        interval = setInterval(() => {
            remainingTime--;
            timer.textContent = renderTime(remainingTime);
            if (remainingTime === 0) {
                clearInterval(interval);
                startBtn.textContent = "START";
                startBtn.classList.toggle("shadow");
                timer.textContent = renderTime(time);
                remainingTime = time;
                audioPlayer.src = sounds.alarm;
                audioPlayer.load();
                audioPlayer.play();
            }
        }, 1000);
    }
    else {
        startBtn.textContent = "START";
        clearInterval(interval);
    }
});