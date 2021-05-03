import getElements from './utils/getElements'
import getElement from './utils/getElement'

export default function setupNavigation() {
  const pages = getElements('[data-page]')
  const buttons = getElements('[data-nav]')
  const header = getElement('[data-header]')

  buttons.forEach(button => {
    const buttonName = button.dataset.nav
    const headerText = button.dataset.headerText

    button.addEventListener('click', () => {
      changePage(buttonName)
      toggleButton(buttonName)
      updateHeader(headerText)
    })
  })

  function changePage(buttonName) {
    pages.forEach(page => {
      const pageName = page.dataset.page
      page.classList.toggle('hidden', pageName !== buttonName)
    })
  }

  function toggleButton(buttonName) {
    buttons.forEach(button => {
      button.classList.toggle('active', buttonName === button.dataset.nav)
    })
  }

  function updateHeader(headerText) {
    header.innerHTML = headerText
  }
}
