let container = document.getElementById("container")
for (let i = 0; i < 16; i++) {
    const rowContainer = document.createElement('div');
    rowContainer.className = "row-container";
    rowContainer.id = "row" + "-" + i;
    container.appendChild(rowContainer)

    for (let j = 0; j < 16; j++) {
        const gridItem = document.createElement('div')
        gridItem.className = "grid-item"
        gridItem.id = "column-" + j
        rowContainer.appendChild(gridItem)


        gridItem.addEventListener("click", () => {
            let changeBoxColor = document.createElement('div')
            changeBoxColor.className = "new-box-color"
            gridItem.appendChild(changeBoxColor)

        })


    }


}





