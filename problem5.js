const result5 = function problem5(inventory){
    let arr = [];
    for(let i = 0; i < inventory.length; i++){
        if(inventory[i].car_year < 2000){
            arr.push(inventory[i].car_year);
        }
    }
    return arr.length;
}
export {result5};
