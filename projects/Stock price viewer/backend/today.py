# today.py
import requests
from bs4 import BeautifulSoup
from fastapi import APIRouter

router = APIRouter()

BASE_URL = "https://dps.psx.com.pk/company/"

@router.get("/stock/{symbol}")
def get_today_stock(symbol: str):
    try:
        url = BASE_URL + symbol.upper()
        response = requests.get(url, timeout=10)

        soup = BeautifulSoup(response.text, "html.parser")

        price = soup.find("div", class_="quote__close")
        percentage = soup.find("div", class_="change__percent")
        change = soup.find("div", class_="change__value")

        stats = soup.find_all("div", class_="stats_item")
        volume_text = stats[3].text if len(stats) > 3 else "N/A"
        volume = volume_text.replace("Volume", "").strip()

        return {
            "symbol": symbol.upper(),
            "price": price.text.strip() if price else "N/A",
            "percentage": percentage.text.strip() if percentage else "N/A",
            "change": change.text.strip() if change else "N/A",
            "volume": volume
        }

    except Exception as e:
        return {"error": str(e)}
