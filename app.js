function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    // get the newToDoText
    let title = newToDoText.value;

    // create new li
    let newLi = document.createElement('li');

    // create new input
    let checkbox = document.createElement('input');

    // create delete button
    let deleteButton = document.createElement('button');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the content of the deleteButton
    deleteButton.textContent = "Delete";

    // set the button type to submit
    deleteButton.type = "submit";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    // attach the delete button to the li
    newLi.appendChild(deleteButton);

    // empty the input
    newToDoText.value = ''

    // add event listener for delete button click
    deleteButton.addEventListener('click', function(event) {

      // remove parent li
      toDoList.removeChild(this.parentElement);

  })

  });

}


window.onload = function() {
  onReady();
};
