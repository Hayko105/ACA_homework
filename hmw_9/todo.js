"use strict";

const elTextAdd = document.querySelector('.inp-text');
const elBtnAdd = document.querySelector('.btn-add');
const elList = document.querySelector('.todo-list');
const toDoList = [];


// validation input text  
function validation (elInput) {
    if (!elInput.value && elInput.value === ''){
        elInput.classList.add('invalid');
        return false;
    } else {
        elInput.classList.remove('invalid');
        return true;
    }
}

function updateList (input) {
    toDoList.push(input.value.trim());
    input.value = '';
    elList.innerHTML = '';
    
    toDoList.forEach(el => {
        elList.insertAdjacentHTML('beforeend', `<li>${el} <span class="close">\u00D7</span></li>`);
    });    
}

// Add to do in list
elBtnAdd.addEventListener('click', () =>{    
    // check input
    if(validation(elTextAdd)){
        // Add and update list
        updateList(elTextAdd);
        
        // Close / remove element from list
        let elClose = document.getElementsByClassName('close');
        for(let i of elClose) {
            i.addEventListener('click', () =>{
                let elInArr = i.parentNode.firstChild.nodeValue.trim();
                
                if(toDoList.includes(elInArr)){
                    i.parentNode.remove();
                    toDoList.splice(toDoList.indexOf(elInArr), 1);
                }
            })
        }
    }    
});

// Add checked style
elList.addEventListener('click', (event) =>{
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    }
});