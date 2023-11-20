const { WebsocketClient } = require('bybit-api');

const API_KEY = 'xxx';
const PRIVATE_KEY = 'yyy';

const wsConfig = {
  key: 'foA1iwK0Pw4o4xTP0L',
  secret: 'uphkGzGcAOJch5OswabVFiCUBGq2I2GC45Tj',
  market: 'v5',
};

const ws = new WebsocketClient(wsConfig);
ws.subscribeV5(['orderbook.50.BTCUSDT', 'orderbook.50.ETHUSDT'], 'linear');


// Listen to events coming from websockets. This is the primary data source
ws.on('update', (data) => {
  console.log('update', data);
});

// Optional: Listen to websocket connection open event (automatic after subscribing to one or more topics)
ws.on('open', ({ wsKey, event }) => {
  console.log('connection open for websocket with ID: ' + wsKey);
});

// Optional: Listen to responses to websocket queries (e.g. the response after subscribing to a topic)
ws.on('response', (response) => {
  console.log('response', response);
});

// Optional: Listen to connection close event. Unexpected connection closes are automatically reconnected.
ws.on('close', () => {
  console.log('connection closed');
});

// Optional: Listen to raw error events. Recommended.
ws.on('error', (err) => {
  console.error('error', err);
});
