const audioPlayer = document.getElementById('audioPlayer')
const playBtn = document.getElementById('playBtn')
const pauseBtn = document.getElementById('pauseBtn')
const forwardBtn = document.getElementById('forwardBtn')
const rewindBtn = document.getElementById('rewindBtn')
const currentTimeDisplay = document.getElementById('currentTime')

function updateCurrentTime() {
    const currentTime = Math.floor(audioPlayer.currentTime)
    const minutes = Math.floor(currentTime / 60).toString().padStart(2, '0')
    const seconds = (currentTime % 60).toString().padStart(2, '0')
    currentTimeDisplay.textContent = `${minutes}:${seconds}`
}

playBtn.addEventListener('click', () => {
    audioPlayer.play()
})

pauseBtn.addEventListener('click', () => {
    audioPlayer.pause()
})

forwardBtn.addEventListener('click', () => {
    audioPlayer.currentTime += 10
})

rewindBtn.addEventListener('click', () => {
    audioPlayer.currentTime -= 10
})

audioPlayer.addEventListener('timeupdate', updateCurrentTime)