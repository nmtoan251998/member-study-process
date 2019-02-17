document.addEventListener("DOMContentLoaded", () => {
    const topicBtn = document.querySelector('#topic-btn')
    const dropdown = document.querySelectorAll('.dropdown__list')

    const dropdownStyle = document.createElement("style")
    dropdownStyle.type = "text/css"
    dropdownStyle.innerHTML = ".dropdown--style {display: none; visibility: hidden}"

    // hidden dropdown__list if e.target is not in dropdown__btn
    window.addEventListener("click", (el) => {        
        if(el.target.id === 'topic-btn') {            
            dropdown.forEach(e => {
                // console.log(dropdownStyle)
                // e.classList.add(dropdownStyle)
                e.appendChild(dropdownStyle)
                e.classList.add("dropdown--style")
            })
        }

        // console.log(el.target.id)
    })

    topicBtn.addEventListener("click", (event) => {
        event.preventDefault()        
        let isClicked = true;
    })

}, false)