function record(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let distancePerM = Number(input[2]);

    let resistance = Math.floor(distance / 15);
    let timeIvan = distance * distancePerM;
    timeIvan = timeIvan + resistance * 12.5;

    if (timeIvan < record) {
        console.log(`Yes, he succeeded! The new world record is ${timeIvan.toFixed(2)} seconds.`);
    } else {
        let diff = Math.abs(timeIvan - record)
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }

}

record(["55555.67",
"3017",
"5.03"])