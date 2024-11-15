// const languages = ["Python", "JS", "C++"];
// const algorithms = ["Merge Sort", "Quick Sort", "Bubble Sort"];
//y time in milliseconds over 20 tries

const data = [
    //Merge Sort
    {
        algorithm: "Merge-Sort",
        language: "Java",
        name: "Platzhalter",
        unsorted: [65, 68, 70, 72, 75, 78, 80, 82, 84, 86, 88, 90, 92, 95, 97, 99, 101, 104, 106, 108],
        sorted: [5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 11, 11],
    },
    {
        algorithm: "Merge-Sort",
        language: "Python",
        name: "Von euch",
        unsorted: [ 1390.021,
            1027.173,
            991.405,
            969.661,
            971.382,
            980.774,
            988.274,
            974.093,
            972.127,
            992.153,
            972.198,
            984.532,
            970.362,
            968.877,
            1000.679,
            973.115,
            971.891,
            969.807,
            969.289,
            984.734
        ],
        sorted: [
            665.019,
            620.951,
            615.435,
            660.405,
            617.102,
            645.951,
            616.856,
            631.328,
            611.177,
            611.071,
            661.475,
            613.702,
            611.107,
            618.799,
            612.963,
            611.118,
            614.033,
            705.927,
            611.167,
            613.557
        ],
    },
    {
        algorithm: "Merge-Sort",
        language: "JS",
        name: "Von uns",
        unsorted: [
            8818.546, 2832.733, 3435.502,
            1573.842, 5632.873, 528.757,
            527.298, 901.458, 561.625,
            845.332, 528.472, 527.051,
            824.504, 526.588, 811.053,
            527.804, 525.812, 774.356,
            524.317, 774.109
        ],
        sorted: [
            3494.272, 1135.13, 5508.148,
            3139.467, 390.447, 376.519,
            3965.569, 1154.626, 865.156,
            324.479, 329.578, 412.641,
            741.685, 311.175, 309.069,
            309.94, 601.825, 310.439,
            309.096, 309.501
        ],
    },
    {
        algorithm: "Merge-Sort",
        language: "CPP",
        name: "Von uns",
        unsorted: [493.806, 486.12, 487.11, 487.341, 486.207, 487.005, 486.357, 486.442, 525.065, 487.44, 486.37, 487.392, 486.847, 486.962, 487.057, 487.613, 495.792, 487.58, 490.052, 486.842],
        sorted: [489.975, 488.078, 512.891, 487.44, 488.296, 488.047, 488.193, 487.723, 488.157, 488.777, 506.769, 487.358, 487.358, 487.582, 487.61, 487.703, 491.534, 487.502, 496.999, 487.523],
    },
    // Quick Sort
    {
        algorithm: "Quick-Sort",
        language: "Java",
        name: "Von euch",
        unsorted: [1105.0, 2559.0, 50.0, 47.0, 3345.0, 48.0, 48.0, 44.0, 43.0, 45.0, 45.0, 44.0, 43.0, 44.0, 44.0, 45.0, 47.0, 75.0, 42.0, 43.0],
        sorted: [6621.0, 1235.0, 1107.0, 70.0, 59.0, 113.0, 60.0, 58.0, 58.0, 61.0, 60.0, 58.0, 58.0, 60.0, 59.0, 83.0, 58.0, 60.0, 60.0, 60.0],
    },
    {
        algorithm: "Quick-Sort",
        language: "Python",
        name: "Von euch",
        unsorted: [  1521.644,
            920.262,
            923.919,
            903.242,
            949.992,
            891.771,
            928.398,
            918.593,
            896.149,
            993.187,
            894.126,
            892.777,
            900.094,
            893.41,
            896.425,
            893.056,
            893.761,
            908.234,
            893.885,
            894.076
        ],
        sorted: [665.191,
            646.252,
            621.034,
            616.736,
            619.245,
            618.851,
            616.622,
            614.05,
            672.173,
            617.108,
            627.631,
            623.766,
            618.678,
            620.396,
            620.149,
            634.284,
            671.553,
            619.893,
            618.696,
            631.806
        ],
    },
    {
        algorithm: "Quick-Sort",
        language: "JS",
        name: "Von euch",
        unsorted: [
            7557.242919921875,    1969.408203125, 5163.820068359375,  208.300048828125, 1246.565185546875, 1053.472900390625, 132.1611328125,  130.282958984375, 461.951171875,   131.13916015625, 129.798095703125,  382.989990234375, 131.73291015625,  140.867919921875, 435.346923828125,    130.8271484375, 129.097900390625,  417.905029296875, 129.98388671875,  127.987060546875
        ],
        sorted: [
            48709.89306640625, 24553.684814453125, 9036.195068359375,  9246.796142578125, 12681.307861328125,  21041.98095703125, 3191.34912109375,   2649.26708984375, 3004.73486328125,  4155.012939453125, 4409.961181640625,  4498.576904296875, 4759.44287109375,     5088.462890625, 5569.56201171875,   5023.64794921875, 4677.85693359375, 16127.556884765625, 2560.219970703125,  4710.719970703125
        ]
    },
    {
        algorithm: "Quick-Sort",
        language: "CPP",
        name: "Von uns",
        unsorted: [172.254, 168.109, 165.779, 194.401, 165.595, 165.058, 165.02, 164.775, 165.083, 164.763, 164.894, 165.003, 164.935, 164.93, 165.051, 165.113, 164.902, 164.87, 165.736, 164.735,],
        sorted: [3079.396, 2985.679, 2982.006, 2977.687, 3067.144, 3060.293, 2984.441, 3014.702, 3023.141, 2982.095, 2982.373, 3124.344, 3078.67, 2845.304, 2855.356, 2886.608, 2821.175, 2816.813, 2809.548, 2816.228],
    },
    // Bubble Sort
    {
        algorithm: "Bubble-Sort",
        language: "Java",
        name: "Von euch",
        unsorted: [6400.0, 6468.0, 2460.0, 2473.0, 2449.0, 1569.0, 792.0, 764.0, 756.0, 773.0, 792.0, 782.0, 774.0, 788.0, 874.0, 779.0, 781.0, 780.0, 764.0, 793.0],
        sorted: [5498.0, 3703.0, 144.0, 119.0, 118.0, 118.0, 117.0, 116.0, 124.0, 117.0, 117.0, 117.0, 52.0, 52.0, 52.0, 51.0, 51.0, 51.0, 51.0, 51.0],
    },
    {
        algorithm: "Bubble-Sort",
        language: "Python",
        name: "Von euch",
        unsorted: [ 33606.611,
            19754.992,
            19831.968,
            20201.075,
            19764.3,
            19875.315,
            19874.488,
            19813.2,
            19875.637,
            19746.291,
            19766.742,
            20066.821,
            19872.215,
            21704.987,
            20116.055,
            19844.856,
            19852.991,
            19752.952,
            19766.037,
            19858.651
        ],
        sorted: [ 7836.822,
            7892.895,
            7798.624,
            7798.144,
            7822.925,
            7862.171,
            8028.022,
            7822.257,
            7873.624,
            7798.29,
            7833.984,
            7831.7,
            8133.978,
            7838.992,
            7829.428,
            7834.625,
            8141.753,
            8242.725,
            8109.241,
            8063.608
        ],
    },
    {
        algorithm: "Bubble-Sort",
        language: "JS",
        name: "Von euch",
        unsorted: [
            5993.64697265625,   493.6669921875, 1855.926025390625,  433.85009765625, 433.77490234375, 433.226806640625, 433.199951171875, 433.182861328125, 433.1689453125,          447.125, 433.171875,  436.81689453125, 433.137939453125,    443.958984375, 432.116943359375, 432.049072265625, 432.029052734375,     431.99609375, 442.541015625,  432.05615234375
        ],
        sorted: [
            4330.051025390625, 313.027099609375, 1158.97998046875,   166.6279296875, 166.701904296875, 166.031005859375, 165.93603515625, 170.804931640625, 180.718994140625,  166.06201171875, 165.93505859375,  169.73486328125, 222.93896484375,  199.39794921875, 164.803955078125, 164.658935546875, 164.700927734375, 164.717041015625, 164.716064453125, 164.764892578125
        ]
    },
    {
        algorithm: "Bubble-Sort",
        language: "CPP",
        name: "Von uns",
        unsorted: [6080.862, 6416.302, 6105.886, 6057.252, 6057.735, 6101.918, 6107.643, 6051.204, 6101.088, 6068.778, 6065.198, 6052.586, 6058.02, 6056.221, 6139.648, 6055.641, 6061.542, 6052.118, 6062.956, 6053.407,],
        sorted: [6.321, 6.009, 5.924, 5.933, 5.931, 5.994, 5.948, 5.912, 5.961, 5.935, 5.947, 5.929, 5.927, 5.893, 5.934, 5.923, 5.969, 5.981, 5.934, 5.906],
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
    console.log('plotter-' + languages[i])
    Plotly.newPlot('plotter-' + languages[i], element, layout);
    i++;
});

i = 0;
plotDataSortedLanguage.forEach(element => {
    console.log('plotter-' + languages[i])
    Plotly.newPlot('plotter-sorted-' + languages[i], element, layout);
    i++;
});

i = 0;
plotDataAlgorithm.forEach(element => {
    console.log('plotter-' + algorithms[i])
    Plotly.newPlot('plotter-' + algorithms[i], element, layout);
    i++;
});

i = 0;
plotDataSortedAlgorithm.forEach(element => {
    console.log('plotter-' + algorithms[i])
    Plotly.newPlot('plotter-sorted-' + algorithms[i], element, layout);
    i++;
});

i = 0;
plotDataAlgorithmsBar.forEach(element => {
    Plotly.newPlot('plotter-bar-' + algorithms[i], element, layoutBar);
    i++;
});

i = 0;
plotDataSortedAlgorithmsBar.forEach(element => {
    Plotly.newPlot('plotter-sorted-bar-' + algorithms[i], element, layoutBar);
    i++;
});

i = 0;
plotDataLanguageBar.forEach(element => {
    Plotly.newPlot('plotter-bar-' + languages[i], element, layoutBar);
    i++;
});

i = 0;
plotDataSortedLanguageBar.forEach(element => {
    Plotly.newPlot('plotter-sorted-bar-' + languages[i], element, layoutBar);
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
function calculateMean(data) {
    let sum = 0;
    data.forEach(el => {
        sum += el;
    });
    return sum / data.length;
}
function calculateStandardDeviation(data, mean) {
    let sumOfSquares = 0;
    data.forEach(el => {
        sumOfSquares += Math.pow(el - mean, 2);
    })
    return Math.sqrt(sumOfSquares / (data.length - 1));
}

function calculateMedian(data) {
    data.sort((a, b) => a - b);
    let median;
    if (data.length % 2 == 0) {
        median = (data[data.length / 2] + data[data.length / 2 - 1]) / 2;
    } else {
        median = data[Math.floor(data.length / 2)];
    }
    return median;
}



let j = 0;
// Loop through the options array and create <option> elements
languages.forEach((option) => {
    if (j != 0) {
        document.querySelector("#plotter-" + option).style.display = "none";
        document.querySelector("#plotter-sorted-" + option).style.display = "none";
        document.querySelector("#plotter-bar-" + option).style.display = "none";
        document.querySelector("#plotter-sorted-bar-" + option).style.display = "none";
    } else {
        createTableLanguages();
    }
    j++;
});
j = 0;
algorithms.forEach((option) => {
    if (j != 0) {
        document.querySelector("#plotter-" + option).style.display = "none";
        document.querySelector("#plotter-sorted-" + option).style.display = "none";
        document.querySelector("#plotter-bar-" + option).style.display = "none";
        document.querySelector("#plotter-sorted-bar-" + option).style.display = "none";
    } else {
        createTableAlgorithms();
    }
    j++;
});
