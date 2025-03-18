function enlargeOpenGiftButton() {
    let btn = document.getElementById("openGiftButton");

    // Phóng to nút
    let currentSize = window.getComputedStyle(btn).fontSize;
    let newSize = parseFloat(currentSize) * 1.2 + "px";
    btn.style.fontSize = newSize;
    btn.style.padding = "15px 30px";

    // Lấy phần tử chatbox
    const chatBubble = document.querySelector('.chat-bubble');
    const image = document.querySelector('.custom-image');

    // Nếu chatbox đang ẩn thì hiển thị
    if (chatBubble.style.display === 'none' || chatBubble.style.display === '') {
        chatBubble.style.display = 'flex';

        // Hiệu ứng lắc ảnh
        image.classList.add('shake');

        // Sau 500ms, gỡ bỏ hiệu ứng lắc để có thể kích hoạt lại sau
        setTimeout(() => {
            image.classList.remove('shake');
        }, 500);

        // Ẩn chatbox sau 1.5 giây
        setTimeout(() => {
            chatBubble.style.display = 'none';
        }, 500);
    }
}
