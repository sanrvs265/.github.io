const cartCountEl = document.getElementById('cart-count');
let cart = JSON.parse(localStorage.getItem('cart')||'{}');
updateCartCount();

document.querySelectorAll('.view-details').forEach(btn=>{
  btn.onclick=()=>openModal(btn.closest('.product'));
});
document.querySelector('.modal .close').onclick=()=>closeModal();
document.getElementById('add-to-cart').onclick=()=>{
  const id = modal.dataset.id;
  cart[id] = (cart[id] || 0) + 1;
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert(`Added ${modalName.textContent} to cart.`);
};

function updateCartCount(){
  const total = Object.values(cart).reduce((a,b)=>a+b,0);
  cartCountEl.textContent = total;
}

const modal = document.getElementById('modal');
const modalName=document.getElementById('modal-name');
function openModal(prodEl){
  modal.dataset.id=prodEl.dataset.id;
  modalName.textContent=prodEl.dataset.name;
  modalDesc=document.getElementById('modal-desc');
  modalDesc.textContent=prodEl.querySelector('p').textContent;
  document.getElementById('modal-price').textContent='₹'+prodEl.dataset.price;
  document.getElementById('modal-img').src=prodEl.querySelector('img').src;
  modal.style.display='block';
}
function closeModal(){modal.style.display='none'}

// contact form
document.getElementById('contact-form').onsubmit = e=>{
  e.preventDefault();
  alert('Thank you! We received your message.');
  e.target.reset();
};
