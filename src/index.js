document.addEventListener("DOMContentLoaded", () => {
  const formSubmit = document.querySelector("#create-task-form")
  formSubmit.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const createListItem = () => {
      const userTextBox = document.querySelector("#new-task-description")
      const userText = userTextBox.value
      const li = document.createElement('li')
      li.innerText = userText
      const tasksList = document.querySelector("#tasks")
      tasksList.append(li)
      const dropdown = document.createElement("select") //dropdown menu selector
      dropdown.setAttribute("class", "dropdownMenu")
      li.prepend(dropdown)
      const highPriority = document.createElement("option")
      highPriority.innerText = "High"
      highPriority.value = "high"
      const medPriority = document.createElement("option")
      medPriority.innerText = "Medium"
      medPriority.value = "medium"
      const lowPriority = document.createElement("option")
      lowPriority.innerText = "Low"
      lowPriority.value = "low"
      dropdown.append(highPriority, medPriority, lowPriority)
      li.setAttribute("class", "highPrio")
    }
    createListItem();

    const changeMenu = document.querySelector('.dropdownMenu');
  
    changeMenu.addEventListener('change', (event) => {
      console.log("menu changed")
      changeMenu.parentElement.className = ""
    })
  })
}); 

