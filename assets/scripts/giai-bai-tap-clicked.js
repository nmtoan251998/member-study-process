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

    const submitBtn = document.querySelectorAll(".btn-submit")    

    submitBtn.forEach(el => {
        el.addEventListener("click", event => {            
            /*
                Trying to insert <form> into table row
                
                Solution: Find row index then insert
                Step 1: Successfully getting tr index using el.rowIndex (ondone)
                Step 2: Inserting (onwork) -> (ondone)
                Step 3: Styling the form (onwork) 
            */            

            let recentTr = el.parentElement.parentElement.rowIndex
                        
            const form = document.createElement("form"),
                input = document.createElement("input"),
                button = document.createElement("button")                                                           

            // set attributes for elements
            let formAtt = {
                method: 'get',
                action: '#'
            },
            inputAtt = {
                type: 'text',
                name: 'link',
                placeholder: 'Điền URL đã giải bài tập vào đây'
            },
            buttonAtt = {
                type: 'submit',
                value: 'Submit'
            }
                                
            form.setAttribute('method', formAtt.method)
            form.setAttribute('action', formAtt.action)
            form.classList.add('dynamic__form')

            input.setAttribute('type', inputAtt.type)
            input.setAttribute('name', inputAtt.name)
            input.setAttribute('placeholder', inputAtt.placeholder)
            input.classList.add('dynamic__input')

            button.setAttribute('type', buttonAtt.type)
            button.setAttribute('value', buttonAtt.value)            
            button.classList.add('btn', 'btn--primary', 'btn--form', 'dynamic__btn')            
            button.innerText = "Nộp bài"

            form.appendChild(button)
            form.appendChild(input)            
            
            const codingTable = document.querySelector('.coding__table')
            let newRow = codingTable.insertRow(recentTr+1)
            let newCell = newRow.insertCell(0)   
            
            newCell.setAttribute("colspan", 4)
            newCell.appendChild(form)
        })
    })

}, false)