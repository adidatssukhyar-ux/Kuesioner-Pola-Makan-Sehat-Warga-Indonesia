document.getElementById('surveyForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // Hide the form and show thank you message
  this.style.display = 'none';
  document.getElementById('thankYouMessage').style.display = 'block';
});
