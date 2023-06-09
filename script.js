var draggableContainer = document.querySelector(".draggable");
var droppableContainer = document.querySelector(".droppable");
var successMessage = document.createElement("div");
successMessage
    .classList
    .add("success-message");

// Event listener for dragging start
draggableContainer.addEventListener("dragstart", function (event) {
    draggedItem = event.target;
    event.dataTransfer.effectAllowed = "move";
});

// Event listener for dragging over the droppable container
droppableContainer.addEventListener("dragover", function (event) {
    event.preventDefault();
});

// Event listener for dropping into the droppable container
droppableContainer.addEventListener("drop", function (event) {
    event.preventDefault();

    // Append the dragged item to the droppable container
    droppableContainer.appendChild(draggedItem);

    // Show success message
    successMessage.textContent = "Item dropped successfully!";
    droppableContainer.appendChild(successMessage);
});

// Function to reset the containers to their original state
function reset() {
    draggableContainer.innerHTML = `
                <div class="item" draggable="true">Item 1</div>
                <div class="item" draggable="true">Item 2</div>
                <div class="item" draggable="true">Item 3</div>
                <div class="item" draggable="true">Item 4</div>
            `;
    droppableContainer.innerHTML = "Drop items here";
}
