function showList(event) {
    event.preventDefault()
    clearList()
    var formData = new FormData(event.target)
    var formJson = Object.fromEntries(formData)
    var list = formJson["listInput"].split(/\r?\n/)

    var output = document.getElementById('output')
    quicksort(list, 0, list.length-1)
    console.log(list)

    list.splice(0,1)
    const outputList = document.getElementById('outputList')
    for (i=0; i<list.length; i++) {
        var listItem = document.createElement('li')
        var node = document.createTextNode(list[i])
        listItem.appendChild(node)
        outputList.appendChild(listItem)
    }
}  

function clearList() {
    const listNodes = document.querySelectorAll('li')
    listNodes.forEach(element => {
        element.remove()
    });
}

var form = document.getElementById('listForm')
form.addEventListener('submit', showList)
