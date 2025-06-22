let bagItems;

onLoad();

function onLoad(){
  let bagItemsStr=localStorage.getItem('bagItems');
  bagItems=bagItemsStr ?JSON.parse(bagItemsStr):[];
  displayItemOnHomePage();
  displayBagItem();
}


function addToBag(itemId){
  bagItems.push(itemId);
  localStorage.setItem('bagItems',JSON.stringify(bagItems));
  displayBagItem();
}


function displayBagItem() {
  const bagItemcountElement = document.querySelector('.bag-item-count');
  
  if (bagItems.length > 0) {
    bagItemcountElement.style.visibility = 'visible';
    bagItemcountElement.innerHTML = bagItems.length;
  } else {
    bagItemcountElement.style.visibility = 'hidden';
  }
}
function displayItemOnHomePage(){
let itemsContainerElements=document.querySelector('.items-container');
if(!itemsContainerElements){
  return;
}
let innerHTML='';

items.forEach(item=>{
  innerHTML+=`<div class="item-container">
          <img class="item-image" src="${item.image}" alt="item image" />
          <div class="rating">${item.rating.stars} ⭐| ${item.rating.count} </div>
          <div class="company-name">${item.company}on</div>
          <div class="item-name">${item.item_name}</div>
          <div class="price">
            <span class="current-price">Rs${item.current_price}</span>
            <span class="original-price">Rs${item.original_price}</span>
            <spam class="discount">(${item.discount_percentage}% OFF)</spam>
          </div>
          <button class="btn-add-bag" onClick="addToBag(${item.id})">Add to Bag</button>
        </div>
`;

})


itemsContainerElements.innerHTML= innerHTML;
}

