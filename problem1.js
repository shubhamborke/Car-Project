const result1 = function problem1(inventory){
    let arr = "";
    for(let i = 0; i < inventory.length; i++){
        if(inventory[i].id === 33){
            arr = "Car 33 is a " + inventory[i].car_year + " " + inventory[i].car_make + " " + inventory[i].car_model;
        }
    }
    return arr;
}
export {result1};