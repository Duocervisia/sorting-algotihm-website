// const languages = ["Python", "JS", "C++"];
// const algorithms = ["Merge Sort", "Quick Sort", "Bubble Sort"];
//y time in milliseconds over 20 tries

const data = [
    // Merge Sort
    {
        algorithm: "Merge-Sort",
        language: "Python",
        name: "Name 1",
        unsorted: [65, 68, 70, 72, 75, 78, 80, 82, 84, 86, 88, 90, 92, 95, 97, 99, 101, 104, 106, 108],
        sorted: [5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 11, 11],
    },
    {
        algorithm: "Merge-Sort",
        language: "JS",
        name: "Name 2",
        unsorted: [
            8818.546, 2832.733, 3435.502,
            1573.842, 5632.873,  528.757,
             527.298,  901.458,  561.625,
             845.332,  528.472,  527.051,
             824.504,  526.588,  811.053,
             527.804,  525.812,  774.356,
             524.317,  774.109
          ],
        sorted: [
            3494.272,  1135.13, 5508.148,
            3139.467,  390.447,  376.519,
            3965.569, 1154.626,  865.156,
             324.479,  329.578,  412.641,
             741.685,  311.175,  309.069,
              309.94,  601.825,  310.439,
             309.096,  309.501
        ],                   
    },
    {
        algorithm: "Merge-Sort",
        language: "CPP",
        name: "Name 3",
        unsorted: [35, 38, 40, 42, 45, 48, 50, 52, 54, 56, 58, 60, 62, 65, 67, 69, 71, 74, 76, 78],
        sorted: [2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7],
    },
    // Quick Sort
    {
        algorithm: "Quick-Sort",
        language: "Python",
        name: "Name 1",
        unsorted: [70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165],
        sorted: [20, 22, 24, 23, 22, 25, 24, 23, 24, 25, 25, 26, 25, 26, 25, 27, 26, 26, 25, 27],
    },
    {
        algorithm: "Quick-Sort",
        language: "JS",
        name: "Name 2",
        unsorted: [
            10271.636, 1279.102, 2057.033,
              131.166, 1270.029, 1123.172,
              130.592,  129.774,  378.336,
              142.599,   129.24,  426.475,
              129.865,  128.103,  468.643,
               129.09,  127.202,   380.75,
              128.394,   126.94
          ],
        sorted: [
            25331.82, 11049.364, 4671.642,
            4924.646,  5150.256, 5260.204,
           11328.266,  2980.049, 3640.743,
            5427.947,  5009.366, 4895.984,
             4522.69,  4431.854,  4469.22,
             4615.38,  4769.004, 9423.123,
           10920.258,  5004.065
         ]         
    },
    {
        algorithm: "Quick-Sort",
        language: "CPP",
        name: "Name 3",
        unsorted: [45, 47, 50, 52, 55, 57, 60, 62, 65, 67, 70, 72, 75, 77, 80, 82, 85, 87, 90, 92],
        sorted: [10, 12, 13, 13, 13, 14, 14, 15, 14, 15, 14, 15, 15, 16, 15, 16, 15, 16, 15, 16],
    },
    // Bubble Sort
    {
        algorithm: "Bubble-Sort",
        language: "Python",
        name: "Name 1",
        unsorted: [600, 620, 630, 645, 660, 670, 680, 690, 700, 710, 720, 730, 740, 750, 760, 770, 780, 790, 800, 810],
        sorted: [50, 52, 54, 53, 52, 55, 54, 53, 54, 55, 55, 56, 55, 56, 55, 57, 56, 56, 55, 57],
    },
    {
        algorithm: "Bubble-Sort",
        language: "JS",
        name: "Name 2",
        unsorted: [
            6041.731, 945.865, 2164.213,
             850.506, 850.558,  849.904,
             861.288, 853.951,  849.874,
             863.851, 850.722,  860.751,
              849.61, 849.645,  850.041,
             849.136, 858.473,  848.912,
             852.602, 848.831
          ],
        sorted: [
            4608.722, 762.626, 1418.961,
             472.089, 471.814,  471.141,
             471.144, 471.307,  471.173,
             506.147, 472.338,  471.041,
             470.867, 470.815,   471.26,
             470.344, 470.051,    480.2,
             469.904, 469.926
          ]   
    },
    {
        algorithm: "Bubble-Sort",
        language: "CPP",
        name: "Name 3",
        unsorted: [500, 520, 530, 545, 560, 570, 580, 590, 600, 610, 620, 630, 640, 650, 660, 670, 680, 690, 700, 710],
        sorted: [40, 42, 44, 43, 42, 45, 44, 43, 44, 45, 45, 46, 45, 46, 45, 47, 46, 46, 45, 47],
    }
];

let plotDataAlgorithm = []; 
let plotDataSortedAlgorithm = []; 
let plotDataLanguage = [];
let plotDataSortedLanguage = [];

let plotDataAlgorithmsBar = [];
let plotDataSortedAlgorithmsBar = [];

let plotDataLanguageBar = [];
let plotDataSortedLanguageBar = [];


for (let i = 0; i < algorithms.length; i++) {
    plotDataAlgorithm[i] = [];
    plotDataSortedAlgorithm[i] = [];

    plotDataAlgorithmsBar[i] = [];
    plotDataSortedAlgorithmsBar[i] = [];
}

for (let i = 0; i < languages.length; i++) {
    plotDataLanguage[i] = [];
    plotDataSortedLanguage[i] = [];

    plotDataLanguageBar[i] = [];
    plotDataSortedLanguageBar[i] = [];
}


data.forEach(element => {
    plotDataLanguage[languages.indexOf(element.language)].push({
        y: element.unsorted,
        type: 'box',
        name: element.algorithm + " (" + element.language + ")",
    });

    plotDataAlgorithm[algorithms.indexOf(element.algorithm)].push({
        y: element.unsorted,
        type: 'box',
        name: element.algorithm + " (" + element.language + ")",
    });

    plotDataSortedLanguage[languages.indexOf(element.language)].push({
        y: element.sorted,
        type: 'box',
        name: element.algorithm + " (" + element.language + ")",
    });

    plotDataSortedAlgorithm[algorithms.indexOf(element.algorithm)].push({
        y: element.sorted,
        type: 'box',
        name: element.algorithm + " (" + element.language + ")",
    });

    plotDataAlgorithmsBar[algorithms.indexOf(element.algorithm)].push({
        y: element.unsorted,
        x: Array.from({ length: element.unsorted.length }, (_, i) => i + 1),
        type: 'bar',
        name: element.algorithm + " (" + element.language + ")",
    });
    plotDataSortedAlgorithmsBar[algorithms.indexOf(element.algorithm)].push({
        y: element.sorted,
        x: Array.from({ length: element.sorted.length }, (_, i) => i + 1),
        type: 'bar',
        name: element.algorithm + " (" + element.language + ")",
    });

    plotDataLanguageBar[languages.indexOf(element.language)].push({
        y: element.unsorted,
        x: Array.from({ length: element.unsorted.length }, (_, i) => i + 1),
        type: 'bar',
        name: element.algorithm + " (" + element.language + ")",
    });

    plotDataSortedLanguageBar[languages.indexOf(element.language)].push({
        y: element.sorted,
        x: Array.from({ length: element.sorted.length }, (_, i) => i + 1),
        type: 'bar',
        name: element.algorithm + " (" + element.language + ")",
    });
});

var layout = {
    yaxis: {
        title: 'Laufzeit in Mikrosekunden'
    }
};
var layoutBar = {
    yaxis: {
        title: 'Laufzeit in Mikrosekunden'
    },
    xaxis: {
        title: 'Versuche'
    }
};
let i = 0;
plotDataLanguage.forEach(element => {
    console.log('plotter-'+ languages[i])
    Plotly.newPlot('plotter-'+ languages[i], element, layout);
    i++;
});

i = 0;
plotDataSortedLanguage.forEach(element => {
    console.log('plotter-'+ languages[i])
    Plotly.newPlot('plotter-sorted-'+ languages[i], element, layout);
    i++;
});

i = 0;
plotDataAlgorithm.forEach(element => {
    console.log('plotter-'+ algorithms[i])
    Plotly.newPlot('plotter-'+ algorithms[i], element, layout);
    i++;
});

i = 0;
plotDataSortedAlgorithm.forEach(element => {
    console.log('plotter-'+ algorithms[i])
    Plotly.newPlot('plotter-sorted-'+ algorithms[i], element, layout);
    i++;
});

i = 0;
plotDataAlgorithmsBar.forEach(element => {
    Plotly.newPlot('plotter-bar-'+ algorithms[i], element, layoutBar);
    i++;
});

i = 0;
plotDataSortedAlgorithmsBar.forEach(element => {
    Plotly.newPlot('plotter-sorted-bar-'+ algorithms[i], element, layoutBar);
    i++;
});

i = 0;
plotDataLanguageBar.forEach(element => {
    Plotly.newPlot('plotter-bar-'+ languages[i], element, layoutBar);
    i++;
});

i = 0;
plotDataSortedLanguageBar.forEach(element => {
    Plotly.newPlot('plotter-sorted-bar-'+ languages[i], element, layoutBar);
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

    let mean = calculateMean(element.unsorted);
    cell3.innerHTML = mean;

    let standardDeviation = calculateStandardDeviation(element.unsorted, mean);
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

function calculateMedian(data){
    data.sort((a, b) => a - b);
    let median;
    if(data.length % 2 == 0){
        median = (data[data.length/2] + data[data.length/2 - 1]) / 2;
    }else{
        median = data[Math.floor(data.length/2)];
    }
    return median;
}



let j = 0;
// Loop through the options array and create <option> elements
languages.forEach((option) => {
    if(j != 0){
        document.querySelector("#plotter-"+ option).style.display = "none";
        document.querySelector("#plotter-sorted-"+ option).style.display = "none";
        document.querySelector("#plotter-bar-"+ option).style.display = "none";
        document.querySelector("#plotter-sorted-bar-"+ option).style.display = "none";
    }else{
        createTableLanguages();
    }
    j++;
});
j=0;
algorithms.forEach((option) => {
    if(j != 0){
        document.querySelector("#plotter-"+ option).style.display = "none";
        document.querySelector("#plotter-sorted-"+ option).style.display = "none";
        document.querySelector("#plotter-bar-"+ option).style.display = "none";
        document.querySelector("#plotter-sorted-bar-"+ option).style.display = "none";
    }else{
        createTableAlgorithms();
    }
    j++;
});