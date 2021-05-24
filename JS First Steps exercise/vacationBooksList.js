function vacationBookList(input) {
    let pagesPerBook = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysPerBook = Number(input[2]);
    let bookRead = pagesPerBook / pagesPerHour;
    let hoursPerDay = bookRead / daysPerBook;
    console.log(hoursPerDay);

}

vacationBookList(["432",
    "15",
    "4"])