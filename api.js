// REPLACE WITH YOUR DEPLOYED GOOGLE APPS SCRIPT WEB APP URL
const GAS_URL = 'https://script.google.com/macros/s/AKfycbwKU2oUDtscHr0j6DimvU42bblhu7togbin-71NNBQKf9hwTLJOIEJX9DjGkz23b7o4JQ/exec';

async function executeAPI(payload) {
  try {
    const response = await fetch(GAS_URL, {
      method: 'POST',
      body: JSON.stringify(payload),
      // 'no-cors' is NOT used here because GAS returns JSON. 
      // GAS doPost must be set up properly to accept POST.
      headers: { 'Content-Type': 'text/plain;charset=utf-8' } // text/plain prevents preflight CORS errors in GAS
    });
    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    alert("Connection Error. Please try again.");
    return null;
  }
}