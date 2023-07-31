

function leapYear(year){
if (year%4==0) {
    console.log(`Year is :${year}, --leap year`);
} else {
    console.log(`Year is :${year}, --NOT leap year`);
}
}
leapYear(2020);
leapYear(1999);
leapYear(1600);
leapYear(2022);
leapYear(1945);
leapYear(null);
leapYear("twenty twenty");
leapYear("NaN");
leapYear(1750);