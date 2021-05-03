import getElements from './utils/getElements'

export default function setupNavigation() {
  const pages = getElements('[data-page]')
  const buttons = getElements('[data-nav]')

  buttons.forEach(button => {
    const buttonName = button.dataset.nav
    button.addEventListener('click', () => {
      pages.forEach(page => {
        const pageName = page.dataset.page
        page.classList.toggle('hidden', pageName !== buttonName)
      })

      console.log(buttonName)
      console.log(button)
      buttons.forEach(button => {
        button.classList.toggle('active', buttonName === button.dataset.nav)
      })
    })
  })
}
