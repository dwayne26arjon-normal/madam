onload = () => {
  document.body.classList.remove("container");
};

const wrapper = document.querySelector(".wrapper");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const music = document.getElementById('valentineMusic');

openBtn.addEventListener("click", () => {
  wrapper.classList.add("open");
  openBtn.style.display = "none";
  closeBtn.style.display = "inline-block";
  
  // Play music with a "catch" to prevent errors
  if (music) {
    music.play().catch(e => console.error("Playback failed:", e));
  }
});

closeBtn.addEventListener("click", () => {
  wrapper.classList.remove("open");
  closeBtn.style.display = "none";
  openBtn.style.display = "inline-block";
  // Optional: music.pause(); // Keep this if you want music to stop on close
});
