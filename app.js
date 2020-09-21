let list = document.getElementById('list')


const addTodo = () => {
    let todo_item = document.getElementById('todo_item')

    //create li with text node
    let li = document.createElement('li')
    let liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)

    // create delete button
    let delBtn = document.createElement('button')
    let delText = document.createTextNode('DELETE')
    delBtn.appendChild(delText)

    //setting the attributes
    delBtn.setAttribute('class', 'btn btn-outline-success mb-2')
    delBtn.setAttribute('onclick', 'deleteItem(this)')

    //create edit button
    let editBtn = document.createElement('button')
    let editText = document.createTextNode("EDIT")
    editBtn.appendChild(editText)

    // setting the attributes
    editBtn.setAttribute('class', 'btn btn-outline-danger mb-2')
    editBtn.setAttribute('onclick', 'editItem(this)')

    li.appendChild(delBtn)
    li.appendChild(editBtn)
    list.appendChild(li)
    todo_item.value = ""
}

const deleteItem = (del) => {
    del.parentNode.remove()
}

const deleteAll = () => {
    list.innerHTML = ""
}

const editItem = (edit) => {
    var editValue = prompt("Enter value to edit", edit.parentNode.firstChild.nodeValue)
    edit.parentNode.firstChild.nodeValue = editValue
}