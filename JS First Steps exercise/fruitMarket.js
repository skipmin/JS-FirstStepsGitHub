function fruitMarket(input) {
    let strawberriesPrice = Number(input[0]);
    let bananasKilo = Number(input[1]);
    let orangesKilo = Number(input[2]);
    let raspberriesKilo = Number(input[3]);
    let strawberriesKilo = Number(input[4]);

    let raspberriesPrice = strawberriesPrice / 2;
    let orangesPrice = raspberriesPrice - (raspberriesPrice * 0.40);
    let bananasPrice = raspberriesPrice - (raspberriesPrice * 0.80);

    let totalBananasPrice = bananasKilo * bananasPrice;
    let totalOrangesPrice = orangesKilo * orangesPrice;
    let totalRaspberriesPrice = raspberriesKilo * raspberriesPrice;
    let totalStrawberriesPrice = strawberriesKilo * strawberriesPrice;
    
    let totalSum = totalBananasPrice + totalOrangesPrice + totalRaspberriesPrice + totalStrawberriesPrice;
    console.log(totalSum);
}

fruitMarket(["63.5",
"3.57",
"6.35",
"8.15",
"2.5"])