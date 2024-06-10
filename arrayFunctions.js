const items = [
    {id: 1,name:'Bike',price:100},
    {id: 2,name:'Tv',price:200},
    {id: 3,name:'Album',price:10},
    {id: 4,name:'Book',price:5},
    {id: 5,name:'phone',price:500},
    {id: 6,name:'computer',price:1000},
    {id: 7,name:'keyboard',price:25},
]

const itemsFiltered= items.filter((item)=>{
    return item.price <= 100;
})


const itemsNames = items.map((item)=>{
    return {id: item.id,name: item.name};
})

const foundItem = items.find((item)=>{
    return item.name == 'Book'
})

//console.log(foundItem);

items.forEach((item)=>{
    //console.log(item.id+' '+item.name);
})

const total = items.reduce((currentTotal,item)=>{
    return currentTotal+item.price;
},0);

console.log(total);