const iPhonePrice = parseInt(document.getElementById("iPhonePrice").innerText);
const iPhoneCoverPrice = parseInt(document.getElementById("iPhoneCoverPrice").innerText);


// IPhone Event Listener plus
document.getElementById("plusBtn").addEventListener('click', function () {
   getTotalPurchaseAmount(iPhonePrice, "iPhonePrice", "totalPurchaseIPhone", 1);
});

// IPhone Event Listener minus
document.getElementById("minusBtn").addEventListener('click', function () {
   getTotalPurchaseAmount(iPhonePrice, "iPhonePrice", "totalPurchaseIPhone", -1);
});


// IPhone Cover Event Listener plus
document.getElementById("plusBtnForCover").addEventListener('click', function () {
   getTotalPurchaseAmount(iPhoneCoverPrice, "iPhoneCoverPrice", "totalPurchaseIPhoneCover", 1);
});

// IPhone Cover Event Listener minus
document.getElementById("minusBtnForCover").addEventListener('click', function () {
   getTotalPurchaseAmount(iPhoneCoverPrice, "iPhoneCoverPrice", "totalPurchaseIPhoneCover", -1);
});


// function start here
function getTotalPurchaseAmount(price, priceSpan, id, plusminus) {
   var totalPurchaseIPhone = parseInt(document.getElementById(id).value);
   totalPurchaseIPhone = totalPurchaseIPhone + plusminus;

   if (totalPurchaseIPhone > 0) {
      document.getElementById(id).value = totalPurchaseIPhone;
      totalPurchaseIPhone = totalPurchaseIPhone * price;
      document.getElementById(priceSpan).innerText = totalPurchaseIPhone;
   } else {
      document.getElementById(priceSpan).innerText = price;
      alert("Cart item can't be 0 or negative");
   }

   var subTotal = parseInt(document.getElementById("iPhonePrice").innerText);
   subTotal = subTotal + parseInt(document.getElementById("iPhoneCoverPrice").innerText);
   document.getElementById("subTotal").innerText = formatter.format(subTotal);
   document.getElementById("total").innerText = formatter.format(subTotal);
   document.getElementById("subTotal$").style.display="none";
   document.getElementById("total$").style.display="none";
}

const formatter = new Intl.NumberFormat('en-US', {
   style: 'currency',
   currency: 'USD',
   minimumFractionDigits: 2
})