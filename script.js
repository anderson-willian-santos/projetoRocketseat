function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector(".profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "/assets/avatar_sol.png")
    img.setAttribute(
      "alt",
      "Desenho do sol usando óculos azuis, com a bochecha corada e sorrido.",
    )
  } else {
    img.setAttribute("src", "/assets/avatar_lua.png")
    img.setAttribute(
      "alt",
      "Desenho da lua em um céu estrelado, com a bochecha corada e sorrido.",
    )
  }
}
