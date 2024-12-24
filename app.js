let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
  // console.log(inp.value);
 
  // let item = document.createElement("li");
  // item.innerText = inp.value;
  // ul.appendChild(item);

  let item = document.createElement("li");
  item.innerText = inp.value;
  
  let delBtn = document.createElement("button");
  delBtn.innerText = "delete"; 
  delBtn.classList.add("delete");

  item.appendChild(delBtn);
  ul.appendChild(item);
  inp.value = ""
});

// task delete 
// new task add then not work

// let delBtns = document.querySelectorAll(".delete");
// for(delBtns of delBtns){
//   delBtns.addEventListener("click", function(){
//      let par = this.parentElement;
//      console.log(par);
//      par.remove();
//   });
// }


ul.addEventListener("click", function(event){
   
   //console.log("button clicked");
   //console.dir(event.target);
  //  console.dir(event.target.nodeName);
  if(event.target.nodeName=="BUTTON"){
    let listItem = event.target.parentElement;
     listItem.remove();
    console.log("delete");
  }


})