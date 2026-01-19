from langchain_openai import ChatOpenAI
from langchain_core.prompts import PromptTemplate
from dotenv import load_dotenv
from langchain_core.output_parsers import StrOutputParser
from fastapi import APIRouter

router = APIRouter()
load_dotenv()

model = ChatOpenAI(
    model = "xiaomi/mimo-v2-flash:free",
    temperature = 0.4,
    base_url = "https://openrouter.ai/api/v1",
    default_headers = {
        "HTTP-Referer": "http://localhost",
        "X-Title": "LangChain Learning Project"
    }
)

@router.get("/langchain/stock/{symbol}")
def get_stock_Analysis(symbol: str):
    template = """You are a financial expert. Provide a concise analysis of the stock with the symbol {symbol}. 
    Include recent performance, market trends, and any relevant news that could impact the stock's future performance.
    Keep the response under 180 words."""

    prompt = PromptTemplate(
        input_variables=["symbol"],
        template=template,
    )
    output_parser=StrOutputParser()

    chain = prompt | model | output_parser
    analysis = chain.invoke({"symbol": symbol})
    
    return {"symbol": symbol.upper(), "analysis": analysis}
    

    
