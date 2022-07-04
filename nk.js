document.addEventListener('DOMContentLoaded',()=>{
  document.querySelector('.login').onclick=()=>{
let id=document.querySelector('#id-box').value ;
let password=document.querySelector('#pw-box').value;
console.log(id);
console.log(password);
  return false;
  } 
});