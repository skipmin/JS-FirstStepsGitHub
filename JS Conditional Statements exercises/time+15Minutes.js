function timeAddMinutes(input){
    let inputHours = Number(input[0]);
    let inputMinutes = Number(input[1]);
    
    let totalTimeMin = inputHours * 60 + inputMinutes;
    totalTimeMin = totalTimeMin + 15;
    
    let h = Math.floor(totalTimeMin / 60);
    let m = totalTimeMin % 60;
    
    if (h > 23){
        h = 0;
    }

    if (m < 10) {
        console.log(`${h}:0${m}`);
    } else {
        console.log(`${h}:${m}`);
    }
    console.log();
}
timeAddMinutes(["12", "49"])