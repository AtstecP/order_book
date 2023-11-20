from pybit.unified_trading import WebSocket
from time import sleep
import requests
# ws = WebSocket(
#     testnet=True,
#     channel_type="linear",
# )
# def handle_message(message):
#     print(len(message['data']['b']))
# ws.orderbook_stream(
#     depth=500,
#     symbol="BTCUSDT",
#     callback=handle_message
# )
# while True:
#     sleep(1)
response = requests.get('https://api.iex.cloud/v1/data/CORE/IEX_DEEP/AAPL?limit=500&token=pk_24be269c2cdf413ea10398387bbbc00f')
#response = requests.get('https://api.iex.cloud/v1/data/CORE/REF_DATA_IEX_SYMBOLS?token=pk_24be269c2cdf413ea10398387bbbc00f')

print(response.text)
with open("D:/PycharmProjects/stock_django/test/data.json", "w") as f:
    f.write(response.text)