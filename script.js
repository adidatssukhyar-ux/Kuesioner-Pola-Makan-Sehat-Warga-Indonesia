const questions = [
  "1. Menurut kamu makanan junk food sehat atau tidak?",
  "2. Seberapa sering kamu mengonsumsi makanan junk food?",
  "3. Berapa kali kamu makan dalam sehari?",
  "4. Apakah kamu sering mengonsumsi soda/minuman berwarna?",
  "5. Apakah kamu sering mengonsumsi sayur sayuran?",
  "6. Sebutkan makanan yang bergizi dan tidak bergizi",
  "7. Menurut kamu makanan bergizi penting atau tidak bagi manusia?",
  "8. Sayur sayuran dan buah buahan apakah termasuk makanan bergizi?",
  "9. Apakah kamu hari ini sudah sarapan?",
  "10. Mengapa kebanyakan orang lebih suka mengonsumsi makanan junk food atau yang mengandung banyak minyak seperti gorengan?"
];

let currentQuestion = 0;
const answers = [];

const emailInput = document.getElementById('email');
const questionContainer = document.getElementById('questionContainer');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const thankYouMessage = document.getElementById('thankYouMessage');
const form = document.getElementById('wizardForm');

function showQuestion(index) {
  questionContainer.innerHTML = `
    <label for="answer">${questions[index]}</label>
    <textarea id="answer" required placeholder="Jawaban kamu..."></textarea>
  `;
}

showQuestion(currentQuestion);

nextBtn.addEventListener('click', function() {
  const answerField = document.getElementById('answer');
  if (!emailInput.value) {
    emailInput.focus();
    return;
  }
  if (!answerField.value) {
    answerField.focus();
    return;
  }
  answers[currentQuestion] = answerField.value;
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion(currentQuestion);
    if (currentQuestion === questions.length - 1) {
      nextBtn.style.display = "none";
      submitBtn.style.display = "inline-block";
    }
  }
});

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const answerField = document.getElementById('answer');
  if (!answerField.value) {
    answerField.focus();
    return;
  }
  answers[currentQuestion] = answerField.value;
  form.style.display = 'none';
  thankYouMessage.style.display = 'block';
  // You can process/email the answers here if you add a backend or service
});
