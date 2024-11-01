const container = document.querySelector(".container")
const reset = document.querySelector("#reset")

function blancCanvas(){
    for (i = 0; i < 256; i++)
        {
            const div = document.createElement("div")
            div.classList.add("square")
        
            div.addEventListener("mouseover", 
                ()=>
                {
                    div.style.backgroundColor = "black"
                }
            )
        
            container.appendChild(div)
        
        }
}

blancCanvas()


reset.addEventListener("click",
    ()=>
    {
        const squares = document.querySelectorAll(".square")

        squares.forEach(square => container.removeChild(square))

        blancCanvas()
    }
)


