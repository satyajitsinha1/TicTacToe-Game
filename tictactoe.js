let button0 = document.querySelector('#btn0')
let button1 = document.querySelector('#btn1')
let button2 = document.querySelector('#btn2')
let button3 = document.querySelector('#btn3')
let button4 = document.querySelector('#btn4')
let button5 = document.querySelector('#btn5')
let button6 = document.querySelector('#btn6')
let button7 = document.querySelector('#btn7')
let button8 = document.querySelector('#btn8')

let num = 1

let a = [0,1,2,3,4,5,6,7,8]

let newgame = document.querySelector('.new')

let buttons = document.querySelectorAll('.btn')


buttons.forEach((button,index)=>{
   button.addEventListener('click',()=>{
      if(num == 1){
         button.innerHTML = 'X'
         num++
         a[index] = 'X'
      }else if(num%2 == 0){
         button.innerHTML = 'O'
         num++
         a[index] = 'O'
      }else{
         button.innerHTML = 'X'
         num++
         a[index] = 'X'
      }
   })
})

newgame.addEventListener('click', () => {
   buttons.forEach((button, index) => {
       button.innerHTML = '.';
       a[index] = index;
   });
   num = 1
})


