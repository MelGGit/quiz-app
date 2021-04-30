import getElements from './utils/getElements'

export default function setupBookmarks() {
  const bookmarks = getElements('.quiz-card__bookmark')
  bookmarks.forEach(bookmark => {
    bookmark.addEventListener('click', () => {
      bookmark.classList.toggle('checked')
    })
  })
}
