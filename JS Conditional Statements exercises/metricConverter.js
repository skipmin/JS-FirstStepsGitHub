function metricConverter(input) {
    let a = Number(input[0]);
    let b = input[1];
    let c = input[2];
    resultInMm = 0;
    result = 0;

    if (b === 'cm') {
        resultInMm = a * 10;
    } else if (b === 'm') {
        resultInMm = a * 1000;
    } else  {
        resultInMm = a;
    }
    
    if (c === 'cm') {
        result = resultInMm / 10;
    } else if (c === 'm') {
        result = resultInMm / 1000; 
    } else {
        result = resultInMm;
    }
    console.log(result.toFixed(3));
}
metricConverter(["45","cm","mm"])