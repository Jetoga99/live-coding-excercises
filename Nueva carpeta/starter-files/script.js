 let div = document.getElementById("answer");
 let btn = document.getElementById("button");
 let inp=document.getElementById("input");

 inp.addEventListener("input", function(){
    btn.disabled = (this.value === '');
  })
 
 btn.addEventListener("click", function (e) {
 
     e.preventDefault();
     if (validation()) {
         getData();
     }
 
 });
 
 const getData = () => {
     let promesa = fetch("https://yesno.wtf/api", {
         method: "GET"
     });
     promesa.then((response) => {
         response.json().then((data) => {
             console.log(data.answer);
             div.innerText = data.answer;
             const TimeO = setTimeout(clear, 5000);
         }).catch((error) => {
             console.error(error);
         });
     }).catch((error) => {
         console.log("Error de la solicitud " + error);
     })
 }
 
 
 
 function clear() {
     answer.innerText = "";
     document.getElementById("input").value = '';
 }
 
 function validation() {
     if (document.getElementById("input").value) {
        
         return true;
     } else {
        return false;
     }
 
 }