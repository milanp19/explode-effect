const enhance =  id => {
    const element = document.querySelectorAll(`#${id}`)
    element.forEach(t => {
        const text = t.innerText.split("")
        t.innerText = ""
        text.forEach(letter => {
            const span = document.createElement("span")
            span.className = "letter"
            span.innerText = letter
            t.appendChild(span)
        })
    })    
}

enhance("channel-link")