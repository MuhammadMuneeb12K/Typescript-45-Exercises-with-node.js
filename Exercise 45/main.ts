// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function car(manufacturer,model,...optional){
    let my_car={
        manufacturer : manufacturer,
        model : model,
    }
    optional.forEach(options => {
        let [key, value] = options.split(':');
        my_car[key.trim()] = value.trim();

    })
    return my_car;
}

let car1 = car('toyota','corolla','year:2021','color:white');
console.log(car1);
