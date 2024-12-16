// Hàm tạo các trái tim bay lên
function createHearts() {
    const heartContainer = document.getElementById('heart-container');
    const heartCount = 20;  // Số lượng trái tim
    for (let i = 0; i < heartCount; i++) {
        let heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerText = '❤️';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${Math.random() * 2 + 2}s`;
        heart.style.animationDelay = `${Math.random() * 3}s`;
        heartContainer.appendChild(heart);
    }
}

function checkCode() {
    const inputCode = document.getElementById("inputCode").value;

    if (inputCode === "Hello bạn") {
        // Ẩn màn hình nhập mã
        document.getElementById("input-container").style.display = "none";

        // Thay đổi màu nền thành trắng
        document.body.style.backgroundColor = "#ffffff";

        // Hiển thị trái tim bay lên
        createHearts();

        // Hiển thị thông điệp
        const finalMessage = document.getElementById("final-message");
        finalMessage.style.display = "block";

        // Đảm bảo hiệu ứng fadeIn được áp dụng
        finalMessage.style.animation = "fadeIn 2s ease-out";
    } else {
        document.getElementById("message").innerText = "Mã sai, thử lại nhé!";
        document.getElementById("message").style.color = "red";
    }
}
