const ConvFees=99;
let bagItemObject=[];
onLoad();

function onLoad(){
  loadBagItems();
  displayBagItems();
  displayBagSummary();
  
}

function loadBagItems(){
  console.log(bagItems);

  bagItemObject=bagItems.map(itemId=>{

    for(let i=0;i<items.length;i++){
      if(itemId==items[i].id){
        return items[i];
      }
    }
  }
  )
}

function displayBagItems(){
  let containerElement=document.querySelector('.bag-items-container');
  let innerHTML='';
  bagItemObject.forEach(bagItem => {
    innerHTML+=genrateItemHTML(bagItem)
    
  });
  containerElement.innerHTML=innerHTML;
}

function removeFromBag(itemId){
  bagItems=bagItems.filter(bagItemId=>bagItemId!=itemId);
  localStorage.setItem('bagItems',JSON.stringify(bagItems));
  loadBagItems();
  displayBagItems();
  displayBagItem();
  displayBagSummary();

}




function genrateItemHTML(item){
  return `<div class="bag-item-container">
            <div class="item-left-part">
              <img class="bag-item-img" src="../${item.image}" />
            </div>
            <div class="item-right-part">
              <div class="company">${item.company}</div>
              <div class="item-name">
                ${item.item_name}
              </div>
              <div class="price-container">
                <span class="current-price">${item.current_price}</span>
                <span class="original-price">${item.original_price}</span>
                <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
              </div>
              <div class="return-period">
                <span class="return-period-days">${item.return_period} days</span> return available
              </div>
              <div class="delivery-details">
                Delivery by
                <span class="delivery-details-days">${item.delivery_date}</span>
              </div>
            </div>

            <div class="remove-from-cart" onClick="removeFromBag(${item.id})">X</div>
            </div>`;
}


function displayBagSummary(){
  let bagSummaryElement=document.querySelector('.bag-summary');
  let totalItems=bagItemObject.length;
  let totalMrp=0;
  let totaldiscount=0;
  

  bagItemObject.forEach(bagItem=>{
    totalMrp+=bagItem.original_price;
    totaldiscount+=bagItem.original_price-bagItem.current_price;

  })
  let finalPayment=totalMrp-totaldiscount ;
  let ConviFees;
  if(bagItemObject.length==0){
    finalPayment=0;
    ConviFees=0;
  }else{
    finalPayment+=ConvFees;
    ConviFees=ConvFees;
  }
          bagSummaryElement.innerHTML=`<div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${totalItems} Items)</div>
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">Rs${totalMrp}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Discount on MRP</span>
              <span class="price-item-value priceDetail-base-discount"
                >-Rs${totaldiscount}</span
              >
            </div>
            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value">Rs ${ConviFees}</span>
            </div>
            <hr />
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">Rs ${finalPayment}</span>
            </div>
          </div>
          <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
          </button>`;
}