function sumSeconds(input) {
    let firstRacer = Number(input[0]);
    let secondRacer = Number(input[1]);
    let thirdRadcer = Number(input[2]);
    let sumRacersTime = firstRacer + secondRacer + thirdRadcer;
    let minutes = Math.floor(sumRacersTime / 60);
    let seconds = sumRacersTime % 60;
    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}
sumSeconds(["14", "12",
    "10"])