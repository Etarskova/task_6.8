let link=document.querySelector('#link');
link.addEventListener('click', updateLink);

function updateLink(){
    const result = prompt('Укажите новый путь', "");
    if (result === null){
        alert ('Вы отказались от ввода')
    } else if (result === ""){
        alert ('Введено пустое поле')
    } else {
        link.textContent=result;
    }
}

