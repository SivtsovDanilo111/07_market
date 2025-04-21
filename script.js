let itemsArray = ['Мотокосарка',
    'Тример',
    'Садовий пилосос',
    'Оприскувач',
    'Електрокоса',
    'Культиватор',
    'Бензопила',
    'Лопата',]

console.log("Hello, World!");
let itemsDiv = document.getElementById("items");

if(itemsDiv){
    
itemsArray.forEach((item, index) =>{
    console.log(item)
    itemsDiv.innerHTML +=

    `
    <div class="item">
    <h2>Товар${index}</h2>
    <p>${item}</p>
    </div>`
})

    //console.log(itemsDiv)
    // itemsDiv.innerHTML += '<div class = "item"></div>'
    //  itemsDiv.innerHTML += '<div class = "item"></div>'
    //   itemsDiv.innerHTML += '<div class = "item"></div>'
    //    itemsDiv.innerHTML += '<div class = "item"></div>'
    // for(let i=0; i<100; i++){
    //     itemsDiv.innerHTML += '<div class = "item"></div>'
    // }
}
else{
    console.log("itemsDiv not found")
}


     //console.log(itemsArray)
    // itemsArray.sort().forEach((item,index) => {   
    //     console.log(index  + '-й елемент:', item)
    // })


//     itemsArray= itemsArray.sort()

// for(let i = 0; i < itemsArray.length; i++){
//     console.log(i + '-й елемент:', itemsArray[i])
// }
