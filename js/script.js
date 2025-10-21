document.addEventListener("DOMContentLoaded",()=>{
const last=document.getElementById("last-updated"); if(last) last.textContent=new Date().toLocaleDateString();
let count=0; const cart=document.getElementById("cart-count");
document.querySelectorAll("[data-add-to-cart]").forEach(b=>b.addEventListener("click",()=>{count++; if(cart) cart.textContent=String(count); alert("Added to cart (prototype).");}));
});