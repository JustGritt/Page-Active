let seconds = 0;
const timeDisplay = document.getElementById('time') as HTMLElement;
const statusMessage = document.getElementById('statusMessage') as HTMLElement;
const resetButton = document.getElementById('timer-reset') as HTMLElement;

if(timeDisplay && statusMessage) {
  const updateTimer = () => {
    seconds++;
    timeDisplay.textContent = seconds.toString();
  };

  const handleReset = () => {
    seconds = -1;
  };

  const handleFocus = () => {
    statusMessage.textContent = 'Active';
  };

  const handleBlur = () => {
    statusMessage.textContent = 'Inactive';
  };

  const handleVideoPause = () => {
    console.log('Video paused due to inactivity');
  };

  setInterval(updateTimer, 1000);
  resetButton.addEventListener('click', handleReset);
  window.addEventListener('focus', handleFocus);
  window.addEventListener('blur', handleBlur);

  const testVideo = document.getElementById('testVideo') as HTMLVideoElement;
  testVideo.addEventListener('pause', handleVideoPause);
}
