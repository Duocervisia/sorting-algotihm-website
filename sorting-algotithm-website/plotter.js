// const languages = ["Python", "JS", "C++"];
// const algorithms = ["Merge Sort", "Quick Sort", "Bubble Sort"];
//y time in milliseconds over 20 tries
data = [
    // Merge Sort
    {
        algorithm: "Merge-Sort",
        language: "Python",
        y: [35, 34, 36, 37, 38, 39, 35, 36, 37, 38, 39, 35, 35, 36, 38, 39, 37, 36, 37, 38],
    },
    {
        algorithm: "Merge-Sort",
        language: "JS",
        y: [30, 29, 31, 30, 29, 30, 31, 32, 30, 31, 29, 28, 30, 31, 29, 30, 31, 32, 30, 31],
    },
    {
        algorithm: "Merge-Sort",
        language: "CPP",
        y: [15, 14, 16, 15, 14, 16, 17, 18, 15, 16, 14, 13, 15, 14, 16, 15, 14, 16, 15, 16],
    },
    // Quick Sort
    {
        algorithm: "Quick-Sort",
        language: "Python",
        y: [25, 26, 24, 23, 22, 26, 27, 25, 24, 23, 25, 26, 27, 26, 24, 23, 22, 25, 26, 24],
    },
    {
        algorithm: "Quick-Sort",
        language: "JS",
        y: [20, 21, 22, 23, 24, 22, 21, 20, 21, 22, 23, 24, 20, 21, 22, 23, 21, 20, 21, 22],
    },
    {
        algorithm: "Quick-Sort",
        language: "CPP",
        y: [10, 9, 11, 8, 9, 12, 10, 11, 9, 8, 9, 10, 11, 12, 8, 9, 10, 11, 10, 9],
    },
    // Bubble Sort
    {
        algorithm: "Bubble-Sort",
        language: "Python",
        y: [100, 105, 110, 98, 101, 107, 103, 99, 102, 106, 104, 101, 105, 109, 97, 100, 107, 102, 100, 105],
    },
    {
        algorithm: "Bubble-Sort",
        language: "JS",
        y: [90, 95, 98, 99, 92, 94, 96, 97, 90, 92, 91, 95, 99, 100, 93, 94, 95, 96, 94, 92],
    },
    {
        algorithm: "Bubble-Sort",
        language: "CPP",
        y: [80, 78, 82, 84, 79, 81, 83, 80, 82, 81, 80, 79, 83, 85, 87, 80, 81, 79, 83, 82],
    },
]

let plotDataAlgorithm = []; 
let plotDataLanguage = [];

for (let i = 0; i < algorithms.length; i++) {
    plotDataAlgorithm[i] = [];
}

for (let i = 0; i < languages.length; i++) {
    plotDataLanguage[i] = [];
}


data.forEach(element => {
    console.log(plotDataLanguage, languages[element.language]);
    plotDataLanguage[languages.indexOf(element.language)].push({
        y: element.y,
        type: 'box',
        name: element.algorithm + " (" + element.language + ")",
    });

    plotDataAlgorithm[algorithms.indexOf(element.algorithm)].push({
        y: element.y,
        type: 'box',
        name: element.algorithm + " (" + element.language + ")",
    });


});

// plotDataAlgorithm.forEach(element => {
//     element.sort((a, b) => {
//         const langA = languages[plotDataLanguage.indexOf(a)];
//         const langB = languages[plotDataLanguage.indexOf(b)];
//         console.log(langA, langB);
//         return langA.localeCompare(langB);
//     });
// });

var layout = {
    yaxis: {
        title: 'Laufzeit in Millisekunden'
    }
};
let i = 0;
plotDataLanguage.forEach(element => {
    console.log('plotter-'+ languages[i])
    Plotly.newPlot('plotter-'+ languages[i], element, layout);
    i++;
});

i = 0;
plotDataAlgorithm.forEach(element => {
    console.log('plotter-'+ algorithms[i])
    Plotly.newPlot('plotter-'+ algorithms[i], element, layout);
    i++;
});


//Add each plot in the table id="table"
data.forEach(element => {
    let table = document.getElementById("table");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    cell1.innerHTML = element.algorithm;
    cell2.innerHTML = element.language;

    let mean = calculateMean(element.y);
    cell3.innerHTML = mean;

    let standardDeviation = calculateStandardDeviation(element.y, mean);
    cell4.innerHTML = standardDeviation.toFixed(3);

}); 
function calculateMean(data){
    let sum = 0;
    data.forEach(el => {
        sum += el;
    });
    return sum / data.length;
}
function calculateStandardDeviation(data, mean){
    let sumOfSquares = 0;
    data.forEach(el => {
        sumOfSquares += Math.pow(el - mean, 2);
    })
    return Math.sqrt(sumOfSquares / (data.length-1));
}



let j = 0;
// Loop through the options array and create <option> elements
languages.forEach((option) => {
    if(j != 0){
        document.querySelector("#plotter-"+ option).style.display = "none";
    }else{
        createTableLanguages();
    }
    j++;
});
j=0;
algorithms.forEach((option) => {
    if(j != 0){
        document.querySelector("#plotter-"+ option).style.display = "none";
    }else{
        createTableAlgorithms();
    }
    j++;
});