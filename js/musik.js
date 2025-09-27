document.addEventListener("DOMContentLoaded", () => {
  const musicBtn = document.getElementById("music-btn");
  const music = document.getElementById("background-music");
  const visualizer = document.getElementById("visualizer");
  const icon = musicBtn.querySelector("i");

  let isPlaying = false;

  musicBtn.addEventListener("click", () => {
    if (!isPlaying) {
      music.play();
      visualizer.classList.add("active");
      icon.classList.remove("fa-play");
      icon.classList.add("fa-pause");
      musicBtn.innerHTML = `<i class="fas fa-pause"></i> Pause Music`;
      isPlaying = true;
    } else {
      music.pause();
      visualizer.classList.remove("active");
      icon.classList.remove("fa-pause");
      icon.classList.add("fa-play");
      musicBtn.innerHTML = `<i class="fas fa-play"></i> Play Music`;
      isPlaying = false;
    }
  });
});
