export function loadNavbar() {
  const nav = document.createElement("nav")

  nav.innerHTML = `
    <div class="container">
      <h2>My Restaurant</h2>
    </div>
  `

  document.body.prepend(nav)
}