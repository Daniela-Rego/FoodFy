const modalOverlay = document.querySelector('.modal-overlay');
const comida = document.querySelectorAll('.alimento');

for(let card of comida)
{
    card.addEventListener("click",function(){
        const imgID = card.getAttribute("id");
         //quando eu quiser pegar o conteudo da tag usa innerHTML
        //const tegP = card.querySelector("#chefs");// "<p id="chefs"> por Jorge Relato</p> "aqui pega teg inteira
        const tegP = card.querySelector("#chefs").innerHTML;//"por Jorge Relato" aqui pega somente o conteudo
        const  prato_nome= card.querySelector("#prato").innerHTML;
        console.log(tegP);
       
        modalOverlay.classList.add('active');
       
        modalOverlay.querySelector('.chef').innerHTML =tegP; 
        modalOverlay.querySelector('.prato').innerHTML =prato_nome;        
        modalOverlay.querySelector("img").src = `img/${imgID}` ;
        //modalOverlay.querySelector("iframe").src = `img/${imgID}` ;
    });
}

/*document.querySelector(".close-modal").addEventListener("click",function(){
    modalOverlay.classList.remove("active");
    modalOverlay.querySelector("img").src="";
    
    //modalOverlay.querySelectorAll("iframe").src="";
});*/

document.querySelector(".fechar").addEventListener("click",function(){
    modalOverlay.classList.remove("active");
    modalOverlay.querySelector("img").src="";
    
    //modalOverlay.querySelectorAll("iframe").src="";
});