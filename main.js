// 1

let tlacitko = querySelector('.tlacitko');
function ZmenitBarvu(){ 
    let odstavec = document.querySelector('p');

    odstavec.classList.toggle("muj-super-style");
 }
 function ZmenitVelikost(){
    let odstavec = document.querySelector('p');
    odstavec.classList.add("muj-super-style2");
 }
 // 2


function spustAudio(){
  let zvuk;
  zvuk = document.querySelector(".zvuk");
  zvuk.play();
}

function zastavAudio(){
    let zvuk;
    zvuk = document.querySelector(".zvuk");
    zvuk.pause();
}
function resetAudio(){
    let zvuk;
    zvuk = document.querySelector(".zvuk");
    zvuk.currentTime = 0;
}
function hlasitostAudio1(){
    let zvuk;
    zvuk = document.querySelector(".zvuk");
    zvuk.volume = 0;
}
function hlasitostAudio2(){
    let zvuk;
    zvuk = document.querySelector(".zvuk");
    zvuk.volume = 0.5;
}
function hlasitostAudio3(){
    let zvuk;
    zvuk = document.querySelector(".zvuk");
    zvuk.volume = 1;
}