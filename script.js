document.addEventListener('DOMContentLoaded', function() {
    const giftBoxContainer = document.querySelector('.gift-box-container');
    const giftBox = document.querySelector('.gift-box');
    const birthdayGreeting = document.querySelector('.birthday-greeting');
    const birthdayMusic = document.getElementById('birthday-music');

    giftBoxContainer.addEventListener('click', () => {
        giftBoxContainer.classList.add('hidden');
        birthdayGreeting.classList.remove('hidden');

        birthdayMusic.currentTime = 0; // Đặt thời gian phát về đầu
        birthdayMusic.play();         // **Phát nhạc NGAY BÂY GIỜ, sau khi click!**
    });
});