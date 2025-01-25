
const input = document.querySelector("#favchap");
const button = document.querySelector("#addButton");
const list = document.getElementById("list");

button.addEventListener('click' , () => {

    const myChapter = input.value.trim();

    input.value = '';

    if (myChapter !== '') {
        const li = document.createElement('li');
        li.textContent = myChapter;

        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');

        listText.textContent = myChapter;
        listBtn.textContent = '❌';

        listItem.appendChild(listText);
        listItem.appendChild(listBtn);
        list.appendChild(listItem);

        //Delete Chapter
        listBtn.addEventListener('click' , () => {
            list.removeChild(listItem);
        } );
        input.focus();
    }
});
