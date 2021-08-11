const result6 = function problem6(inventory){
    let arr = [];
    for(let i = 0; i < inventory.length; i++){
        if(inventory[i].car_make === "BMW" || inventory[i].car_make === "Audi"){
            arr.push(inventory[i]);
        }
    }
    return arr;
}
export {result6};