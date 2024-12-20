// Update selectors
const circularProgressBar = document.querySelector(".progress-bar");
const circularProgressBarNumber = document.querySelector(".progress-value");
const buttonTypePomodoro = document.querySelector("#buttonTypePomodoro");
const buttonTypeShortBreak = document.querySelector("#buttonTypeShortBreak");
const startButton = document.querySelector(".btn-sucess");
const stopButton = document.querySelector(".btn-danger");

// Constants
const pomodoroTimerInSeconds = 1500; // 25 minutes
const shortBreakTimerInSeconds = 300; // 5 minutes
const TIMER_TYPE_POMODORO = "POMODORO";
const TIMER_TYPE_SHORT_BREAK = "SHORTBREAK";
const POMODORO_COMPLETE_MESSAGE = "Time to take a break! 🎉";
const BREAK_COMPLETE_MESSAGE = "Break is over! Back to work 💪";

// Variables
let progressInterval;
let pomodoroType = TIMER_TYPE_POMODORO;
let timerValue = pomodoroTimerInSeconds;
let multiplierFactor = 360 / timerValue;
let isRunning = false;
let customTimerInSeconds = 0;

function formatNumberInStringMinute(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;
}

function showCompletionAlert() {
  const message =
    pomodoroType === TIMER_TYPE_POMODORO
      ? POMODORO_COMPLETE_MESSAGE
      : BREAK_COMPLETE_MESSAGE;
  alert(message);
}

function setInfoCircularProgressBar() {
  if (timerValue === 0) {
    stopTimer();
    showCompletionAlert();
  }

  const totalTime =
    pomodoroType === TIMER_TYPE_POMODORO
      ? pomodoroTimerInSeconds
      : shortBreakTimerInSeconds;
  const progress = ((totalTime - timerValue) / totalTime) * 360;

  circularProgressBarNumber.textContent =
    formatNumberInStringMinute(timerValue);

  // Three color gradient with clockwise rotation
  circularProgressBar.style.background = `conic-gradient(
    from 0deg,
    var(--catalina-blue) 0deg,
    var(--red) ${progress * 0.33}deg,
    var(--oren-belanda) ${progress * 0.66}deg,
    #ddd ${progress}deg 360deg
  )`;
}

function startTimer() {
  if (!isRunning) {
    progressInterval = setInterval(() => {
      timerValue--;
      setInfoCircularProgressBar();
    }, 1000);
    isRunning = true;
    startButton.textContent = "Pause";
  } else {
    clearInterval(progressInterval);
    isRunning = false;
    startButton.textContent = "Resume";
  }
}

function stopTimer() {
  clearInterval(progressInterval);
  isRunning = false;
  startButton.textContent = "Start";
}
// custom timer
function setCustomTimer() {
  const minutes = parseInt(document.querySelector("#customMinutes").value);

  if (isNaN(minutes) || minutes < 1 || minutes > 60) {
    alert("Masukkan waktu antara 1-60 menit");
    return;
  }

  customTimerInSeconds = minutes * 60;
  timerValue = customTimerInSeconds;
  multiplierFactor = 360 / timerValue;

  // Reset dan update display
  stopTimer();
  setInfoCircularProgressBar();
}

function resetTimer() {
  stopTimer();
  timerValue =
    pomodoroType === TIMER_TYPE_POMODORO
      ? pomodoroTimerInSeconds
      : shortBreakTimerInSeconds;
  multiplierFactor = 360 / timerValue;
  setInfoCircularProgressBar();
}

function setPomodoroType(type) {
  pomodoroType = type;
  resetTimer();

  buttonTypeShortBreak.classList.toggle(
    "active",
    type === TIMER_TYPE_SHORT_BREAK
  );
  buttonTypePomodoro.classList.toggle("active", type === TIMER_TYPE_POMODORO);
}
// Initialize progress bar
setInfoCircularProgressBar();
