function skiTrip(input) {
    let days = Number(input[0]);
    let premise = input[1];
    let feedback = input[2];

    let nights = days - 1;
    let allNightsPrice = 0;

    if (premise === 'room for one person') {
        allNightsPrice = nights * 18;

    } else if (premise === 'apartment') {
        if (nights < 10) {
            allNightsPrice = (nights * 25) * 0.70;
        } else if (nights > 10 && nights <= 15) {
            allNightsPrice = (nights * 25) * 0.65;
        } else if (nights > 15) {
            allNightsPrice = (nights * 25) * 0.50;
        }

    } else if (premise === 'president apartment') {
        if (nights < 10) {
            allNightsPrice = (nights * 35) * 0.90;
        } else if (nights > 10 && nights <= 15) {
            allNightsPrice = (nights * 35) * 0.85;
        } else if (nights > 15) {
            allNightsPrice = (nights * 35) * 0.80;
        }
    } if (feedback === 'positive') {
        allNightsPrice = allNightsPrice * 1.25;
    } else if (feedback === 'negative') {
        allNightsPrice = allNightsPrice * 0.90;
    }
    console.log(allNightsPrice.toFixed(2));
}
skiTrip(["2",
"apartment",
"positive"])