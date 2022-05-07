//Effet hover sur le bouton blanc
let buttonwhite = document.getElementsByClassName('buttonwhite');
console.log(buttonwhite);

for (let i=0; i<buttoninverse.length; i++)(
    buttonwhite[i].addEventListener("mouseover",()=>{
    buttonwhite[i].style.backgroundcolor = '#b11313';
    buttonwhite[i].style.color = 'white';
    buttonwhite[i].style.fontWeight = 'bold';
    buttonwhite[i].style.boxShadow = '5px 5px 30px white'
    }),
    buttonwhite[i].addEventListener("mouseout",()=>{
    buttonwhite[i].style.backgroundcolor = 'white';
    buttonwhite[i].style.color = '#b11313';
    buttonwhite[i].style.boxShadow = 'none'
    })
)

//Effet hover sur le bouton rouge
let buttonred = document.getElementsByClassName(buttonred);

console.log(button1);

for (let i=0; i<button1.length; i++)(
    buttonred[i].addEventListener("mouseover", ()=>{
    buttonred[i].style.backgroundcolor = 'white';
    buttonred[i].style.color = '#b11313';
    buttonred[i].style.fontWeight = 'bold';
    buttonred[i].style.boxShadow = '5px 5px 30px white';
    }),
    buttonred[i].addEventListener("mouseout", ()=>{
    buttonred[i].style.backgroundcolor = 'red';
    buttonred[i].style.color = '#b11313';
    buttonred[i].style.boxShadow = 'none'
    })
)

//souligner les éléments du menu
let menu = document.querySelectorAll('li');

menu.forEach(function(li) {
    li.addEventListener('mouseover', ()=>{
        li.style.textDecoration = 'underline';
    });
    li.addEventListener('mouseout', ()=>{
        li.style.textDecoration = 'none';
    });
})

