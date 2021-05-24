function toySho(input) {
    let vacationPrise = Number(input[0]);
    let puzzlesNum = Number(input[1]);
    let talkDowsNum = Number(input[2]);
    let plushBearNum = Number(input[3]);
    let minionsNum = Number(input[4]);
    let trucksNum = Number(input[5]);
    let totalSumToys = (puzzlesNum * 2.60) + (talkDowsNum * 3) + (plushBearNum * 4.10) + (minionsNum * 8.20) + (trucksNum * 2);
    let toysSold = puzzlesNum + talkDowsNum + plushBearNum + minionsNum + trucksNum;
    if (toysSold >= 50) {
        totalSumToys = totalSumToys * 0.75;
    }
    let sumAfterRent = totalSumToys * 0.9;

    if (sumAfterRent >= vacationPrise) {
        console.log(`Yes! ${(sumAfterRent - vacationPrise).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(vacationPrise - sumAfterRent).toFixed(2)} lv needed.`);
    }
}
toySho(["320", "8", "2", "5", "5", "1"])