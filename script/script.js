// console.log("Welcome Sir Yor Project is Read !")
const  check_list = document.querySelectorAll('.check-box')
const InputFields =document.querySelectorAll('.gole-input')
const user_error = document.querySelector('.user-error')
const progress_bar = document.querySelector('.progress-bar')
const progess_value = document.querySelector('.progess-value"')
//for each loop one by one print 
check_list.forEach((checkbox) =>{
    checkbox.addEventListener('click' , (e) =>{
    
       const allfieldsFilled = [...InputFields].every((input) =>{
            return  input.value
    })
   if(allfieldsFilled){
        checkbox.parentElement.classList.toggle('compleat')
        progess_value.style.width = '33.33%'
   }
   else{
          progress_bar.classList.add('show-error')
   }
        
 })

})
InputFields.forEach((input) =>{
     input.addEventListener('focus' ,() =>{
          progress_bar.classList.remove('show-error')
     } )

})


