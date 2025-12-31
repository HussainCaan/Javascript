from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
from bs4 import BeautifulSoup

app = FastAPI()

# Allow frontend to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # for learning (later restrict)
    allow_methods=["*"],
    allow_headers=["*"],
)

BASE_URL = "https://dps.psx.com.pk/company/"

@app.get("/stock/{symbol}")
def get_stock(symbol: str):
    try:
        url = BASE_URL + symbol
        response = requests.get(url, timeout=10)
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Find current price
        price_element = soup.find("div", class_="quote__close")
        price = price_element.text.strip() if price_element else "N/A"
        
        # Find percentage change
        percentage_element = soup.find("div", class_="change__percent")
        percentage = percentage_element.text.strip() if percentage_element else "N/A"

        # Find change value
        change_element = soup.find("div", class_="change__value")
        change = change_element.text.strip() if change_element else "N/A"

        # Find volume - get all divs with stats__value class
        volume_elements = soup.find_all("div", class_="stats_item")
        volume_text = volume_elements[3].text.strip() if len(volume_elements) > 2 else "N/A"
        volume = volume_text.replace("Volume", "").strip() if "Volume" in volume_text else "N/A"
        return {
            "symbol": symbol,
            "price": price,
            "percentage": percentage,
            "change": change,
            "volume": volume
        }
    except Exception as e:
        print(f"Error: {e}")
        return {
            "symbol": symbol,
            "price": "Error",
            "percentage": "N/A",
            "change": "N/A",
            "volume": "N/A",
            "error": str(e)
        }
