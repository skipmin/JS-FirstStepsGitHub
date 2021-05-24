function depositCalculator(input) {
    let sum = Number(input[0]);
    let months = Number(input[1]);
    let interest = Number(input[2]);

    let interestTotal = sum * (interest / 100);
    let interestMonth = interestTotal / 12;
    let totalSum = sum + (months * interestMonth);

    console.log(totalSum);
}
depositCalculator(["2350",
"6",
"7"])