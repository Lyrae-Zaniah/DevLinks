function toggleMode() {
  const html = document.documentElement
    html.classList.toggle("light")

  // img change
  const img = document.querySelector("#profile img")
  
  if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.jpg')
  } else {
    img.setAttribute('src', './assets/avatar.jpg')
  }
}