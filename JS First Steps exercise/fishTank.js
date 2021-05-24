function fishTank(input) {
    let lenght = Number(input[0]);
    let width = Number (input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);
    
    let aquariumSize = lenght * width * height;

    let litresAquariumSize = aquariumSize * 0.001;

    let settingsArea = percent * 0.01;

    let waterArea = litresAquariumSize * (1 - settingsArea);

    console.log(waterArea)
}

fishTank(["105",
"77",
"89",
"18.5"])