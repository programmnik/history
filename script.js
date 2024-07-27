const body= document.querySelector('body');
const btn= document.querySelector('#darkmode-toggle');
const mapmode= document.querySelector('.map-mode');
const main= document.querySelector('.main');
const mapplace= document.querySelector('.map');
const imagmap= document.querySelector('.drow');

let al= false;

btn.addEventListener('click', ()=>{
    body.classList.toggle('darkmode');
})
mapmode.addEventListener('click', ()=>{
    main.classList.toggle('timeline');
})
mapmode.addEventListener('click',()=>{ 
    setTimeout(function(){
    mapplace.classList.toggle('place');
    imagmap.classList.toggle('actdrow');},400)
    setTimeout(function(){
        if(!al){
            al = true;
            alert("нажми на картинку, чтобы поменялась её")
        };},500)
})

const images = [
    {
        src:'.\\imag\\209896_or.jpg',
        text:"",
    },
    {
        src:'.\\imag\\photo_2024-07-27_17-22-38.jpg',
        text:"",
    }
]

const img = document.querySelector('.mapimag');

const sentImg = currentDataImg =>{
    img.src = currentDataImg.src;
    img.alt = currentDataImg.text;
};

sentImg(images[0]);

let count = 0;

imagmap.addEventListener('click', ()=>{
    if(count===images.length -1){
        count=0;
    }else{
        count+=1;
    }
    sentImg(images[count]);
    
})