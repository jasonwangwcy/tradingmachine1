from fastapi import FastAPI
import ccxt
import yfinance as yf

app = FastAPI()

# Example to get crypto data from Binance
@app.get("/crypto/{symbol}")
def get_crypto_data(symbol: str):
    exchange = ccxt.binance()
    ticker = exchange.fetch_ticker(symbol)
    return ticker

# Example to get stock data from yfinance
@app.get("/stock/{symbol}")
def get_stock_data(symbol: str):
    stock = yf.Ticker(symbol)
    hist = stock.history(period="1mo")
    return hist.to_dict()