function personalTitles(input) {
    let age = Number(input[0]);
    let sex = input[1];
    if (sex === 'f') {
        if (age >= 16) {
            console.log('Ms.');
        } else {
            console.log('Miss');
        }
    } else if (sex === 'm') {
        if (age >= 16) {
            console.log('Mr.');
        } else {
            console.log('Master');
        }
    }

}
personalTitles(["13.5",
"m"])