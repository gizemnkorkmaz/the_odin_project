const container = document.querySelector('.container')
const addParagraph = document.createElement('p')
addParagraph.textContent = "Hey I'm red!"
addParagraph.style.color = 'red'

const header = document.createElement('h3')
header.textContent = "I'm blue h3!"
header.style.color = 'blue'

const divHeader = document.createElement('h1')
divHeader.textContent = "I'm in a div"
const divParagraph = document.createElement('p')
divParagraph.textContent = "ME TOO!"
const div = document.createElement('div')
div.style.cssText = 'background-color: pink; border: 1px solid black'
container.appendChild(header)
container.appendChild(addParagraph)
div.appendChild(divHeader)
div.appendChild(divParagraph)
container.appendChild(div)

