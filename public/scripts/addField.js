//Achar o botão

document.querySelector("#add-time").addEventListener('click',cloneField);

//clickar
function cloneField(){
    //duplicar campos, qual?
    const node = document.querySelector('.schedule-item').cloneNode(true);

    //reseta compos
    const fields = node.querySelectorAll('input');

    //foreach mais enxuto
    fields.forEach(function(field){
        field.value="";
    })

    //colocar na pagina, onde?    
    document.querySelector('#schedule-items').appendChild(node);
}




