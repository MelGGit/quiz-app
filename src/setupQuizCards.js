import getElement from './utils/getElement'
import getElements from './utils/getElements'

export default function setupQuizCard() {
  const quizCards = getElements('.quiz-card')

  quizCards.forEach(card => {
    const answerButton = getElement('.quiz-card__button', card)
    answerButton.addEventListener('click', () => {
      const answer = getElement('.quiz-card__answer', card)
      answer.classList.toggle('hidden')
    })
  })
}
