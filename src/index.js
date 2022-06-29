document.addEventListener("DOMContentLoaded", () => {
  const formSubmit = document.querySelector("#create-task-form")
  formSubmit.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const createListItem = () => {
      const userTextBox = document.querySelector("#new-task-description")
      const userText = userTextBox.value
      let li = document.createElement('li')
      li.innerText = userText
      const tasksList = document.querySelector("#tasks")
      tasksList.append(li)
    }
    createListItem();
  })
}); 

