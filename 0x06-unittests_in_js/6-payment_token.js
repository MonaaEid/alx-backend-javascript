function getPaymentTokenFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve
        ({data: 'Successful response from the API' });
    }, 1000);
    });
}

module.exports = getPaymentTokenFromAPI;
