import setupBookmarks from './setupBookmarks'
import setupNavigation from './setupNavigation'
import setupQuizCards from './setupQuizCards'

console.clear()

setupNavigation()
setupBookmarks()
setupQuizCards()

const form = document.querySelector('[data-js="form"]')
const homePage = document.querySelector('[data-js="home"]')

form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const { question, answer } = form.elements

  const newCard = {
    question: question.value,
    answer: answer.value,
  }

  renderCard(newCard)
  form.reset()
}

function renderCard(card) {
  const { question, answer } = card
  const newCardElement = document.createElement('section')
  newCardElement.classList.add('quiz-card')
  newCardElement.innerHTML = `
    <h2 class="quiz-card__question">${question}</h2>
    <button class="quiz-card__button">Show Answer</button>
    <p class="quiz-card__answer hidden">
        ${answer}
    </p>
    <ul class="quiz-card__tag-list">
        <li>tag</li>
        <li>tag</li>
        <li>tag</li>
        <li>tag</li>
    </ul>
    <div
        role="button"
        class="quiz-card__bookmark"
        aria-label="Add bookmark"
    ></div>
    `
  homePage.prepend(newCardElement)
}
