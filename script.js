console.log("Hello, World!");
let itemsDiv =document.getElementById("items");

if(itemsDiv){
    console.log(itemsDiv)
    itemsDiv.innerHTML += '<div class = "item"></div>'
     itemsDiv.innerHTML += '<div class = "item"></div>'
      itemsDiv.innerHTML += '<div class = "item"></div>'
       itemsDiv.innerHTML += '<div class = "item"></div>'
}
else{
    console.log("itemsDiv not found")
}