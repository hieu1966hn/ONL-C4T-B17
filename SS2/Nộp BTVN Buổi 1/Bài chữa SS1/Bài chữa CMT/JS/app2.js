let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");

let x_one,x_two,x_three,x_four,x_five,x_six,x_seven,x_eight,x_nine,o_one,o_two,o_three,o_four,o_five,o_six,o_seven,o_eight,o_nine
let turn = 0;
function first(){
    if(turn % 2 == 0){
        one.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/768px-Red_X.svg.png";
        x_one = true;
    }else{
        one.src = "https://lh3.googleusercontent.com/_Ckisr7PhoUWRJ-sf1YQjjv2GiUegHub1IiGZ4GKLeOnBzq_5Q28a1LhSlTSoBrKSfyeTYQRY_Tpx1dF458z0lZqLvyB_VmzVJYn2XOfPPywAWHhbSNGO_H2Ph-LAirYamJKTT1gHYRGnQ2CUxxDjlZHnRnmyI80mVvJ2JzFzZjS_Z_anxk6UCv2PETe-y5aOGlOXIhJnW5qw-NX6rXPfa8gzvsebNVvi0XQ2DRvQwh2NO0A0pZ-n4Ty3SovC9ADW1GRdGQKY4tfklP2rFyop_YEGqeKhs2ZsI4OQhwR_mqRwpvv6fOTYIVUCXqM4OQA4zCUaV-05DdykB2d8k_IwerQvEQUraxXzM6Z0zd-EeuijLCwFL4eLDoE3sd6wHmuec8p9KluABBtQDSNvztPykROVLGSaFCZtUX9EoOpEzpwqS5cMf0GbphFY0DXukYjptlkpmwoc8shdG0R54NCcLGseba3JqJ79K5Z7bMOlpJtKvCMXC2tgsLkH-BYdvrHvFD_4nocN4G_szlP8TNTR6raa8y9P7TEmfbM81ySZmMG8YpXDHqbujaxQQr5QcWkqrBF5M6le0ATZq18hzuUluFF1Dqum33clwsOH5bYA_qq74MmsmfR2LhZj0lVIjZsvKV3l8CH8FufYIQAyRgcuh3jIHwNbPX_gtaPs2MKcxnUxkDSV6MUP8ORy6EcCA=s300-no?authuser=0";
        o_one = true;
    }
    check();
    turn++;
}
function second(){
    if(turn % 2 == 0){
        two.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/768px-Red_X.svg.png";
        x_two = true;
    }else{
        two.src = "https://lh3.googleusercontent.com/_Ckisr7PhoUWRJ-sf1YQjjv2GiUegHub1IiGZ4GKLeOnBzq_5Q28a1LhSlTSoBrKSfyeTYQRY_Tpx1dF458z0lZqLvyB_VmzVJYn2XOfPPywAWHhbSNGO_H2Ph-LAirYamJKTT1gHYRGnQ2CUxxDjlZHnRnmyI80mVvJ2JzFzZjS_Z_anxk6UCv2PETe-y5aOGlOXIhJnW5qw-NX6rXPfa8gzvsebNVvi0XQ2DRvQwh2NO0A0pZ-n4Ty3SovC9ADW1GRdGQKY4tfklP2rFyop_YEGqeKhs2ZsI4OQhwR_mqRwpvv6fOTYIVUCXqM4OQA4zCUaV-05DdykB2d8k_IwerQvEQUraxXzM6Z0zd-EeuijLCwFL4eLDoE3sd6wHmuec8p9KluABBtQDSNvztPykROVLGSaFCZtUX9EoOpEzpwqS5cMf0GbphFY0DXukYjptlkpmwoc8shdG0R54NCcLGseba3JqJ79K5Z7bMOlpJtKvCMXC2tgsLkH-BYdvrHvFD_4nocN4G_szlP8TNTR6raa8y9P7TEmfbM81ySZmMG8YpXDHqbujaxQQr5QcWkqrBF5M6le0ATZq18hzuUluFF1Dqum33clwsOH5bYA_qq74MmsmfR2LhZj0lVIjZsvKV3l8CH8FufYIQAyRgcuh3jIHwNbPX_gtaPs2MKcxnUxkDSV6MUP8ORy6EcCA=s300-no?authuser=0";
        o_two = true;
    }
    check();
    turn++;
}
function third(){
    if(turn % 2 == 0){
        three.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/768px-Red_X.svg.png";
        x_three = true;
    }else{
        three.src = "https://lh3.googleusercontent.com/_Ckisr7PhoUWRJ-sf1YQjjv2GiUegHub1IiGZ4GKLeOnBzq_5Q28a1LhSlTSoBrKSfyeTYQRY_Tpx1dF458z0lZqLvyB_VmzVJYn2XOfPPywAWHhbSNGO_H2Ph-LAirYamJKTT1gHYRGnQ2CUxxDjlZHnRnmyI80mVvJ2JzFzZjS_Z_anxk6UCv2PETe-y5aOGlOXIhJnW5qw-NX6rXPfa8gzvsebNVvi0XQ2DRvQwh2NO0A0pZ-n4Ty3SovC9ADW1GRdGQKY4tfklP2rFyop_YEGqeKhs2ZsI4OQhwR_mqRwpvv6fOTYIVUCXqM4OQA4zCUaV-05DdykB2d8k_IwerQvEQUraxXzM6Z0zd-EeuijLCwFL4eLDoE3sd6wHmuec8p9KluABBtQDSNvztPykROVLGSaFCZtUX9EoOpEzpwqS5cMf0GbphFY0DXukYjptlkpmwoc8shdG0R54NCcLGseba3JqJ79K5Z7bMOlpJtKvCMXC2tgsLkH-BYdvrHvFD_4nocN4G_szlP8TNTR6raa8y9P7TEmfbM81ySZmMG8YpXDHqbujaxQQr5QcWkqrBF5M6le0ATZq18hzuUluFF1Dqum33clwsOH5bYA_qq74MmsmfR2LhZj0lVIjZsvKV3l8CH8FufYIQAyRgcuh3jIHwNbPX_gtaPs2MKcxnUxkDSV6MUP8ORy6EcCA=s300-no?authuser=0";
        o_three = true;
    }
    check();
    turn++;
}
function fourth(){
    if(turn % 2 == 0){
        four.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/768px-Red_X.svg.png";
        x_four = true;
    }else{
        four.src = "https://lh3.googleusercontent.com/_Ckisr7PhoUWRJ-sf1YQjjv2GiUegHub1IiGZ4GKLeOnBzq_5Q28a1LhSlTSoBrKSfyeTYQRY_Tpx1dF458z0lZqLvyB_VmzVJYn2XOfPPywAWHhbSNGO_H2Ph-LAirYamJKTT1gHYRGnQ2CUxxDjlZHnRnmyI80mVvJ2JzFzZjS_Z_anxk6UCv2PETe-y5aOGlOXIhJnW5qw-NX6rXPfa8gzvsebNVvi0XQ2DRvQwh2NO0A0pZ-n4Ty3SovC9ADW1GRdGQKY4tfklP2rFyop_YEGqeKhs2ZsI4OQhwR_mqRwpvv6fOTYIVUCXqM4OQA4zCUaV-05DdykB2d8k_IwerQvEQUraxXzM6Z0zd-EeuijLCwFL4eLDoE3sd6wHmuec8p9KluABBtQDSNvztPykROVLGSaFCZtUX9EoOpEzpwqS5cMf0GbphFY0DXukYjptlkpmwoc8shdG0R54NCcLGseba3JqJ79K5Z7bMOlpJtKvCMXC2tgsLkH-BYdvrHvFD_4nocN4G_szlP8TNTR6raa8y9P7TEmfbM81ySZmMG8YpXDHqbujaxQQr5QcWkqrBF5M6le0ATZq18hzuUluFF1Dqum33clwsOH5bYA_qq74MmsmfR2LhZj0lVIjZsvKV3l8CH8FufYIQAyRgcuh3jIHwNbPX_gtaPs2MKcxnUxkDSV6MUP8ORy6EcCA=s300-no?authuser=0";
        o_four = true;
    }
    check();
    turn++;
}
function fiveth(){
    if(turn % 2 == 0){
        five.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/768px-Red_X.svg.png";
        x_five = true;
    }else{
        five.src = "https://lh3.googleusercontent.com/_Ckisr7PhoUWRJ-sf1YQjjv2GiUegHub1IiGZ4GKLeOnBzq_5Q28a1LhSlTSoBrKSfyeTYQRY_Tpx1dF458z0lZqLvyB_VmzVJYn2XOfPPywAWHhbSNGO_H2Ph-LAirYamJKTT1gHYRGnQ2CUxxDjlZHnRnmyI80mVvJ2JzFzZjS_Z_anxk6UCv2PETe-y5aOGlOXIhJnW5qw-NX6rXPfa8gzvsebNVvi0XQ2DRvQwh2NO0A0pZ-n4Ty3SovC9ADW1GRdGQKY4tfklP2rFyop_YEGqeKhs2ZsI4OQhwR_mqRwpvv6fOTYIVUCXqM4OQA4zCUaV-05DdykB2d8k_IwerQvEQUraxXzM6Z0zd-EeuijLCwFL4eLDoE3sd6wHmuec8p9KluABBtQDSNvztPykROVLGSaFCZtUX9EoOpEzpwqS5cMf0GbphFY0DXukYjptlkpmwoc8shdG0R54NCcLGseba3JqJ79K5Z7bMOlpJtKvCMXC2tgsLkH-BYdvrHvFD_4nocN4G_szlP8TNTR6raa8y9P7TEmfbM81ySZmMG8YpXDHqbujaxQQr5QcWkqrBF5M6le0ATZq18hzuUluFF1Dqum33clwsOH5bYA_qq74MmsmfR2LhZj0lVIjZsvKV3l8CH8FufYIQAyRgcuh3jIHwNbPX_gtaPs2MKcxnUxkDSV6MUP8ORy6EcCA=s300-no?authuser=0";
        o_five = true;
    }
    check();
    turn++;
}
function sixth(){
    if(turn % 2 == 0){
        six.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/768px-Red_X.svg.png";
        x_six = true;
    }else{
        six.src = "https://lh3.googleusercontent.com/_Ckisr7PhoUWRJ-sf1YQjjv2GiUegHub1IiGZ4GKLeOnBzq_5Q28a1LhSlTSoBrKSfyeTYQRY_Tpx1dF458z0lZqLvyB_VmzVJYn2XOfPPywAWHhbSNGO_H2Ph-LAirYamJKTT1gHYRGnQ2CUxxDjlZHnRnmyI80mVvJ2JzFzZjS_Z_anxk6UCv2PETe-y5aOGlOXIhJnW5qw-NX6rXPfa8gzvsebNVvi0XQ2DRvQwh2NO0A0pZ-n4Ty3SovC9ADW1GRdGQKY4tfklP2rFyop_YEGqeKhs2ZsI4OQhwR_mqRwpvv6fOTYIVUCXqM4OQA4zCUaV-05DdykB2d8k_IwerQvEQUraxXzM6Z0zd-EeuijLCwFL4eLDoE3sd6wHmuec8p9KluABBtQDSNvztPykROVLGSaFCZtUX9EoOpEzpwqS5cMf0GbphFY0DXukYjptlkpmwoc8shdG0R54NCcLGseba3JqJ79K5Z7bMOlpJtKvCMXC2tgsLkH-BYdvrHvFD_4nocN4G_szlP8TNTR6raa8y9P7TEmfbM81ySZmMG8YpXDHqbujaxQQr5QcWkqrBF5M6le0ATZq18hzuUluFF1Dqum33clwsOH5bYA_qq74MmsmfR2LhZj0lVIjZsvKV3l8CH8FufYIQAyRgcuh3jIHwNbPX_gtaPs2MKcxnUxkDSV6MUP8ORy6EcCA=s300-no?authuser=0";
        o_six = true;
    }
    check();
    turn++;
}
function seventh(){
    if(turn % 2 == 0){
        seven.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/768px-Red_X.svg.png";
        x_seven = true;
    }else{
        seven.src = "https://lh3.googleusercontent.com/_Ckisr7PhoUWRJ-sf1YQjjv2GiUegHub1IiGZ4GKLeOnBzq_5Q28a1LhSlTSoBrKSfyeTYQRY_Tpx1dF458z0lZqLvyB_VmzVJYn2XOfPPywAWHhbSNGO_H2Ph-LAirYamJKTT1gHYRGnQ2CUxxDjlZHnRnmyI80mVvJ2JzFzZjS_Z_anxk6UCv2PETe-y5aOGlOXIhJnW5qw-NX6rXPfa8gzvsebNVvi0XQ2DRvQwh2NO0A0pZ-n4Ty3SovC9ADW1GRdGQKY4tfklP2rFyop_YEGqeKhs2ZsI4OQhwR_mqRwpvv6fOTYIVUCXqM4OQA4zCUaV-05DdykB2d8k_IwerQvEQUraxXzM6Z0zd-EeuijLCwFL4eLDoE3sd6wHmuec8p9KluABBtQDSNvztPykROVLGSaFCZtUX9EoOpEzpwqS5cMf0GbphFY0DXukYjptlkpmwoc8shdG0R54NCcLGseba3JqJ79K5Z7bMOlpJtKvCMXC2tgsLkH-BYdvrHvFD_4nocN4G_szlP8TNTR6raa8y9P7TEmfbM81ySZmMG8YpXDHqbujaxQQr5QcWkqrBF5M6le0ATZq18hzuUluFF1Dqum33clwsOH5bYA_qq74MmsmfR2LhZj0lVIjZsvKV3l8CH8FufYIQAyRgcuh3jIHwNbPX_gtaPs2MKcxnUxkDSV6MUP8ORy6EcCA=s300-no?authuser=0";
        o_seven = true;
    }
    check();
    turn++;
}
function eighth(){
    if(turn % 2 == 0){
        eight.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/768px-Red_X.svg.png";
        x_eight = true;
    }else{
        eight.src = "https://lh3.googleusercontent.com/_Ckisr7PhoUWRJ-sf1YQjjv2GiUegHub1IiGZ4GKLeOnBzq_5Q28a1LhSlTSoBrKSfyeTYQRY_Tpx1dF458z0lZqLvyB_VmzVJYn2XOfPPywAWHhbSNGO_H2Ph-LAirYamJKTT1gHYRGnQ2CUxxDjlZHnRnmyI80mVvJ2JzFzZjS_Z_anxk6UCv2PETe-y5aOGlOXIhJnW5qw-NX6rXPfa8gzvsebNVvi0XQ2DRvQwh2NO0A0pZ-n4Ty3SovC9ADW1GRdGQKY4tfklP2rFyop_YEGqeKhs2ZsI4OQhwR_mqRwpvv6fOTYIVUCXqM4OQA4zCUaV-05DdykB2d8k_IwerQvEQUraxXzM6Z0zd-EeuijLCwFL4eLDoE3sd6wHmuec8p9KluABBtQDSNvztPykROVLGSaFCZtUX9EoOpEzpwqS5cMf0GbphFY0DXukYjptlkpmwoc8shdG0R54NCcLGseba3JqJ79K5Z7bMOlpJtKvCMXC2tgsLkH-BYdvrHvFD_4nocN4G_szlP8TNTR6raa8y9P7TEmfbM81ySZmMG8YpXDHqbujaxQQr5QcWkqrBF5M6le0ATZq18hzuUluFF1Dqum33clwsOH5bYA_qq74MmsmfR2LhZj0lVIjZsvKV3l8CH8FufYIQAyRgcuh3jIHwNbPX_gtaPs2MKcxnUxkDSV6MUP8ORy6EcCA=s300-no?authuser=0";
        o_eight = true;
    }
    check();
    turn++;
}
function nineth(){
    if(turn % 2 == 0){
        nine.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/768px-Red_X.svg.png";
        x_nine = true;
    }else{
        nine.src = "https://lh3.googleusercontent.com/_Ckisr7PhoUWRJ-sf1YQjjv2GiUegHub1IiGZ4GKLeOnBzq_5Q28a1LhSlTSoBrKSfyeTYQRY_Tpx1dF458z0lZqLvyB_VmzVJYn2XOfPPywAWHhbSNGO_H2Ph-LAirYamJKTT1gHYRGnQ2CUxxDjlZHnRnmyI80mVvJ2JzFzZjS_Z_anxk6UCv2PETe-y5aOGlOXIhJnW5qw-NX6rXPfa8gzvsebNVvi0XQ2DRvQwh2NO0A0pZ-n4Ty3SovC9ADW1GRdGQKY4tfklP2rFyop_YEGqeKhs2ZsI4OQhwR_mqRwpvv6fOTYIVUCXqM4OQA4zCUaV-05DdykB2d8k_IwerQvEQUraxXzM6Z0zd-EeuijLCwFL4eLDoE3sd6wHmuec8p9KluABBtQDSNvztPykROVLGSaFCZtUX9EoOpEzpwqS5cMf0GbphFY0DXukYjptlkpmwoc8shdG0R54NCcLGseba3JqJ79K5Z7bMOlpJtKvCMXC2tgsLkH-BYdvrHvFD_4nocN4G_szlP8TNTR6raa8y9P7TEmfbM81ySZmMG8YpXDHqbujaxQQr5QcWkqrBF5M6le0ATZq18hzuUluFF1Dqum33clwsOH5bYA_qq74MmsmfR2LhZj0lVIjZsvKV3l8CH8FufYIQAyRgcuh3jIHwNbPX_gtaPs2MKcxnUxkDSV6MUP8ORy6EcCA=s300-no?authuser=0";
        o_nine = true;
    }
    check();
    turn++;
}
function reset(){
    turn = 0;
    x_one = false;
    x_two = false;
    x_three = false;
    x_four = false;
    x_five = false;
    x_six = false;
    x_seven = false;
    x_eight = false;
    x_nine = false;
    o_one = false;
    o_two = false;
    o_three = false;
    o_four = false;
    o_five = false;
    o_six = false;
    o_seven = false;
    o_eight = false;
    o_nine = false;
    one.src = "https://st.quantrimang.com/photos/image/2020/07/30/Hinh-Nen-Trang-10.jpg";
    two.src = "https://st.quantrimang.com/photos/image/2020/07/30/Hinh-Nen-Trang-10.jpg";
    three.src = "https://st.quantrimang.com/photos/image/2020/07/30/Hinh-Nen-Trang-10.jpg";
    four.src = "https://st.quantrimang.com/photos/image/2020/07/30/Hinh-Nen-Trang-10.jpg";
    five.src = "https://st.quantrimang.com/photos/image/2020/07/30/Hinh-Nen-Trang-10.jpg";
    six.src = "https://st.quantrimang.com/photos/image/2020/07/30/Hinh-Nen-Trang-10.jpg";
    seven.src = "https://st.quantrimang.com/photos/image/2020/07/30/Hinh-Nen-Trang-10.jpg";
    eight.src = "https://st.quantrimang.com/photos/image/2020/07/30/Hinh-Nen-Trang-10.jpg";
    nine.src = "https://st.quantrimang.com/photos/image/2020/07/30/Hinh-Nen-Trang-10.jpg";
    
}

function check(){
    if(x_one && x_four && x_seven){
        alert("Người chơi X đã thắng")
        reset();
    }
    if(x_two && x_five && x_eight){
        alert("Người chơi X đã thắng")
        reset();
        
    }
    if(x_three && x_six && x_nine){
        alert("Người chơi X đã thắng")
        reset();
        
    }
    if(x_one && x_two && x_three){
        alert("Người chơi X đã thắng")
        reset();
        
    }
    if(x_four && x_five && x_six){
        alert("Người chơi X đã thắng")
        reset();
        
    }
    if(x_seven && x_eight && x_nine){
        alert("Người chơi X đã thắng")
        reset();
        
    }
    if(x_one && x_five && x_nine){
        alert("Người chơi X đã thắng")
        reset();
        
    }
    if(x_three && x_five && x_seven){
        alert("Người chơi X đã thắng")
        reset();
        
    }
    if(o_one && o_four && o_seven){
        alert("Người chơi O đã thắng")
        reset();
        
    }
    if(o_two && o_five && o_eight){
        alert("Người chơi O đã thắng")
        reset();
        
    }
    if(o_three && o_six && o_nine){
        alert("Người chơi O đã thắng")
        reset();
        
    }
    if(o_one && o_two && o_three){
        alert("Người chơi O đã thắng")
        reset();
        
    }
    if(o_four && o_five && o_six){
        alert("Người chơi O đã thắng")
        reset();
        
    }
    if(o_seven && o_eight && o_nine){
        alert("Người chơi O đã thắng")
        reset();
        
    }
    if(o_one && o_five && o_nine){
        alert("Người chơi O đã thắng")
        reset();
        
    }
    if(o_three && o_five && o_seven){
        alert("Người chơi O đã thắng")
        reset();
        
    }
    if(turn == 8){
        alert("Hoà");
    }
}

function RandomColor() {
    let str = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += str[Math.floor(Math.random() * 16)];
    }
    document.getElementById("title").style.color = color;
}

document.getElementById("title").addEventListener('mouseover',RandomColor);
