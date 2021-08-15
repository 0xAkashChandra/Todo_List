const contentElement = document.querySelector(".content");
const clearBtn = document.getElementById("clear");

// create note element
const createNoteElement = note => {
    const delimeter=document.createElement("i");
    delimeter.classList.add("fas");
    delimeter.classList.add("fa-star");

    const noteTextElement = document.createElement("p");
    noteTextElement.classList.add("notee");
    noteTextElement.appendChild(document.createTextNode(note));

    const noteDivElement = document.createElement("div");
    noteDivElement.classList.add("box");
    noteDivElement.appendChild(delimeter);
    noteDivElement.appendChild(noteTextElement);

    return noteDivElement;
};


// create form element
const createFormElement = ()=>{
    const inputNoteElement = document.createElement("input");
    inputNoteElement.type = "text";
    inputNoteElement.setAttribute("name","note");
    inputNoteElement.setAttribute("placeholder","Enter the Task");
    inputNoteElement.classList.add("form-control");

    // create add button
    const submitElement = document.createElement("input");
    submitElement.type="submit";
    submitElement.style.width="45%";
    submitElement.value="ADD";
    submitElement.classList.add("btn");
    submitElement.classList.add("btn-success");

    // create cancel button
    const cancelElement = document.createElement("button");
    cancelElement.textContent="CANCEL";
    cancelElement.style.width="45%";
    cancelElement.classList.add("btn");
    cancelElement.classList.add("btn-danger");

    //create form element 
    const noteFormElement=document.createElement("form");
    noteFormElement.classList.add("noteForm");
    noteFormElement.appendChild(inputNoteElement);
    noteFormElement.appendChild(submitElement);
    noteFormElement.appendChild(cancelElement);

    noteFormElement.addEventListener("submit",e=>{
        //cancel default behaviour
        e.preventDefault();

        // create note element form the input values
        const newNoteElement = createNoteElement(inputNoteElement.value);

        contentElement.replaceChild(newNoteElement,e.target);
        // Create info message indicating success
        const infoElement = document.createElement("div");
        infoElement.classList.add("alert");
        infoElement.classList.add("alert-success");
        infoElement.textContent = `Task has been succesfully added!`;
        contentElement.insertBefore(infoElement, newNoteElement);
        // Remove info message after 2 seconds
        setTimeout(() => {
        contentElement.removeChild(infoElement);
        }, 2000);
    });

    return noteFormElement;
};

const addbtn=document.querySelector(".add-btn");

addbtn.addEventListener("click",e=>{
    
    const formElement=createFormElement();
    contentElement.appendChild(formElement);
});

clearBtn.addEventListener("click",e=>{
    contentElement.innerHTML = "";
});
