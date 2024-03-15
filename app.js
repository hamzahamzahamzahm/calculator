const touches =[...document.querySelectorAll('.button')];

const listekeycode = touches.map(touche=>touche.dataset.key);

document.addEventListener('keydown',(e)=>{
    const valeur = e.keyCode.toString();

})

document.addEventListener('click',(e) =>{
    const valeur = e.target.dataset.key;
})

const calculer = (valeur) =>{
    if(listekeycode.includes(valeur)){
        switch(valeur){
            case'8':
            ecran.textcontent = "";
            break;


            
        }
    }
}
