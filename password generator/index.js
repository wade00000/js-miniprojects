document.addEventListener("DOMContentLoaded",()=>{
    const passButton = document.querySelector("#container button")
    const passOutput = document.querySelector("#container input")
    const passLength = document.querySelector("#length")
    const copyButton = document.querySelector("#copy")


    passButton.addEventListener("click",()=>{
        passOutput.value = generatePass(Number(passLength.value))
    })

    copyButton.addEventListener("click", () => {
        navigator.clipboard.writeText(passOutput.value)
        .then(() => alert("Copied!"))
    })

    function generatePass(length){
        const charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$#!"
        let result = ""
        for(let i = 0;i < length;i++){
            result += charSet.charAt(Math.floor(Math.random() * charSet.length))
        }
        return result
    }
})