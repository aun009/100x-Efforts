let todoInd = 1;

function addTodo() {
    const element = document.getElementById("inp");
    const value = element.value;

    if(value == "") {
        return;
    }

    // 1. Create the container div for this specific todo
    const todoDiv = document.createElement("div");
    
    // 2. Set the unique ID on the element that will actually be appended
    todoDiv.setAttribute("id", "todo" + todoInd);

    const content = document.createElement("span");
    content.innerHTML = value;

    const btn = document.createElement("button");
    btn.innerHTML = "Delete me";
    btn.setAttribute("onclick", "deleteTodo(" + todoInd + ")");

    // 3. Append the content and button to our todoDiv
    todoDiv.appendChild(content);
    todoDiv.appendChild(btn);

    // 4. Append the completed todoDiv to the main parent container on the page
    document.getElementById("parentdiv").appendChild(todoDiv);

    todoInd += 1;
    element.value = "";
}

function deleteTodo(ind) {
    // Find the specific todo div by its unique ID
    const divElem = document.getElementById("todo" + ind);
    
    // Check if it exists to prevent errors, then remove it
    if (divElem) {
        // The modern, simplest way to remove an element in JavaScript
        divElem.remove(); 
        
        // Alternatively, the code you had commented out also works perfectly:
        // divElem.parentElement.removeChild(divElem);
    }
}