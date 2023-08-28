const hex = ["A","B","C","D","E","F",0,1,2,3,4,5,6,7,8,9];
const btn = document.getElementsByClassName('btn');
let color = document.querySelector('.color');

const colorChanger = ()=>{
    console.log("working")
    // let hexColor = "#";
    // for(let i = 0; i < 6 ; i++){
    //     hexColor += hex[Math.floor(Math.random()*hex.length)];
    // }

    const h = Math.floor( Math.random()*360 );
    const s = Math.floor( Math.random()*100 );
    const l = Math.floor( Math.random()*100 );

    // color.textContent = hexColor;
    // document.body.style.backgroundColor = "#000000";

    
    color.textContent = `hsl(${h},${s}%,${l}%)`;
    document.body.style.backgroundColor = `hsl(${h},${s}%,${l}%)`;

    if( l < 35 && s < 80 ) {
        console.log("dark!")
        document.querySelector('h2').style.color = "#fff";
    }
    else {
        document.querySelector('h2').style.color = "#000";
    }
}