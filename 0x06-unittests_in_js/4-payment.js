function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const total = calculateNumber('SUM', totalAmount, totalShipping);
    console.log('The total is: ' + total);
    return total;
  }
  