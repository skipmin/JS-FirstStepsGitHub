function showCase(input) {

    //Логически оператор "ИЛИ" || - нестриктен
    let num = 77;
    if (num > 5 || num < 10 || num % 2 === 0) {
        console.log('right result');
    }

    //Логически оператор "И" && - стриктен
    // let num = 7;
    // let result = num < 10 && num > 5;
    // if (result) {
    //     console.log('num is between 5 and 10');
    // }

    // Обединяване на няколко case в един изход за печатане.
    // let num = 5;
    // switch (num) {
    //     case 5:
    //     case 6:
    //     case 7:console.log(7);break;
    //     default:console.log('Error!');break;
    // }



    // let language = input[0]
    // switch(language) {
    //     case 'BG':console.log('Здравейте!');break;
    //     case 'EN':console.log('Hello!');break;
    //     case 'ES':console.log('Hola!');break;
    //     default:console.log('Error!');break;
    // }

    // let language = input[0]
    // if (language === 'BG') {
    //     console.log('Здравейте!');
    // } else if (language === 'EN') {
    //     console.log('Hello!');
    // } else if (language === 'ES') {
    //     console.log('Hola!');
    // }
}

showCase(['BG']);