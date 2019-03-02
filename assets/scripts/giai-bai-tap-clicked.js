document.addEventListener("DOMContentLoaded", () => {
    /*
    * Make the <a> dropdown menu to be normal when clicked    
    */
    
    const topicBtn = document.querySelector('#topic-btn')

    topicBtn.addEventListener("click", (event) => {
        event.preventDefault()                
    })

    /*
    * Create form > input:text when btn-submit is clicked
    */

    function removeAllChild(el) {
        while(el.firstChild) el.removeChild(el.firstChild)
    }    

    const submitBtn = document.querySelectorAll(".btn-submit")    

    let submitBtnIsClicked = false

    submitBtn.forEach( el => {
        el.addEventListener("click", event => {            
            let recentTr = el.parentElement.parentElement.rowIndex
                        
            const form = document.createElement("form"),
                input = document.createElement("input"),
                btn = document.createElement("button"),
                closeBtn = document.createElement("a")                    
                        
            if (submitBtnIsClicked) return            
            submitBtnIsClicked = true    

            form.setAttribute('method', "get")
            form.setAttribute('action', "#")
            form.classList.add('dynamic__form')

            input.setAttribute('type', "text")
            input.setAttribute('name', "link")
            input.setAttribute('placeholder', "Điền URL đã giải bài tập vào đây")
            input.classList.add('dynamic__input')

            btn.setAttribute('type', "submit")
            btn.setAttribute('value', "Submit")            
            btn.classList.add('btn', 'btn--primary', 'btn--form', 'dynamic__btn')            
            btn.innerText = "Nộp bài"

            closeBtn.setAttribute('title', "Đóng")
            closeBtn.classList.add('dynamic__closeBtn', 'fas', 'fa-times')

            removeAllChild(form)

            form.appendChild(btn)
            form.appendChild(input)
            form.appendChild(closeBtn)
            
            const codingTable = document.querySelector('.coding__table')
            let newRow = codingTable.insertRow(recentTr+1)
            let newCell = newRow.insertCell(0)   
            
            newCell.setAttribute("colspan", 4)
            newCell.appendChild(form)            
                                                    
            closeBtn.addEventListener("click", () => removeAllChild(form) )            
        })
    })

}, false)