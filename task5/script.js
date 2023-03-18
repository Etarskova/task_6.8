let textUser = document.querySelector('.textField');
let txtField = document.querySelector ('#duplicateField');
let but=document.querySelector('.but');

textUser.addEventListener ('input', event => {
    txtField.textContent = textUser.value;
})

but.addEventListener ('click', event => {
    event.preventDefault();
    console.log (textUser.value);
    txtField.textContent="";
    textUser.value ="";
})