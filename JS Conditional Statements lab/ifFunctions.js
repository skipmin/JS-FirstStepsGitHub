function ifs(input) {

    // let result = a === b; - равни ли са променливите, по променлива и стойност
    // let result = a !== b; - еднакви ли са променливите, по променлива и стойност
    // let result = a == b; - равни ли са само по стойност
    // let result = a !=b;  - еднакви ли са само по стойност

    //let isMale = false; - true или false

    // let age = 17;
    // if (age >= 18) {
    //     console.log("Hello")
    // }

    // let age = 17;
    // if (age >=18) {
    //     console.log('Welcome to our platform')
    // }else{
    //     console.log('Try again later')
    // }

    // let name = "Aleks";
    // if(name === "Ivan"){
    //     console.log("Hello Ivan");
    // }
    // if(name === "Petar"){
    //     console.log("Hello Petar");
    // }
    // if(name === "Aleks"){
    //     console.log("Hello Aleks");
    // }

    // let budget = 100;
    // let productPrice = 80;
    // if (productPrice > budget) {
    //     console.log('Too expensive');
    // }else{
    //     console.log('Not too expensive');
    // }

    // let age = 10;
    // if (age >= 18) {
    //     console.log('Welcome to our platform');
    // } else {
    //     console.log('Try again later')
    // }


    // let a = 5;
    // if(a < 10){
    //     
    // }
    //    var inTheCondition = 'Im in'; var се прилага за използване на променлива извън скоупа на кода
    // console.log(inTheCondition);

    // let number = Number(input[0]);
    // if (number % 2 == 0) {
    //     console.log('Even');
    // } else {
    //     console.log('Odd');
    // }

    // let number = 5.000001;
    // console.log(Math.floor(number)); - закръгля число надолу

    // let number = 5.00001;
    // console.log(Math.ceil(number)); - закръгля число нагоре

    // let number = 5.00001;
    // console.log(Math.trunc(number)); - отрязва дробната част

    // let number = 5.999999;
    // console.log(number.toFixed(2)); - форматира до определена цифра след десетичната запетая



    // let grade = Number(input[0]);
    // if (grade >= 5.50) {
    //     console.log('Exellent!');
    // } else {
    //     console.log('Not exellent!');
    // }

    // let firstNumber = 22;
    // let secondNumber = 23;
    // if(firstNumber > secondNumber){
    //     console.log(firstNumber);
    // } else {
    //     console.log(secondNumber);
    // }

    let grade = Number(input[0]);

    if (grade >= 5.50) {
        console.log('Excellent');
    } else if (grade >= 4.50) {
        console.log("Very good");
    } else if (grade >= 3.50) {
        console.log('good');
    } else if (grade >= 3) {
        console.log('poor');
    } else {
        console.log('bad');
    }

}
ifs([3])