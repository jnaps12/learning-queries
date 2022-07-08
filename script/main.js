let basic = document.querySelector('li#basic');
let intermediary = document.querySelector("li#intermediary");
let hard = document.querySelector('li#hard');

let test = document.querySelector("span.questions-title");

let subTitleQuestions = document.querySelector('p.sub-title-questions');

let basicQuestions = document.querySelector('div.basic');
let intermediaryQuestions = document.querySelector("div.intermediary");
let hardQuestions = document.querySelector('div.hard');


basic.addEventListener('click', basicChanges);
intermediary.addEventListener('click', intermediaryChanges);
hard.addEventListener('click', hardChanges);


function basicChanges(event){
  event.preventDefault();
  subTitleQuestions.textContent = "Básico";
  basic.classList.add('selected');
  intermediaryQuestions.style.display = "none";
  hardQuestions.style.display = "none";
  basicQuestions.style.display = "flex";

  // removingo from otheres
  intermediary.classList.remove("selected");
  hard.classList.remove("selected");

}

function intermediaryChanges(event) {
  event.preventDefault();
  subTitleQuestions.textContent = "Intermediário";
  intermediary.classList.add("selected");
  intermediaryQuestions.style.display = "flex";
  basicQuestions.style.display = "none";
  hardQuestions.style.display = "none";

  // removingo from otheres
  basic.classList.remove("selected");
  hard.classList.remove("selected");
}

function hardChanges(event) {
  event.preventDefault();
  subTitleQuestions.textContent = "Avançado";
  hard.classList.add("selected");
  hardQuestions.style.display = "flex";
  basicQuestions.style.display = "none";
  intermediaryQuestions.style.display = "none";

  // removingo from otheres
  basic.classList.remove("selected");
  intermediary.classList.remove("selected");
}
