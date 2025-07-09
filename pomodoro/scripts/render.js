function renderTime(seconds) {
    return `${Math.floor(seconds / 60)
        .toString()
        .padStart(2, "0")}:${(seconds % 60)
        .toString()
        .padStart(2, "0")}`;
}

function render(choice=0) {
    for (let i = 0; i < choices.length; i++) {
        const btn = document.createElement("button");
        btn.classList.add("nav-item");
        if (i === choice) btn.classList.add("focus");
        btn.textContent = choices[i].name;
        btn.addEventListener("click", () => {
            for (const b of navButtons.children) {
                b.classList.remove("focus");
            };
            btn.classList.add("focus");
            body.style.backgroundColor = choices[i].color;
            startBtn.style.color = choices[i].color;
            timer.textContent = renderTime(choices[i].time);
            time = choices[i].time;
            remainingTime = choices[i].time;
        });
        navButtons.appendChild(btn);
    }
    body.style.backgroundColor = choices[choice].color;
    startBtn.style.color = choices[choice].color;
    timer.textContent = renderTime(choices[choice].time);
    time = choices[choice].time;
    remainingTime = choices[choice].time;
}

render();   