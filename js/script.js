let listListContainer = document.getElementsByClassName('listListContainer')[0]
let list = document.getElementsByTagName("li")
let input = document.getElementById('addTask')
let buttonAddTask = document.querySelector("#buttonAddTask")

// Adiciona uma nova tarefa
buttonAddTask.addEventListener('click', () => {

    let listContainer = document.createElement('div')
    listContainer.className = "listContainer"

    const inputValue = input.value
    let newLi = document.createElement('li')
    let liText = document.createTextNode(inputValue)

    newLi.appendChild(liText)
    newLi.addEventListener('click', () => {
        newLi.style.textDecoration = newLi.style.textDecoration === "line-through" ? 'none' : "line-through"
        
        newLi.style.fontStyle = newLi.style.fontStyle === "italic" ? 'normal' : "italic"        
    })

    let newTrash = document.createElement('img')
    newTrash.src = './img/trash.svg'

    listContainer.appendChild(newLi)
    listContainer.appendChild(newTrash)
    
    listListContainer.appendChild(listContainer)
    newTrash.addEventListener('click', () => {
        listContainer.remove()
    })
    input.focus()
})

// Código para gerar strings aleatórias que eu achei que fosse precisar
// eventualmente pode ser útil
function generateString(length) {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let result = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
}