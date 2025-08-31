document.addEventListener("DOMContentLoaded",()=>{
    const body = document.querySelector("body")
    const colorButton = document.querySelector("#container button")
    const colorCode = document.querySelector("#color-code")
    const heading = document.querySelector("h1")


    colorButton.addEventListener("click",()=>{
        const [r,g,b] = rgbGenerator()
        const newColor = toRGB(r,g,b)
        const textColor = textColorForBackground(r,g,b)

        body.style.backgroundColor = newColor
        colorButton.style.backgroundColor = newColor
        colorCode.textContent = newColor
        colorButton.style.color = textColor
        heading.style.color = textColor
    })


    function rgbGenerator(){
        return[
            r = Math.floor(Math.random() * 256),
            g = Math.floor(Math.random() * 256),
            b = Math.floor(Math.random() * 256)
        ]
        
    }

    function textColorForBackground(r,g,b) {
        const brightness = (r*299 + g*587 + b*114) / 1000
        return brightness > 125 ? "black" : "white"
    }

    function toRGB(r,g,b) {
        return `rgb(${r}, ${g}, ${b})`
    }






})