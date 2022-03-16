document.addEventListener("DOMContentLoaded", function(event) {
    // 你的所有代码都应该写在这里
    let targetImage = document.querySelector("#smart-image");
   
    if (targetImage.classList.contains("small")) {
    // ...
    targetImage.addEventListener("click", function() {
    alert("点击了图片");
    targetImage.classList.add("small");
});
} else {
    // ...
    targetImage.addEventListener("click", function() {
    alert("点击了图片");
    targetImage.classList.remove("small");
});
}
});
});
