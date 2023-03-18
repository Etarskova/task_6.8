const consoleLog=document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
   console.log('Служит для вывода информации в консоль');
})

const alert1=document.querySelector('#alert');

alert1.addEventListener('click', () => {
    alert('Служит для предупреждения пользователя о чем-то важном во всплывающем окне с кнопкой ОК');
})

const prompt1=document.querySelector('#prompt');

prompt1.addEventListener('click', () => {
   prompt('Выводит на экран диалоговое окно, которое запрашивает у пользователя информацию. Вместе с кнопками ОК и отмена оно содержит текстовое поле для ввода данных');
})