onload = () => {
  document.body.classList.remove("container");
};

const wrapper = document.querySelector(".wrapper");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const music = document.getElementById('valentineMusic');

// Handle Opening the Envelope and Playing Music
openBtn.addEventListener("click", () => {
    wrapper.classList.add("open");
    openBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
    
    // This makes sure the music starts playing
    if (music) {
        music.play().catch(error => {
            console.log("Music play failed:", error);
        });
    }
});

// Handle Closing the Envelope
closeBtn.addEventListener("click", () => {
    wrapper.classList.remove("open");
    closeBtn.style.display = "none";
    openBtn.style.display = "inline-block";
    
    // Optional: Pause music when closed, or leave it playing!
    // music.pause(); 
});
