function birthdayParty(input) {
    let roomRent = Number(input[0]);
    let cake = roomRent * 0.20;
    let drinks = cake * 0.55;
    let animator = roomRent / 3;
    let totalSum = roomRent + cake + drinks + animator;
    console.log(totalSum);
}

birthdayParty(["3720"])