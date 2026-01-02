// Funcftion for Uppercasing the searched Symbol
function Symbol_List_Cleaning(symbol) {
    symbol = symbol.trim().toUpperCase()
    return symbol
}
// ------------------------------ End of Cleaning Function ----------------------------------------------------



// Symbol search for historical data----------------------------------------------------------
let Historical_Search_symbol;
let Historical_Endpoint;
let Searchbutton = document.querySelector("#search-btn")
Searchbutton.addEventListener("click", () => {
    const searchbox = document.querySelector("#symbol-input")
    Historical_Search_symbol = searchbox.value
    let Historical_Cleaned_Symbol = Symbol_List_Cleaning(Historical_Search_symbol);
    Historical_Endpoint = Historical_Cleaned_Symbol;
    console.log("Searching for symbol:", Historical_Endpoint);
    historical_data();  // Call the function here
})

// Fetching Histroical Data ------------------------------------------------------------------

async function historical_data() {
    try {
        console.log("Fetching data for:", Historical_Endpoint);
        const response = await fetch(`http://127.0.0.1:8000/historical/${Historical_Endpoint}`)
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json()
        console.log("Data received:", data)

    } catch(err) {
        console.error("Error fetching data:", err);
    }
}