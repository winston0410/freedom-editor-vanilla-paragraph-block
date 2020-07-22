const getSavedData = (savedData) => {
  if (savedData) {
    return savedData.data.text
  }
  return ''
}

const stringToHTML = (nodeString) => {
  const placeholder = document.createElement('template')
  placeholder.innerHTML = nodeString
  return placeholder.content.firstElementChild
}

export {
  stringToHTML,
  getSavedData
}
