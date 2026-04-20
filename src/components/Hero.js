export function loadHero() {
  const hero = document.createElement("section")

  hero.innerHTML = `
    <div class="hero">
      <h1>Welcome to Our Restaurant</h1>
      <button class="btn btn-primary">Order Now</button>
    </div>
  `

  document.body.appendChild(hero)
}