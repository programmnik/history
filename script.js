const body= document.querySelector('body');
const btn= document.querySelector('#darkmode-toggle');
const mapmode= document.querySelector('.map-mode');
const main= document.querySelector('.main');
const mapplace= document.querySelector('.map');
const imagmap= document.querySelector('.drow');
const left= document.querySelector('.left');
const right= document.querySelector('.right');

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
    // setTimeout(function(){
    //     if(!al){
    //         al = true;
    //         alert("нажми на картинку, чтобы поменялась её")
    //     };},500)
})

const images = [
    {
        src:'.\\imag\\8.jpg',
        text:"",
    },
    {
        src:'.\\imag\\209896_or.jpg',
        text:"",
    },
    {
        src:'.\\imag\\c6c6bc5ce11c08b5ff7a1b5818be017b.jpeg',
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

document.onkeydown = function(event){
    if(event.code == "ArrowRight"){
        if(count===images.length -1){
            count=0;
        }else{
            count+=1;
        }
        sentImg(images[count]);
    }
    if(event.code == "ArrowLeft"){
        if(count===0){
            count=images.length -1;
        }else{
            count-=1;
        }
        sentImg(images[count]);
    }
}

right.addEventListener('click', ()=>{
    if(count===images.length -1){
        count=0;
    }else{
        count+=1;
    }
    sentImg(images[count]);
})
left.addEventListener('click', ()=>{
    if(count===0){
        count=images.length -1;
    }else{
        count-=1;
    }
    sentImg(images[count]);
    
})

