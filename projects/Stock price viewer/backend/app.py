# app.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from today import router as today_router
from historical import router as historical_router
from langchain import router as langchain_router

app = FastAPI(title="PSX Stock API")

# CORS (allow frontend JS)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # for learning
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routes
app.include_router(today_router)
app.include_router(historical_router)
app.include_router(langchain_router)

@app.get("/")
def root():
    return {"message": "PSX API is running"}
