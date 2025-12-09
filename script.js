// Navbar scroll effect


  // ScrollBrush movement


// Scroll To Top button click

// Mobile menu toggle



// Contact form demo
function submitForm(e){
  e.preventDefault();
  const msg = document.getElementById('formMsg');
  msg.innerText = 'تم إرسال رسالتك بنجاح!';
  document.getElementById('contactForm').reset();
}
function resetForm(){
  document.getElementById('contactForm').reset();
  document.getElementById('formMsg').innerText = '';
}

// Initialize AOS animations
AOS.init({duration:1000, once:true});