import setupBookmarks from './setupBookmarks'
import setupNavigation from './setupNavigation'
import setupQuizCards from './setupQuizCards'

console.clear()

setupNavigation()
setupBookmarks()
setupQuizCards()
darkMode()

const form = document.querySelector('[data-js="form"]')
const homePage = document.querySelector('[data-js="home"]')

form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const { question, answer, tags } = form.elements

  const newCard = {
    question: question.value,
    answer: answer.value,
    tags: tags.value.split(','),
  }

  renderCard(newCard)
  form.reset()
}

function renderCard(card) {
  const { question, answer, tags } = card
  const newCardElement = document.createElement('section')
  newCardElement.classList.add('quiz-card')
  newCardElement.innerHTML = `
    <h2 class="quiz-card__question">${question}</h2>
    <button class="quiz-card__button">Show Answer</button>
    <p class="quiz-card__answer hidden">
        ${answer}
    </p>
    <ul class="quiz-card__tag-list">
    </ul>
    <div
        role="button"
        class="quiz-card__bookmark"
        aria-label="Add bookmark"
    ></div>
    `
  homePage.prepend(newCardElement)
  const tagList = newCardElement.querySelector('ul')
  createTagList(tagList, tags)
  alert('new card created')
  setupBookmarks()
  setupQuizCards()
}

function createTagList(tagList, tags) {
  tags.forEach(tag => {
    const tagEl = document.createElement('li')
    tagEl.innerText = tag
    tagList.append(tagEl)
  })
}

function darkMode() {
  const button = document.querySelector('[data-js="darkmode"]')
  button.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
  })
}
