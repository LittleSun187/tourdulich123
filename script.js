document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.querySelector(".btn-primary");

    searchButton.addEventListener("click", () => {
        alert("Chào mừng bạn đến với hành trình khám phá thế giới cùng chúng tôi!");
    });
});
document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Ngăn không cho form submit mặc định

    // Lấy giá trị từ các input trong form
    const hotel = document.getElementById('hotel').value;
    const checkIn = document.getElementById('check-in').value;
    const checkOut = document.getElementById('check-out').value;
    const guests = document.getElementById('guests').value;
    const roomType = document.getElementById('room-type').value;

    // Hiển thị thông báo cho người dùng
    alert(`Đặt phòng thành công!\nKhách sạn: ${hotel}\nNgày nhận phòng: ${checkIn}\nNgày trả phòng: ${checkOut}\nSố khách: ${guests}\nLoại phòng: ${roomType}`);

    // Bạn có thể gửi dữ liệu này đến máy chủ nếu cần (ví dụ dùng AJAX hoặc Fetch)
});





