function checkOrder(available, ordered) {
    if (ordered === 0) return "Your order is empty";

    if (ordered > available) return "Your order is too large";

    return "Your order is accepted";
}



console.log(checkOrder(100, 0));     
console.log(checkOrder(50, 60));     
console.log(checkOrder(100, 30));    
