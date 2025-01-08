function toggleMode() {
  const html = document.documentElement
    html.classList.toggle("light")

  // img change
  const img = document.querySelector("#profile img")
  
  if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
    img.setAttribute('src', './assets/avatar.png')
  }
}