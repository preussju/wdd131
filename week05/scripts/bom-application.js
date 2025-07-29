const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {

    if (input.value.trim() != '') {
        displayList(input.value); 
        chaptersArray.push(input.value); //add chapter to the array
        setChapterList();  //update localStorage 
        input.value = '';
        input.focus();
    }
    else {
        return input.focus();
    }

});

// array
let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => { displayList(chapter) });

function displayList(item) {

    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = item;
    deleteButton.textContent = '❌';

    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent); // function to remove from array and localStorage
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem('FavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('FavBOMList'))
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1) //slices the last char (x)
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}