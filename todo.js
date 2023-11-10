let a=document.getElementById('div')
a.style.backgroundColor='brown';

let list=document.querySelector("ul")
let buttons=document.querySelectorAll("button")
let adbtn=document.getElementById("addbtn")
let input=document.getElementById("input")
let ul=document.getElementById("ul")
adbtn.addEventListener('click',()=>{
    let newtext=input.value
    if(newtext){
        let newItem=document.createElement('li')
        ul.appendChild(newItem)
        let div1=document.createElement('div')
        div1.classList.add('first')
        newItem.appendChild(div1)
        
        let div3=document.createElement('div')
        div3.classList.add('sec')
        div3.textContent=newtext
        div1.appendChild(div3)
        input.value=''

        let div2=document.createElement('div')
        div1.appendChild(div2)
        let btn1=document.createElement('button')
        btn1.textContent="Completed"
        div2.appendChild(btn1)
        let btn2=document.createElement("button")
        btn2.textContent="remove"
        div2.appendChild(btn2)
        a.style.height=50

    }
})
let index=0
while(index<buttons.length){
   let b= buttons[index]
   let isClicked=false
   b.addEventListener('click',(event)=>{
    let li=event.target.parentNode.parentNode
    if(event.target.textContent=='Complete'&&!isClicked){
        isClicked=true
        li.classList.add('complete')
        li.style.color='blue'
        b.disabled=true
         
        // btn.textContent='Task completed'
       if(li.classList.contains('complete')){
        console.log(window)
        window.alert('action is completed')
        
       }
    }
    else if(event.target.textContent=="remove"){
        li.parentNode.style.filter='blur(10px)'
        li.parentNode.removeChild(li)
        
    }
   })
   index++

}




