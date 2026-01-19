let BASE_URL = "https://dps.psx.com.pk/company/" // BaseURL for fetching data
let Endpoint; // API endpoint (i-e symbol of stock)


let symbolsList; // For storing Symbols Name which is fetch function getting from csv;
// Complete function for getting symbols from CSV file
fetch("psx_symbols.csv")
    .then(response => response.text())
    .then(csvText => {
        const rows = csvText.trim().split("\n");
        let symbolIndex = 0;
        symbolsList = rows.slice(1).map(row => {
            const columns = row.split(",");
            return columns[symbolIndex];
        });
    });
// -----------------------------  Fetch Function Ending -------------------------------------------------------

// Funcftion for Uppercasing the searched Symbol
function Symbol_List_Cleaning(symbol) {
    symbol = symbol.trim().toUpperCase()
    return symbol
}
// ------------------------------ End of Cleaning Function ----------------------------------------------------


// For taking the Search Input value then cleaning it and then Searching it in SymbolsList ------------------
let SearchedSymbol;
let EnterButton = document.querySelector(".enter-btn")
EnterButton.addEventListener("click", () => {
    const searchbox = document.querySelector("#search-input")
    SearchedSymbol = searchbox.value
    CleanedSearchSymbol = Symbol_List_Cleaning(SearchedSymbol);
    Endpoint = CleanedSearchSymbol;
    Symbol_Search_In_CSV(CleanedSearchSymbol);
})
// ------------------------------ End of Section ----------------------------------------------------


// Symbol Searching In CSV if found "symbolCheck" variable will become true ---------------------------------------------------------------------------------
let symbolCheck = false;
const Symbol_Search_In_CSV = (Symbol) => {
    for (const element of symbolsList) {
        if (element === Symbol) {
            console.log("Symbol found\n");
            symbolCheck = true;
            fetchStock();
            fetchAnalysis(Symbol);
            return;
        }
        else {
            console.log("Symbol not found\n")
        }
    }
}
// ------------------------------ End of Search Section ----------------------------------------------------

// PSX Stocks Data Fetching Using API
async function fetchStock() {

    try {
        const response = await fetch(
            `http://127.0.0.1:8000/stock/${Endpoint}` // Sending request to backend
        );

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        // console.log(data);
        document.querySelector("#stock-symbol").textContent = CleanedSearchSymbol;
        document.querySelector("#stock-name").textContent = `Searched Stock`;
        document.querySelector("#stock-price").textContent = data.price;
        document.querySelector("#stock-change").textContent = data.change;
        document.querySelector("#stock-change-percent").textContent = data.percentage;
        document.querySelector("#stock-volume").textContent = data.volume;

    } catch (err) {
        console.error(err);
    }
}
// End of latest data/ today data fetching ---------------------------------------------------
async function fetchAnalysis(symbol){
    // Show loader, hide content
    document.querySelector(".analysis-loader").style.display = 'block';
    document.querySelector(".analysis-content").style.display = 'none';
    
    try{
        const response = await fetch(
            `http://127.0.0.1:8000/langchain/stock/${symbol}`
        );
        if (!response.ok){
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log(data)
        const AnalysisText = data.analysis;
        
        document.querySelector(".analysis-loader").style.display = 'none';
        document.querySelector(".analysis-content").style.display = 'block';
        document.querySelector("#analysis-text").textContent = AnalysisText;
        
    }
    catch(err){
        console.error(err);
        document.querySelector(".analysis-loader").style.display = 'none';
        document.querySelector(".analysis-content").style.display = 'block';
        document.querySelector("#analysis-text").textContent = "Failed to load analysis. Please try again.";
    }
}
