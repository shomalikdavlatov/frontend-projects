const body = document.body;
const navButtons = document.querySelector(".nav");
const timer = document.querySelector(".timer");
const startBtn = document.querySelector(".start-btn");
const audioPlayer = document.querySelector(".audio-player");
let time;
let remainingTime;
let interval;

const choices = [
    {
        name: "Pomodoro",
        time: 1500,
        color: "#BA4849",
    },
    {
        name: "Short Break",
        time: 300,
        color: "#38848A",
    },
    {
        name: "Long Break",
        time: 900,
        color: "#397097",
    },
];

const sounds = {
    pressButton: "https://pomofocus.io/audios/general/button.wav",
    alarm: "https://pomofocus.io/audios/alarms/alarm-digital.mp3",
};