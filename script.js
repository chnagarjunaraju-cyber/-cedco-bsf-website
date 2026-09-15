const menuToggle=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('.nav-links');
menuToggle?.addEventListener('click',()=>navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
function submitForm(e){
  e.preventDefault();
  document.getElementById('form-message').textContent='Thank you. This demo form is ready to be connected to an official email or backend.';
  e.target.reset();
  return false;
}
