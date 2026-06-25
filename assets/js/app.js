document.getElementById('orderForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const submitBtn = document.getElementById('submitBtn');
  submitBtn.innerText = 'Processing...';
  submitBtn.disabled = true;

  const orderData = {
    action: 'createOrder',
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    whatsapp: document.getElementById('whatsapp').value,
    coin: document.getElementById('coin').value,
    network: document.getElementById('network').value,
    amount: document.getElementById('amount').value,
    wallet: document.getElementById('wallet').value
  };

  const result = await executeAPI(orderData);
  
  if(result && result.success) {
    document.querySelector('.glass-card').innerHTML = `
      <div style="text-align:center">
        <h2>Order Request Received!</h2>
        <p>Your Order ID is: <strong class="neon-text">${result.orderId}</strong></p>
        <p>We will contact you on WhatsApp with the quotation shortly.</p>
        <br><a href="track.html" class="btn btn-primary">Track Order</a>
      </div>
    `;
  } else {
    submitBtn.innerText = 'Submit Order Request';
    submitBtn.disabled = false;
  }
});
