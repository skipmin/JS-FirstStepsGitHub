function petShop(input) {
    let dogs = input[0];
    let otherDogs = input[1];

    let dogsFood = 2.50;
    let otherDogsFood = 4;

    let sum = (dogs * dogsFood) + (otherDogs * otherDogsFood);

    console.log(`${sum} lv.`);

}
petShop([13, 9])