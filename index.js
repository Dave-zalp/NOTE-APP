const notesContainer = document.querySelector('.notes-container');
const CreateBtn = document.querySelector('.btn');

CreateBtn.addEventListener('click', function(){
    createBox();
})
function showNotes(){
notesContainer.innerHTML = localStorage.getItem('iten');

}

showNotes()


function UpdateLocalStorage(){
    localStorage.setItem('notes',notesContainer.innerHTML)
}


function createBox(){ 

// input box

const box = document.createElement('p')
box.classList.add('input-box')
box.setAttribute("contenteditable", "true")

//image
var img = document.createElement('img')
img.setAttribute('src', 'images/delete.png')

box.appendChild(img)

notesContainer.appendChild(box);

}

notesContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'IMG' ){
        e.target.parentElement.remove();
        UpdateLocalStorage()
    }
    else if(e.target.tagName === 'P'){
        notes = document.querySelectorAll('.input-box')
        notes.forEach(nt => {
            nt.onKeyup = function(){
                UpdateLocalStorage();
            }
        })
    }
})

