function array() {
    let str = prompt("Введите слово или число:");

    
    if (str === null || str.trim() === "") {
        console.log("null");
        return;
    }

    let length = str.length;


    if (length % 2 === 0) {
        console.log("null");
    } else {
    
        let среднеечисло = "";
        if (length > 1) {
            среднеечисло = str.slice(1, -1);
        }
        console.log(среднеечисло);
    }
}

array();
