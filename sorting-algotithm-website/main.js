const languages = ["Python", "JS", "CPP"];
const algorithms = ["Merge-Sort", "Quick-Sort", "Bubble-Sort"];
const plotterHeight = 300;

let selectedAlgorithm = algorithms[0];
let selectedAlgorithmLanguage = languages[0];

let selectedLanguage = languages[0];
let selectedLanguageAlgorithm = algorithms[0];

// Loop through the options array and create <option> elements
languages.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.text = option;
    document.getElementById("select-languages").add(optionElement);
    let optionElementClone = optionElement.cloneNode(true);
    document.getElementById("select-algorithms-comparisson").add(optionElementClone);
 

    // add plotter div for each language to plotter-language-holder id
    const plotter = document.createElement("div");
    plotter.id = "plotter-" + option;
    plotter.style.height = plotterHeight + "px";
    document.getElementById("plotter-language-holder").appendChild(plotter);
});



// Loop through the options array and create <option> elements
algorithms.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.text = option;
    document.getElementById("select-algorithms").add(optionElement);

    let optionElementClone = optionElement.cloneNode(true);
    document.getElementById("select-languages-comparisson").add(optionElementClone);

    // add plotter div for each language to plotter-language-holder id
    const plotter = document.createElement("div");
    plotter.id = "plotter-" + option;
    plotter.style.height = plotterHeight + "px";
    document.getElementById("plotter-algorithms-holder").appendChild(plotter);
});

//when select option is pressed, show the plotter for that language
document.getElementById("select-algorithms").addEventListener("change", (event) => {
    selectedAlgorithm = event.target.value;
    createTableAlgorithms();
    algorithms.forEach((algorithm) => {
        document.getElementById("plotter-" + algorithm).style.display = "none";
    });
    document.getElementById("plotter-" + selectedAlgorithm).style.display = "block";
});

//when select option is pressed, show the plotter for that language
document.getElementById("select-languages").addEventListener("change", (event) => {
    selectedLanguage = event.target.value;
    createTableLanguages();
    languages.forEach((language) => {
        document.getElementById("plotter-" + language).style.display = "none";
    });
    document.getElementById("plotter-" + selectedLanguage).style.display = "block";
});

document.getElementById("select-algorithms-comparisson").addEventListener("change", (event) => {
    selectedAlgorithmLanguage = event.target.value;
    createTableAlgorithms();
});

document.getElementById("select-languages-comparisson").addEventListener("change", (event) => {
    selectedLanguageAlgorithm = event.target.value;
    createTableLanguages();
});


function createTableAlgorithms(){
    let table = document.getElementById("table-algorithms");
    while(table.rows.length > 1){
        table.deleteRow(1);
    }

    //create adaptedData and put every element in, wehre element.algorithm == selectedAlgorithm
    adaptedData = [];
    data.forEach(element => {
        if(element.algorithm == selectedAlgorithm){
            adaptedData.push(element);
        }
    });

    //sort adaptedData by language, put language with selectedAlgorithmLanguage in the first place
    adaptedData.sort((a, b) => {
        if(a.language == selectedAlgorithmLanguage){
            return -1;
        }else if(b.language == selectedAlgorithmLanguage){
            return 1;
        }else{
            return 0;
        }
    });

    adaptedData.forEach(element => {
        let meanCompare;
        let standardCompare;
        if(element == adaptedData[0]){
            meanCompare = 0;
            standardCompare = 0;
        }else{
            let meanFirstElement = calculateMean(adaptedData[0].y);
            let standardFirstElement = calculateStandardDeviation(adaptedData[0].y, meanFirstElement);

            meanCompare = (calculateMean(element.y) - meanFirstElement) / meanFirstElement * 100;
            standardCompare = (calculateStandardDeviation(element.y, calculateMean(element.y)) - standardFirstElement) / standardFirstElement * 100;
        }

        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        cell1.innerHTML = element.language;

        let mean = calculateMean(element.y);
        if(element.language == selectedAlgorithmLanguage){
            cell2.innerHTML = mean;
        }else{
            cell2.innerHTML = mean + " <span style='color:" + (meanCompare >= 0 ? "red" : "green") + "'>(" + (meanCompare >= 0 ? "+" : "") + meanCompare.toFixed(2) + "%)</span>";
        }

        let standardDeviation = calculateStandardDeviation(element.y, mean);
        if(element.language == selectedAlgorithmLanguage){
            cell3.innerHTML = standardDeviation.toFixed(3);
        }else{
            cell3.innerHTML = standardDeviation.toFixed(3) + " <span style='color:" + (standardCompare >= 0 ? "red" : "green") + "'>(" + (standardCompare >= 0 ? "+" : "") + standardCompare.toFixed(2) + "%)</span>";
        }
        
    });
}
function createTableLanguages(){
    let table = document.getElementById("table-languages");
    while(table.rows.length > 1){
        table.deleteRow(1);
    }

    //create adaptedData and put every element in, wehre element.algorithm == selectedAlgorithm
    adaptedData = [];
    data.forEach(element => {
        if(element.language == selectedLanguage){
            adaptedData.push(element);
        }
    });

    //sort adaptedData by language, put language with selectedAlgorithmLanguage in the first place
    adaptedData.sort((a, b) => {
        if(a.algorithm == selectedLanguageAlgorithm){
            return -1;
        }else if(b.algorithm == selectedLanguageAlgorithm){
            return 1;
        }else{
            return 0;
        }
    });

    adaptedData.forEach(element => {
        let meanCompare;
        let standardCompare;
        if(element == adaptedData[0]){
            meanCompare = 0;
            standardCompare = 0;
        }else{
            let meanFirstElement = calculateMean(adaptedData[0].y);
            let standardFirstElement = calculateStandardDeviation(adaptedData[0].y, meanFirstElement);

            meanCompare = (calculateMean(element.y) - meanFirstElement) / meanFirstElement * 100;
            standardCompare = (calculateStandardDeviation(element.y, calculateMean(element.y)) - standardFirstElement) / standardFirstElement * 100;
        }

        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        cell1.innerHTML = element.algorithm;

        let mean = calculateMean(element.y);
        if(element.algorithm == selectedLanguageAlgorithm){
            cell2.innerHTML = mean;
        }else{
            cell2.innerHTML = mean + " <span style='color:" + (meanCompare >= 0 ? "red" : "green") + "'>(" + (meanCompare >= 0 ? "+" : "") + meanCompare.toFixed(2) + "%)</span>";
        }

        let standardDeviation = calculateStandardDeviation(element.y, mean);
        if(element.algorithm == selectedLanguageAlgorithm){
            cell3.innerHTML = standardDeviation.toFixed(3);
        }else{
            cell3.innerHTML = standardDeviation.toFixed(3) + " <span style='color:" + (standardCompare >= 0 ? "red" : "green") + "'>(" + (standardCompare >= 0 ? "+" : "") + standardCompare.toFixed(2) + "%)</span>";
        }
        
    });
}

