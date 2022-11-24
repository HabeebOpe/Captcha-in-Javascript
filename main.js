const captcha = document.querySelector(".captcha");
const reloads = document.querySelectorAll(".reload");
const input = document.querySelector("input");
const check = document.querySelector("#btn");
const status = document.querySelector("#status");
const rotate = document.querySelector("i");
 
let characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function getCaptcha(){
   for (var i = 0; i < 6; i++) {
      
      getChar = characters[Math.floor(Math.random() * characters.length)];
      
      captcha.innerText += getChar
   }
}
getCaptcha()

reloads.forEach(reload => {
   reload.addEventListener("click", () =>{
   
   rotate.classList.add("rot") ;
   setTimeout(()=>{
      rotate.classList.remove("rot") 
   },500)
   captcha.innerText = " ";
   getCaptcha()
      
   })
})

check.addEventListener("click", e =>{
   
   status.style.display = "block";
   
   let inputVal = input.value;
   
   if(inputVal == captcha.innerText){
      status.innerText = "Nice you are not a robot.";
      status.style.color = "#8D00D8";
      
      setTimeout(()=>{
         status.innerText = "";
         input.value = " ";
         captcha.innerText = " ";
         rotate.classList.remove("rot") 
         getCaptcha()
      }, 9000);
      
   }else{
      status.innerText = "Captcha not matched, please try again.";
      status.style.color = "#FF1313";
      
      setTimeout(()=>{
         status.innerText = "";
         input.value = " ";
         captcha.innerText = " ";
         rotate.classList.remove("rot") 
         getCaptcha()
      }, 9000);
   }
   
})
