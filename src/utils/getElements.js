export default function getElements(selector, element = document) {
  return element.querySelectorAll(selector)
}
