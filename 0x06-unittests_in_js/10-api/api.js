const express = require('express');

const app = express();
const port = 7865;

app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
});

app.get('/cart/:id', (request, response) => {
  response.send(`Payment methods for cart ${request.params.id}`);
});

app.get('/available_payments', (request, response) => {
    response.json({
        payment_methods: {
            credit_cards: true,
            paypal: false
        }
    });
}
);

app.listen(port, () => {
    console.log("API available on localhost port 7865");
});

module.exports = app;
