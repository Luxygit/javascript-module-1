const year = [1964, 2008, 1999, 2005, 1978, 1985, 1919 ]

year.forEach(function (year) {
    if (year<2004){
        console.log(`Born in ` + year + ` can drive`);
    }
    else {
        console.log(`Born in ` + year + ` can drive in ` + (year - 2004) + ` years`);
    }
});
