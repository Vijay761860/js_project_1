// console.log("Welcome Sir Yor Project is Read !")
const  check_list = document.querySelectorAll(".check-box")
const InputFields =document.querySelectorAll('.gole-input')
const user_error = document.querySelector('.user-error')

//for each loop one by one print 
check_list.forEach((checkbox) =>{
    checkbox.addEventListener('click' , (e) =>{
    
       const allfieldsFilled = [...InputFields].every((input) =>{
            return  input.value
    })
   if(allfieldsFilled){
        checkbox.parentElement.classList.toggle('compleat')
   }
        
    })

})