function getPaymentTokenFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve
        ('patoken');
    }, 1000);
    });
}

module.exports = getPaymentTokenFromAPI;
