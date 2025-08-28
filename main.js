document.getElementById("iconsetting").onclick = () => {
    document.getElementById("manhinhchinh").hidden = true;
    document.getElementById("settingapp").hidden = false;
};

document.getElementById("mydevicebox").onclick = () => {
    document.getElementById("settingapp").hidden = true;
    document.getElementById("bentrongmp").hidden = false;
};

document.querySelectorAll(".thanhcuchi").forEach(btn => {
    btn.onclick = () => {
        document.getElementById("manhinhchinh").hidden = false;
        document.getElementById("settingapp").hidden = true;
        document.getElementById("bentrongmp").hidden = true;
        document.getElementById("bentrongmpsang").hidden = true;
        // Nếu overlay "none" đang tồn tại, xóa nó
        const overlay = document.getElementById("whitescreen");
        if (overlay) overlay.remove();
        // Ẩn ảnh Easter Egg nếu có
        const eggImg = document.getElementById("Androidversionimg");
        if (eggImg) eggImg.hidden = true;
        // Xóa thanh cử chỉ Easter Egg nếu còn
        const eggGesture = document.getElementById("eggGestureBar");
        if (eggGesture) eggGesture.remove();
    };
});

// === Easter Egg: bấm 5 lần hiện ảnh Android ===
let tapCount = 0;
const tapThreshold = 5;
const eggImg = document.getElementById("Androidversionimg");

// Hai box Android Version từ màn hình sáng & tối
const androidBoxes = [
    document.getElementById("boxandroi"),
    document.getElementById("boxandroisang")
];

androidBoxes.forEach(box => {
    box.addEventListener("click", () => {
        tapCount++;
        if (tapCount >= tapThreshold) {
            // Ẩn tất cả phần tử con trong #screenphone
            document.querySelectorAll("#screenphone > div").forEach(el => {
                el.hidden = true;
            });

            // Hiện ảnh Easter Egg
            eggImg.hidden = false;

            // Hiện thanh pin và đồng hồ app
            const thanhPin = document.querySelector("#screenphone .thanhthongbao");
            if (thanhPin) thanhPin.hidden = false;
            const dongHo = document.querySelector("#screenphone .donghoapp");
            if (dongHo) dongHo.hidden = false;

            // Hiện thanh cử chỉ để thoát Easter Egg
            let eggGesture = document.createElement("div");
            eggGesture.id = "eggGestureBar";
            eggGesture.style.width = "140px";
            eggGesture.style.height = "7px";
            eggGesture.style.borderRadius = "20px";
            eggGesture.style.backgroundColor = "black";
            eggGesture.style.position = "absolute";
            eggGesture.style.bottom = "10px";
            eggGesture.style.left = "50%";
            eggGesture.style.transform = "translateX(-50%)";
            eggGesture.style.zIndex = "1000";
            document.getElementById("screenphone").appendChild(eggGesture);

            // Sự kiện bấm để thoát Easter Egg
            eggGesture.onclick = () => {
                eggImg.hidden = true;
                eggGesture.remove();
                document.getElementById("manhinhchinh").hidden = false;
            };

            tapCount = 0; // reset bộ đếm
        }
    });
});

// === App1 → App11 hiển thị overlay trắng + chữ "none" ===
const appsNone = document.querySelectorAll(".app1, .app2, .app3, .app4, .app5, .app6, .app7, .app8, .app9, .app10, .app11");

appsNone.forEach(app => {
    app.addEventListener("click", () => {
        // Tạo overlay trắng
        const whiteScreen = document.createElement("div");
        whiteScreen.id = "whitescreen";
        whiteScreen.style.width = "306px";
        whiteScreen.style.height = "646.5px";
        whiteScreen.style.backgroundColor = "white";
        whiteScreen.style.position = "absolute";
        whiteScreen.style.top = "0";
        whiteScreen.style.left = "0";
        whiteScreen.style.borderRadius = "43px";
        whiteScreen.style.display = "flex";
        whiteScreen.style.justifyContent = "center";
        whiteScreen.style.alignItems = "center";
        whiteScreen.style.fontFamily = "Arial, sans-serif";
        whiteScreen.style.fontSize = "30px";
        whiteScreen.style.zIndex = "999"; // overlay trên cùng
        whiteScreen.innerText = "none";

        // Thêm thanh cử chỉ vào overlay
        const gestureBar = document.createElement("div");
        gestureBar.style.width = "140px";
        gestureBar.style.height = "7px";
        gestureBar.style.borderRadius = "20px";
        gestureBar.style.backgroundColor = "black";
        gestureBar.style.position = "absolute";
        gestureBar.style.bottom = "10px";
        gestureBar.style.left = "50%";
        gestureBar.style.transform = "translateX(-50%)";
        whiteScreen.appendChild(gestureBar);

        document.getElementById("screenphone").appendChild(whiteScreen);

        // Nhấn thanh cử chỉ để thoát overlay
        gestureBar.onclick = () => {
            whiteScreen.remove();
        };
    });
});
