document.getElementById('vibeForm').addEventListener('submit', function(e) {
  // Prevent default form submission for demo
  e.preventDefault();
  // Hide the form and show thank you message
  this.style.display = 'none';
  document.getElementById('thankYouMessage').style.display = 'block';
});
