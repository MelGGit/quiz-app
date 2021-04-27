const pageHome = document.querySelector('.page-home')
const pageBookmark = document.querySelector('.page-bookmark')
const pageCreate = document.querySelector('.page-create')
const pageProfile = document.querySelector('.page-profile')

const buttonHome = document.querySelector('.nav-bar__home')
const buttonBookmark = document.querySelector('.nav-bar__bookmark')
const buttonCreate = document.querySelector('.nav-bar__create')
const buttonProfile = document.querySelector('.nav-bar__profile')

const header = document.querySelector('.app-header__heading')

buttonHome.addEventListener('click', () => {
  pageHome.classList.remove('hidden')
  pageBookmark.classList.add('hidden')
  pageCreate.classList.add('hidden')
  pageProfile.classList.add('hidden')

  buttonHome.classList.add('active')
  buttonBookmark.classList.remove('active')
  buttonCreate.classList.remove('active')
  buttonProfile.classList.remove('active')

  header.innerHTML = 'Quiz App'
})

buttonBookmark.addEventListener('click', () => {
  pageHome.classList.add('hidden')
  pageBookmark.classList.remove('hidden')
  pageCreate.classList.add('hidden')
  pageProfile.classList.add('hidden')

  buttonHome.classList.remove('active')
  buttonBookmark.classList.add('active')
  buttonCreate.classList.remove('active')
  buttonProfile.classList.remove('active')

  header.innerHTML = 'Bookmarks'
})

buttonCreate.addEventListener('click', () => {
  pageHome.classList.add('hidden')
  pageBookmark.classList.add('hidden')
  pageCreate.classList.remove('hidden')
  pageProfile.classList.add('hidden')

  buttonHome.classList.remove('active')
  buttonBookmark.classList.remove('active')
  buttonCreate.classList.add('active')
  buttonProfile.classList.remove('active')

  header.innerHTML = 'Create'
})

buttonProfile.addEventListener('click', () => {
  pageHome.classList.add('hidden')
  pageBookmark.classList.add('hidden')
  pageCreate.classList.add('hidden')
  pageProfile.classList.remove('hidden')

  buttonHome.classList.remove('active')
  buttonBookmark.classList.remove('active')
  buttonCreate.classList.remove('active')
  buttonProfile.classList.add('active')

  header.innerHTML = 'Profile'
})
