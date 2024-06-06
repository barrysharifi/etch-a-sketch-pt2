function createGrid(size) {
    
    let container = document.getElementById("container")
    container.innerHTML = ''

    for (let i = 0; i < size; i++) {
        const rowContainer = document.createElement('div');
        rowContainer.className = "row-container";
        rowContainer.id = "row" + "-" + i;
        container.appendChild(rowContainer)

        for (let j = 0; j < size; j++) {
            const gridItem = document.createElement('div')
            gridItem.className = "grid-item"
            gridItem.style.width = `${700 / size}px`
            gridItem.style.height = `${700 / size}px`
            gridItem.id = "column-" + j
            rowContainer.appendChild(gridItem)


            gridItem.addEventListener("click", () => {
                let changeBoxColor = document.createElement('div')
                changeBoxColor.className = "new-box-color"
                gridItem.appendChild(changeBoxColor)
                //only create one div per gridItem
                gridItem.removeEventListener('click', )
            }, { once: true })
        }
    }
}

function getSize() {
    let size = prompt("Enter the number of squares per side (max 100)")
    size = parseInt(size)
    if (isNaN(size) || size <= 0 || size > 100) {
        alert('Please enter a valid number between 1 and 100')
    } else {
        createGrid(size)
    }
}

createGrid(16)

const resetButton = document.querySelector('.reset-button')
resetButton.addEventListener("click", getSize)



