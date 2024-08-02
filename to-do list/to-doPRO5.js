// let button = document.querySelector(".add");
// let input = document.querySelector("input");
// let ul = document.querySelector("ul");
// let div1 = document.querySelector(".bottom");
// button.addEventListener("click",() => {
//     if(input.value === ''){
//         alert("to add-write something");
//     }
//     else{
//         let li = document.createElement("li");
//         let span = document.createElement("span");
//         span.innerText = "\u00d7";
//         li.innerText = input.value;
        

//         // span.classList.add('span');
//         ul.appendChild(li);
//         li.appendChild(span);
        
        
//     }
//     input.value = ''; 
//     saveData();
    
// });
// ul.addEventListener("click", function(e){
//     if(e.target.tagName === "LI"){
//     e.target.classList.toggle("checked");
//     saveData();
//     }
//     else if(e.target.tagName === "SPAN"){
//         e.target.parentElement.remove();
//         saveData();
//     }
// });

// function saveData() {
//     localStorage.setItem("data", ul.innerHTML);
// }

// function showTask(){
//     ul.innerHTML = localStorage.getItem("data");
// }
// showTask();



let ul = document.querySelector("ul");
let button = document.querySelector(".add");
let input = document.querySelector("#lable");


button.addEventListener("click", () => {
if(input.value === ''){
    alert("please write something to add");
}
else{
    let li = document.createElement("li");
    let span = document.createElement("span");
     span.innerText = "\u00d7";
    li.innerHTML = input.value;

    li.append(span);
    ul.append(li);
}
input.value = '';
saveData();
});

ul.addEventListener("click", function(e){
if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
}
else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
}
saveData();
});

function saveData(){
    localStorage.setItem("saver",ul.innerHTML);
}
function showData(){
   ul.innerHTML = localStorage.getItem("saver");
}
showData();
