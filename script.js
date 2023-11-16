// Lắng nghe sự kiện khi trang web được tải
document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".item");

    // Lắng nghe sự kiện khi con chuột rời khỏi item
    items.forEach(item => {
        item.addEventListener("mouseleave", () => {
            // Ẩn thông tin khi con chuột rời khỏi item
            item.querySelector(".item-info").style.display = "none";
        });
    });
});
