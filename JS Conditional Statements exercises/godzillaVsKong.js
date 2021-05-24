function godzillaVsKong(input) {
    let filmBudget = Number(input[0]);
    let stats = Number(input[1]);
    let clothPerStat = Number(input[2]);
    let totalClothStat = stats * clothPerStat;
    let movieDecor = filmBudget * 0.10;
    if (stats >= 150) {
        totalClothStat = totalClothStat - (totalClothStat * 0.10);
    };
    let movieCost = totalClothStat + movieDecor;
    if (movieCost > filmBudget) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(movieCost - filmBudget).toFixed(2)} leva more.`);
    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(filmBudget - movieCost).toFixed(2)} leva left.`);
    }
}
godzillaVsKong(["9587.88",
"222",
"55.68"])