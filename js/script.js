
console.log("Hello, World!");


async function getObjectFromFile(file) {
    try{
        const response = await fetch(file);
        if (!response.ok) {
            throw new Error(`HTTP помилка! статус: ${response.status}`);
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error('Помилка джейсона:', error);
    }
    finally {
        console.log('Fetch завершено');
    }
}

async function buildItems(){
        const itemsArray = await getObjectFromFile('js/market.json')
                    console.log(itemsArray)

       if(!itemsArray){
           console.log("itemsArray is not defined");
            return;
           }

let itemsDiv = document.getElementById("items");

if(itemsDiv){
    
itemsArray.forEach((item, index) =>{
    console.log(item)
    itemsDiv.innerHTML +=

    `
  <div class="item">
            <div class="item-title"> ${item.title}</div>
            <div class="item-image">
                <img src="img/${item.image}" width="200" height="250">
             </div>
            <div class="parts-pay" > 
                <div><img src="img/${item.parts_pay_monobank_logo}" width="75" height="75"></div>
                <div><img src="img/${item.parts_pay_privatbank_logo}"  width="50" height="50"></div>
            </div>
            <div class ="price">
                <div><span>${item.price0}</span><sup>грн</sup></div>
                <div><span> ${item.price1}</span><sup>грн</sup></div>
            </div>
            <div class ="bonus">
                <div>ціна за купоном</div>
                <div><span>${item.bonus}</span> <sup>грн</sup></div>
            </div>
            </div>

    `
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
}buildItems()

     //console.log(itemsArray)
    // itemsArray.sort().forEach((item,index) => {   
    //     console.log(index  + '-й елемент:', item)
    // })


//     itemsArray= itemsArray.sort()

// for(let i = 0; i < itemsArray.length; i++){
//     console.log(i + '-й елемент:', itemsArray[i])
// }
