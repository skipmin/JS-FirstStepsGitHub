function charityCampaign(input) {
    let campaignDays = Number(input[0]);
    let chefs = Number(input[1]);
    let cakesPerDay = Number(input[2]);
    let wafflesPerDay = Number(input[3]);
    let pancakesPerDay = Number(input[4]);
    let sumCakesPerDay = cakesPerDay * 45;
    let sumWafflesPerDay = wafflesPerDay * 5.80;
    let sumPancakesPerDay = pancakesPerDay * 3.20;
    let totalProductsPerDay = (sumCakesPerDay + sumWafflesPerDay + sumPancakesPerDay) * chefs;
    let wholeSum = totalProductsPerDay * campaignDays;
    let wholeSumAfterCharity = wholeSum - (wholeSum / 8);
    console.log(wholeSumAfterCharity);

}

charityCampaign(["131",
"5",
"9",
"33",
"46"])