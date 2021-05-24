function areaOfFigures(input) {
    let figure = String(input[0]);
    let sidea = Number(input[1]);
    let sideb = Number(input[2]);
    let circleArea = Math.PI * (sidea * sidea);
    let triangleArea = (sideb / 2) * sidea;

    if (figure === 'square') {
        console.log(sidea * sidea.toFixed(3));
    } else if (figure === 'rectangle') {
        console.log(sidea * sideb.toFixed(3));
    } else if (figure === 'circle') {
        console.log(Math.PI * (sidea * sidea)).toFixed(3);
    } else{
        console.log(triangleArea.toFixed(3));
    }
}
areaOfFigures(["circle",
"6"])