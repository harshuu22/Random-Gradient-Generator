let btn1 = document.getElementById('mybtn1');
let btn2 = document.getElementById('mybtn2');
let copy = document.querySelector(".copycode");
let rgb1 = "#000";
let rgb2 = "#fff";

//getting random hexa color code '#8f584b'
const hexvalues = () => {
    let hex = "0123456789abcdef";
    let rgbValue = "#";
    for (let i = 0; i < 6; i++) {
        rgbValue = rgbValue + hex[Math.floor(Math.random() * 16)];
    }
    return rgbValue;
}

//adding color to the background and updating background-image property 
const handleButton1 = () => {
    rgb1 = hexvalues();
    btn1.innerText = rgb1;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1},${rgb2})`;
    copy.innerHTML = `background-image: linear-gradient(to right,${rgb1},${rgb2});`;
};

//adding color to the background and updating background-image property        
const handleButton2 = () => {
    rgb2 = hexvalues();
    btn2.innerText = rgb2;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1},${rgb2})`;
    copy.innerHTML = `background-image: linear-gradient(to right,${rgb1},${rgb2});`;
}
btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);

//logic of copy text
copy.addEventListener("click", () => {
    navigator.clipboard.writeText(copy.innerText);
});