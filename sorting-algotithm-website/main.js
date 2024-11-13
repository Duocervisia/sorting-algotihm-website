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

    const plotterSorted = document.createElement("div");
    plotterSorted.id = "plotter-sorted-" + option;
    plotterSorted.style.height = plotterHeight + "px";
    document.getElementById("plotter-language-sorted-holder").appendChild(plotterSorted);

    const plotterBar = document.createElement("div");
    plotterBar.id = "plotter-bar-" + option;
    plotterBar.style.height = plotterHeight + "px";
    document.getElementById("plotter-language-bar-holder").appendChild(plotterBar);

    const plotterSortedBar = document.createElement("div");
    plotterSortedBar.id = "plotter-sorted-bar-" + option;
    plotterSortedBar.style.height = plotterHeight + "px";
    document.getElementById("plotter-language-sorted-bar-holder").appendChild(plotterSortedBar);
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

    const plotterSorted = document.createElement("div");
    plotterSorted.id = "plotter-sorted-" + option;
    plotterSorted.style.height = plotterHeight + "px";
    document.getElementById("plotter-algorithms-sorted-holder").appendChild(plotterSorted);

    const plotterBar = document.createElement("div");
    plotterBar.id = "plotter-bar-" + option;
    plotterBar.style.height = plotterHeight + "px";
    document.getElementById("plotter-algorithms-bar-holder").appendChild(plotterBar);

    const plotterSortedBar = document.createElement("div");
    plotterSortedBar.id = "plotter-sorted-bar-" + option;
    plotterSortedBar.style.height = plotterHeight + "px";
    document.getElementById("plotter-algorithms-sorted-bar-holder").appendChild(plotterSortedBar);

});

//when select option is pressed, show the plotter for that language
document.getElementById("select-algorithms").addEventListener("change", (event) => {
    selectedAlgorithm = event.target.value;
    createTableAlgorithms();
    algorithms.forEach((algorithm) => {
        document.getElementById("plotter-" + algorithm).style.display = "none";
        document.getElementById("plotter-sorted-" + algorithm).style.display = "none";
        document.getElementById("plotter-bar-" + algorithm).style.display = "none";
        document.getElementById("plotter-sorted-bar-" + algorithm).style.display = "none";

    });
    document.getElementById("plotter-" + selectedAlgorithm).style.display = "block";
    document.getElementById("plotter-sorted-" + selectedAlgorithm).style.display = "block";
    document.getElementById("plotter-bar-" + selectedAlgorithm).style.display = "block";
    document.getElementById("plotter-sorted-bar-" + selectedAlgorithm).style.display = "block";

});

//when select option is pressed, show the plotter for that language
document.getElementById("select-languages").addEventListener("change", (event) => {
    selectedLanguage = event.target.value;
    createTableLanguages();
    languages.forEach((language) => {
        document.getElementById("plotter-" + language).style.display = "none";
        document.getElementById("plotter-sorted-" + language).style.display = "none";
        document.getElementById("plotter-bar-" + language).style.display = "none";
        document.getElementById("plotter-sorted-bar-" + language).style.display = "none";
    });
    document.getElementById("plotter-" + selectedLanguage).style.display = "block";
    document.getElementById("plotter-sorted-" + selectedLanguage).style.display = "block";
    document.getElementById("plotter-bar-" + selectedLanguage).style.display = "block";
    document.getElementById("plotter-sorted-bar-" + selectedLanguage).style.display = "block";
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
    let adaptedData = [];
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
        let meanSortedCompare;
        let standardSortedCompare;
        let medianCompare;
        let medianSortedCompare;
        if(element == adaptedData[0]){
            meanCompare = 0;
            standardCompare = 0;
            meanSortedCompare = 0;
            standardSortedCompare = 0;
            medianCompare = 0;
            medianSortedCompare = 0;
        }else{
            let meanFirstElement = calculateMean(adaptedData[0].unsorted);
            let standardFirstElement = calculateStandardDeviation(adaptedData[0].unsorted, meanFirstElement);

            let meanSortedFirstElement = calculateMean(adaptedData[0].sorted);
            let standardSortedFirstElement = calculateStandardDeviation(adaptedData[0].sorted, meanSortedFirstElement);

            let medianFirstElement = calculateMedian(adaptedData[0].unsorted);
            let medianSortedFirstElement = calculateMedian(adaptedData[0].sorted);

            meanCompare = (calculateMean(element.unsorted) - meanFirstElement) / meanFirstElement * 100;
            standardCompare = (calculateStandardDeviation(element.unsorted, calculateMean(element.unsorted)) - standardFirstElement) / standardFirstElement * 100;
            
            meanSortedCompare = (calculateMean(element.sorted) - meanSortedFirstElement) / meanSortedFirstElement * 100;
            standardSortedCompare = (calculateStandardDeviation(element.sorted, calculateMean(element.sorted)) - standardSortedFirstElement) / standardSortedFirstElement * 100;

            medianCompare = (calculateMedian(element.unsorted) - medianFirstElement) / medianFirstElement * 100;
            medianSortedCompare = (calculateMedian(element.sorted) - medianSortedFirstElement) / medianSortedFirstElement * 100;
        }


        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
        let cell7 = row.insertCell(6);
        let cell8 = row.insertCell(7);

        cell1.innerHTML = element.name;

        cell2.innerHTML = element.language;

        let mean = calculateMean(element.unsorted);
        if(element.language == selectedAlgorithmLanguage){
            cell3.innerHTML = mean;
        }else{
            cell3.innerHTML = mean + " <span style='color:" + (meanCompare >= 0 ? "red" : "green") + "'>(" + (meanCompare >= 0 ? "+" : "") + meanCompare.toFixed(2) + "%)</span>";
        }

        let median = calculateMedian(element.unsorted);
        if(element.language == selectedAlgorithmLanguage){
            cell4.innerHTML = median;
        }else{
            cell4.innerHTML = median + " <span style='color:" + (medianCompare >= 0 ? "red" : "green") + "'>(" + (medianCompare >= 0 ? "+" : "") + medianCompare.toFixed(2) + "%)</span>";
        }

        let standardDeviation = calculateStandardDeviation(element.unsorted, mean);
        if(element.language == selectedAlgorithmLanguage){
            cell5.innerHTML = standardDeviation.toFixed(3);
        }else{
            cell5.innerHTML = standardDeviation.toFixed(3) + " <span style='color:" + (standardCompare >= 0 ? "red" : "green") + "'>(" + (standardCompare >= 0 ? "+" : "") + standardCompare.toFixed(2) + "%)</span>";
        }

        mean = calculateMean(element.sorted);
        if(element.language == selectedAlgorithmLanguage){
            cell6.innerHTML = mean;
        }else{
            cell6.innerHTML = mean + " <span style='color:" + (meanSortedCompare >= 0 ? "red" : "green") + "'>(" + (meanSortedCompare >= 0 ? "+" : "") + meanSortedCompare.toFixed(2) + "%)</span>";
        }

        mean = calculateMedian(element.sorted);
        if(element.language == selectedAlgorithmLanguage){
            cell7.innerHTML = mean;
        }else{
            cell7.innerHTML = mean + " <span style='color:" + (medianSortedCompare >= 0 ? "red" : "green") + "'>(" + (medianSortedCompare >= 0 ? "+" : "") + medianSortedCompare.toFixed(2) + "%)</span>";
        }

        standardDeviation = calculateStandardDeviation(element.sorted, mean);
        if(element.language == selectedAlgorithmLanguage){
            cell8.innerHTML = standardDeviation.toFixed(3);
        }else{
            cell8.innerHTML = standardDeviation.toFixed(3) + " <span style='color:" + (standardSortedCompare >= 0 ? "red" : "green") + "'>(" + (standardSortedCompare >= 0 ? "+" : "") + standardSortedCompare.toFixed(2) + "%)</span>";
        }
        
    });
}
function createTableLanguages(){
    let table = document.getElementById("table-languages");
    while(table.rows.length > 1){
        table.deleteRow(1);
    }

    //create adaptedData and put every element in, wehre element.algorithm == selectedAlgorithm
    let adaptedData = [];
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
        let meanSortedCompare;
        let standardSortedCompare;
        let medianCompare;
        let medianSortedCompare;

        if(element == adaptedData[0]){
            meanCompare = 0;
            standardCompare = 0;
            meanSortedCompare = 0;
            standardSortedCompare = 0;
            medianCompare = 0;
            medianSortedCompare = 0;
        }else{
            let meanFirstElement = calculateMean(adaptedData[0].unsorted);
            let standardFirstElement = calculateStandardDeviation(adaptedData[0].unsorted, meanFirstElement);
            let meanSortedFirstElement = calculateMean(adaptedData[0].sorted);
            let standardSortedFirstElement = calculateStandardDeviation(adaptedData[0].sorted, meanSortedFirstElement);
            let medianFirstElement = calculateMedian(adaptedData[0].unsorted);
            let medianSortedFirstElement = calculateMedian(adaptedData[0].sorted);

            meanCompare = (calculateMean(element.unsorted) - meanFirstElement) / meanFirstElement * 100;
            standardCompare = (calculateStandardDeviation(element.unsorted, calculateMean(element.unsorted)) - standardFirstElement) / standardFirstElement * 100;
            meanSortedCompare = (calculateMean(element.sorted) - meanSortedFirstElement) / meanSortedFirstElement * 100;
            standardSortedCompare = (calculateStandardDeviation(element.sorted, calculateMean(element.sorted)) - standardSortedFirstElement) / standardSortedFirstElement * 100;
            medianCompare = (calculateMedian(element.unsorted) - medianFirstElement) / medianFirstElement * 100;
            medianSortedCompare = (calculateMedian(element.sorted) - medianSortedFirstElement) / medianSortedFirstElement * 100;
        }

        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
        let cell7 = row.insertCell(6);
        let cell8 = row.insertCell(7);

        cell1.innerHTML = element.name;
        cell2.innerHTML = element.algorithm;

        let mean = calculateMean(element.unsorted);
        if(element.algorithm == selectedLanguageAlgorithm){
            cell3.innerHTML = mean;
        }else{
            cell3.innerHTML = mean + " <span style='color:" + (meanCompare >= 0 ? "red" : "green") + "'>(" + (meanCompare >= 0 ? "+" : "") + meanCompare.toFixed(2) + "%)</span>";
        }

        let median = calculateMedian(element.unsorted);
        if(element.algorithm == selectedLanguageAlgorithm){
            cell4.innerHTML = median;
        }else{
            cell4.innerHTML = median + " <span style='color:" + (medianCompare >= 0 ? "red" : "green") + "'>(" + (medianCompare >= 0 ? "+" : "") + medianCompare.toFixed(2) + "%)</span>";
        }

        let standardDeviation = calculateStandardDeviation(element.unsorted, mean);
        if(element.algorithm == selectedLanguageAlgorithm){
            cell5.innerHTML = standardDeviation.toFixed(3);
        }else{
            cell5.innerHTML = standardDeviation.toFixed(3) + " <span style='color:" + (standardCompare >= 0 ? "red" : "green") + "'>(" + (standardCompare >= 0 ? "+" : "") + standardCompare.toFixed(2) + "%)</span>";
        }

        mean = calculateMean(element.sorted);
        if(element.algorithm == selectedLanguageAlgorithm){
            cell6.innerHTML = mean;
        }else{
            cell6.innerHTML = mean + " <span style='color:" + (meanSortedCompare >= 0 ? "red" : "green") + "'>(" + (meanSortedCompare >= 0 ? "+" : "") + meanSortedCompare.toFixed(2) + "%)</span>";
        }

        median = calculateMedian(element.sorted);
        if(element.algorithm == selectedLanguageAlgorithm){
            cell7.innerHTML = median;
        }else{
            cell7.innerHTML = median + " <span style='color:" + (medianSortedCompare >= 0 ? "red" : "green") + "'>(" + (medianSortedCompare >= 0 ? "+" : "") + medianSortedCompare.toFixed(2) + "%)</span>";
        }

        standardDeviation = calculateStandardDeviation(element.sorted, mean);
        if(element.algorithm == selectedLanguageAlgorithm){
            cell8.innerHTML = standardDeviation.toFixed(3);
        }else{
            cell8.innerHTML = standardDeviation.toFixed(3) + " <span style='color:" + (standardSortedCompare >= 0 ? "red" : "green") + "'>(" + (standardSortedCompare >= 0 ? "+" : "") + standardSortedCompare.toFixed(2) + "%)</span>";
        }
        
    });
}

