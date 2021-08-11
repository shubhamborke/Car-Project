const result3 = function problem3 (inventory){
    let arr = [];
    for(let i = 0; i < inventory.length; i++){
        arr.push(inventory[i].car_model);
    }
    return arr.sort();
}
export {result3};