# historical.py
import requests
from bs4 import BeautifulSoup
from fastapi import APIRouter
from datetime import datetime
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options

router = APIRouter()

def get_psx_data_with_selenium(symbol: str):
    """Fetch PSX data using Selenium to render JavaScript"""
    try:
        # Setup Chrome options
        chrome_options = Options()
        chrome_options.add_argument("--start-maximized")
        chrome_options.add_argument("--disable-notifications")
        chrome_options.add_argument("--disable-popup-blocking")
        
        # Initialize driver
        driver = webdriver.Chrome(options=chrome_options)
        
        try:
            # Navigate to PSX historical page
            driver.get("https://dps.psx.com.pk/historical")
            
            # Wait for table to load
            wait = WebDriverWait(driver, 10)
            wait.until(EC.presence_of_all_elements_located((By.CSS_SELECTOR, "tbody tr")))
            
            # Get page source after JavaScript rendering
            page_source = driver.page_source
            
            # Parse with BeautifulSoup
            soup = BeautifulSoup(page_source, "html.parser")
            table_body = soup.find("tbody")
            
            if not table_body:
                return None
            
            rows = table_body.find_all("tr")
            
            for row in rows:
                cols = row.find_all("td")
                if len(cols) >= 9:
                    stock_symbol = cols[0].text.strip()
                    if stock_symbol == symbol:
                        try:
                            data = {
                                "date": datetime.now().strftime("%Y-%m-%d"),
                                "symbol": symbol,
                                "ldcp": cols[1].get("data-value"),
                                "open": float(cols[2].get("data-value", 0)),
                                "high": float(cols[3].get("data-value", 0)),
                                "low": float(cols[4].get("data-value", 0)),
                                "close": float(cols[5].get("data-value", 0)),
                                "change": cols[6].get("data-value"),
                                "change_percent": cols[7].get("data-value"),
                                "volume": cols[8].get("data-value"),
                            }
                            return data
                        except (ValueError, AttributeError) as e:
                            return None
            
            return None
            
        finally:
            driver.quit()
            
    except Exception as e:
        print(f"Selenium error: {str(e)}")
        return None

@router.get("/historical/{symbol}")
def get_historical_by_symbol(symbol: str):
    """Fetch historical data for a PSX stock from the website"""
    try:
        symbol = symbol.upper()
                
        # Add delay to avoid overwhelming the server
        time.sleep(1)
        
        # Fetch data using Selenium
        data_item = get_psx_data_with_selenium(symbol)
        
        if not data_item:
            return {"error": f"Symbol {symbol} not found or unable to fetch data"}
        
        response_data = {
            "symbol": symbol,
            "records": 1,
            "data": [data_item]
        }
        
        return response_data
        
    except Exception as e:
        return {"error": f"Error fetching historical data: {str(e)}"}


@router.get("/historical/{symbol}/days/{days}")
def get_historical_by_days(symbol: str, days: int = 365):
    """Fetch historical data (currently returns latest day from PSX)"""
    # Note: PSX website doesn't expose historical data through standard scraping
    # This endpoint returns the latest available data
    return get_historical_by_symbol(symbol)





