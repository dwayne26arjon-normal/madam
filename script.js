window.onload = () => {
  document.body.classList.remove("container");
};

const wrapper = document.querySelector(".wrapper");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const music = document.getElementById('valentineMusic');

if (openBtn) {
  openBtn.addEventListener("click", () => {
    wrapper.classList.add("open");
    openBtn.style.display = "none";
    closeBtn.style.display = "inline-block";

    // Play music when "Open" is clicked
    if (music) {
      music.play().catch((error) => {
        console.log("Music play blocked by browser:", error);
      });
    }
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    wrapper.classList.remove("open");
    closeBtn.style.display = "none";
    openBtn.style.display = "inline-block";
    
    // Optional: music.pause(); // Uncomment if you want music to stop when closed
  });
}
