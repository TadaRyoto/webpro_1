const showAnswerButton = document.getElementById("show-answer-button");
const answer = document.getElementById("answer");
const explanation = document.getElementById("explanation");

showAnswerButton.onclick = () => {
  answer.style.display = "block";
  explanation.style.display = "block";
  showAnswerButton.style.display = "none";
};
