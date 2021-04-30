import getElement from './utils/getElement'

export default function setupNavigation() {
  const pageHome = getElement('.page-home')
  const pageBookmark = getElement('.page-bookmark')
  const pageCreate = getElement('.page-create')
  const pageProfile = getElement('.page-profile')

  const buttonHome = getElement('.nav-bar__home')
  const buttonBookmark = getElement('.nav-bar__bookmark')
  const buttonCreate = getElement('.nav-bar__create')
  const buttonProfile = getElement('.nav-bar__profile')

  const header = getElement('.app-header__heading')

  buttonHome.addEventListener('click', () => {
    setActivePage(pageHome)
    setActiveButton(buttonHome)
    setHeaderText('Quiz App')
  })

  buttonBookmark.addEventListener('click', () => {
    setActivePage(pageBookmark)
    setActiveButton(buttonBookmark)
    setHeaderText('Bookmarks')
  })

  buttonCreate.addEventListener('click', () => {
    setActivePage(pageCreate)
    setActiveButton(buttonCreate)
    setHeaderText('Create')
  })

  buttonProfile.addEventListener('click', () => {
    setActivePage(pageProfile)
    setActiveButton(buttonProfile)
    setHeaderText('Profile')
  })

  function setActivePage(page) {
    hideAllPages()
    page.classList.remove('hidden')
  }

  function setActiveButton(button) {
    inactivateAllButtons()
    button.classList.add('active')
  }

  function hideAllPages() {
    pageHome.classList.add('hidden')
    pageBookmark.classList.add('hidden')
    pageCreate.classList.add('hidden')
    pageProfile.classList.add('hidden')
  }

  function inactivateAllButtons() {
    buttonHome.classList.remove('active')
    buttonBookmark.classList.remove('active')
    buttonCreate.classList.remove('active')
    buttonProfile.classList.remove('active')
  }

  function setHeaderText(text) {
    header.innerText = text
  }
}