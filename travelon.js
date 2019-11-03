


let destinations = [
    { dest_code: 100, dest_name: "Thailand", dest_price: 1000 },
    { dest_code: 101, dest_name: "China", dest_price: 1200 },
    { dest_code: 102, dest_name: "Usa", dest_price: 700 },
    { dest_code: 103, dest_name: "Canada", dest_price: 1250 },
    { dest_code: 104, dest_name: "Paris", dest_price: 450 },
    { dest_code: 105, dest_name: "London", dest_price: 600 },
    { dest_code: 106, dest_name: "Peru", dest_price: 1130 },
    { dest_code: 107, dest_name: "Sydney", dest_price: 2000 },
];

let orders = [
    { order_code: 1, order_name:"avi", order_pid:"001", order_dest:"Thailand",order_passengers: 2, order_price: 2000},
    { order_code: 2, order_name:"shuki", order_pid:"111", order_dest:"London",order_passengers: 1, order_price: 600}
];

try {
    console.log("The js file has started...");
    let tableDestination = document.querySelector('.table-destinations tbody');
    console.log(tableDestination);
    tableDestination.innerHTML="";
    let templateDest = "<tr><td>#CODE</td><td>#NAME</td><td>#PRICE</td></tr>"
    destinations.forEach(function(dest){
        tableDestination.innerHTML += templateDest
        .replace("#CODE",dest.dest_code)
        .replace("#NAME",dest.dest_name)
        .replace("#PRICE",dest.dest_price);  
    });    

} catch (error) {
    console.error("Error",error);
}

function addOrder(){

}