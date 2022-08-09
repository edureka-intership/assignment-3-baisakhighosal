// Solution-1
let restaurants = [{ name: 'Punjabi Rasoi', address: 'Block-A', city: 'Punjab' },
{ name: 'Gujrati Rasoi', address: 'Block-B', city: 'Gujrat' },
{ name: 'Rajasthani Rasoi', address: 'Block-C', city: 'Rajasthan' },
{ name: 'Marathi Rasoi', address: 'Block-D', city: 'Mumbai' }]
class restaurantManager {
    constructor() {
    }
    
    restaurantList() {
        for (let i = 0; i <restaurants.length; i++) {
            console.log(restaurants[i].name + ' Address:' + restaurants[i].address + '  City:' + restaurants[i].city);
        }
        return restaurants;
    }
    filter(search) {
        let abc = restaurants.filter((name) => {
            return name.city === search;
        })
        return abc;
    }
}

const ab = new restaurantManager();
ab.restaurantList();
ab.filter(search);

// Solution 2
    let orderData = {
    'Below 500': 20, '500-1000': 29,
    '1000-1500': 30, '1500-2000': 44,
    'Above 2000': 76
        };
let abc=Object.entries(orderData);
let orderSum=0;
let orderPropotions=0;
const sumorders=()=>{
    abc.forEach((orders)=>{
        orderSum= orderSum+orders[1];
        orderPropotions=abc.length;
        
    })
    return {orderSum,orderPropotions};
}
const orderpercentagearray=[];
const orderPercent=()=>{
    abc.forEach((values)=>{
        console.log(`Order percenent for ${values[0]} is ${(values[1]/orderSum*100).toFixed(2)}%`)
        orderpercentagearray.push((values[1]/orderSum*100).toFixed(2));
    })
}
sumorders();
orderPercent();
const finalArray=[];
   const lastfun=()=>{ for(i=0;i<abc.length;i++){
        finalArray.push({
            id:i+1,
            order:abc[i][0],
            orderPercentage:orderpercentagearray[i],
            restaurant:'Punjabi Tadka'
        })
    }
   }
   lastfun();
   finalArray;