document.addEventListener("DOMContentLoaded", function () {
    const lightCandlesBtn = document.getElementById("light-candles");
    const makeWishBtn = document.getElementById("make-wish");
    const openCardBtn = document.getElementById("open-card");
    const cake = document.querySelector(".cake");
    const candlesContainer = document.querySelector(".candles");
    const wishContainer = document.getElementById("wish-container");
    const sendWishBtn = document.getElementById("send-wish");
    const wishOverlay = document.getElementById("wish-overlay");
    let candlesLit = false;
    const birthdayMusic = new Audio("music.mp3");
    birthdayMusic.loop = true;

    function createCandles() {
        for (let i = 0; i < 14; i++) {
            const candle = document.createElement("div");
            candle.classList.add("candle");
            candle.style.left = `${10 + i * 20}px`;
            const flame = document.createElement("div");
            flame.classList.add("flame");
            candle.appendChild(flame);
            candlesContainer.appendChild(candle);
        }
    }

    createCandles();
    const flames = document.querySelectorAll(".flame");

    function toggleOverlay(overlayId, show) {
        const overlay = document.getElementById(overlayId);
        if (overlay) {
            overlay.style.display = show ? "block" : "none";
        }
    }

    function lightCandles() {
        const overlay = document.createElement("div");
        overlay.classList.add("dark-mode");
        overlay.setAttribute("id", "overlay");
        document.body.appendChild(overlay); // Thêm overlay vào body

        cake.classList.add("glow");
        flames.forEach(flame => flame.classList.add("lit"));
        lightCandlesBtn.textContent = "Tắt Nến";
        makeWishBtn.classList.remove("hidden");
        birthdayMusic.play();
        candlesLit = true;
    }

    function extinguishCandles() {
         const overlay = document.getElementById("overlay");
        if (overlay) overlay.remove();

        cake.classList.remove("glow");
        flames.forEach(flame => flame.classList.remove("lit"));
        lightCandlesBtn.textContent = "Thắp Nến";
        makeWishBtn.classList.add("hidden");
        birthdayMusic.pause();
        birthdayMusic.currentTime = 0;
        candlesLit = false;
        toggleOverlay("wish-overlay", false); // Ẩn wishOverlay khi tắt nến
    }


    function handleWish() {
        wishContainer.classList.remove("hidden");
        toggleOverlay("wish-overlay", true); // Hiện wishOverlay
        lightCandlesBtn.disabled = true;
    }

    function sendWish() {
        const wishInput = document.getElementById("wish-input");
        const wishText = wishInput.value.trim();

        if (wishText !== "") {
            wishContainer.classList.add("hidden");
            toggleOverlay("wish-overlay", false);

            const star = document.createElement("div");
            star.classList.add("wish-star");
            star.textContent = "⭐ " + wishText;
            document.body.appendChild(star);

            star.addEventListener("animationend", () => {
                star.remove();
                openCardBtn.classList.remove("hidden");
                lightCandlesBtn.disabled = false;
            });

            setTimeout(() => {
                star.style.transform = "translateY(-200px) rotate(720deg)";
                star.style.opacity = "0";
            }, 100);
        }
    }

    // Gộp event listener cho lightCandlesBtn
    lightCandlesBtn.addEventListener("click", function () {
        if (!candlesLit) {
            lightCandles();
        } else {
            extinguishCandles();
        }
    });

    makeWishBtn.addEventListener("click", handleWish);
    sendWishBtn.addEventListener("click", sendWish);
});