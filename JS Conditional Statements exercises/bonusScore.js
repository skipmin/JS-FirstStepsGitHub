function bonusScore(input) {
    let initialPoints = Number(input[0]);
    let bonus = 0.0;
    if (initialPoints <= 100) {
        bonus = 5;
    } else if (initialPoints > 1000) {
        bonus = initialPoints * 0.10;
    } else {
        bonus = initialPoints * 0.20;
    }
    if (initialPoints % 2 == 0) {
        bonus += 1;
    } else if (initialPoints % 10 == 5) {
        bonus += 2;
    }
    console.log(bonus);
    console.log(initialPoints + bonus);
}
bonusScore(["15875"])