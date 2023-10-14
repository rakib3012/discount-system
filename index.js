

const getOfferButton = document.getElementById('btn');

getOfferButton.addEventListener('click', function(){
    const getOfferSection = document.getElementById('get-offer');
    
    const newElement = document.createElement('h5');

    console.log(newElement)

    newElement.innerText = 'congratulation!! You got 20% Discount!';
    getOfferSection.appendChild(newElement);
 
    newElement.style.paddingTop = '10px'


})


// function redeemCoupon(id){
//     const newElement = document.createElement('h5');
//     newElement.innerText = 'congratulation!! You got 20% Discount!';
//     const redeemCouponSection = document.getElementById(id);
//     redeemCouponSection.appendChild(newElement);
// }

const redeemButton = document.getElementById('btn2');
redeemButton.addEventListener('click', function(){
   const inputField = document.getElementById('input');
   const inputFieldValue = inputField.value ;
   inputField.value = '';
   if(inputFieldValue==='arman2m0'){
    const newElement = document.createElement('h5');
    newElement.innerText = 'congratulation!! You got 20% Discount!';

    newElement.style.paddingTop = '10px';

    const redeemCouponSection = document.getElementById('redeem-coupon');
    redeemCouponSection.appendChild(newElement);
 
   }
   else if(inputFieldValue==='rakib5n0'){
    // redeemCoupon('redeem-coupon')
     const newElement = document.createElement('h5');
     newElement.innerText = 'congratulation!! You got 10% Discount!';

    newElement.style.paddingTop = '10px';

     const redeemCouponSection = document.getElementById('redeem-coupon');
     redeemCouponSection.appendChild(newElement);
   }
   else{
    alert('Enter Correct Code')
   }
})