/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const map=new Map();
  let ans=[];
  for(let i=0; i<transactions.length; i++) {
    let price=transactions[i].price;
    let category=transactions[i].category;
    if(map.get(category)==undefined) {
      map.set(category,price);
    }
    else{
      map.set(category,price+map.get(category));
    }

  }
  map.forEach((key,value) => {
    ans.push({
      category:value,
      totalSpent:key
    });
  })
  console.log(map);
  return ans;
}

module.exports = calculateTotalSpentByCategory;
