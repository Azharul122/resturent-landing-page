export function loadAboutUs() {
  // Inject Google Fonts if not already loaded
  if (!document.getElementById("about-fonts")) {
    const link = document.createElement("link");
    link.id = "about-fonts";
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Montserrat:wght@300;400;500&display=swap";
    document.head.appendChild(link);
  }

  // Inject Styles
  const style = document.createElement("style");
  style.id = "about-styles";
  style.textContent = `
    #bridge-about {
      background: #0f1218;
      color: #f5f0e8;
      padding: 120px 5% 100px;
      font-family: 'Montserrat', sans-serif;
      position: relative;
    }

    // .about-container {
    //   max-width: 1280px;
    //   margin: 0 auto;
    // }

    .about-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .about-subtitle {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.1rem;
      letter-spacing: 3px;
      color: #c9a96e;
      text-transform: uppercase;
      margin-bottom: 0.8rem;
    }

    .about-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(2.8rem, 6vw, 4.8rem);
      font-weight: 300;
      color: #c9a96e;
      letter-spacing: 0.08em;
      margin: 0;
      line-height: 1.05;
    }

    .about-divider {
      width: 80px;
      height: 1px;
      background: #c9a96e;
      margin: 2rem auto;
      opacity: 0.6;
    }

    .about-text {
      max-width: 720px;
      margin: 0 auto 5rem;
      font-size: 1.05rem;
      line-height: 1.85;
      color: rgba(245, 240, 232, 0.85);
      text-align: center;
    }

    .about-grid {
      display: grid;
      grid-template-columns: 1fr 320px 1fr;
      gap: 2rem;
      align-items: center;
    }

    .about-image {
      width: 100%;
      height: 520px;
      object-fit: cover;
      border: 1px solid rgba(201, 169, 110, 0.2);
      box-shadow: 0 20px 40px rgba(0,0,0,0.6);
    }

    .about-pattern {
      width: 100%;
      height: 520px;
      background: linear-gradient(#0f1218, #0f1218),
                  url('https://via.placeholder.com/600x600/1a2028/c9a96e?text=GEOMETRIC') no-repeat center;
      background-size: cover;
      border: 1px solid rgba(201, 169, 110, 0.15);
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgba(201, 169, 110, 0.15);
      font-size: 180px;
      font-weight: 300;
      overflow: hidden;
    }

    .about-pattern::before {
      content: '';
      position: absolute;
      inset: 0;
      background: repeating-linear-gradient(
        45deg,
        transparent,
        transparent 20px,
        rgba(201,169,110,0.08) 20px,
        rgba(201,169,110,0.08) 40px
      );
    }

    @media (max-width: 992px) {
      .about-grid {
        grid-template-columns: 1fr;
        gap: 2.5rem;
      }
      .about-pattern { height: 380px; }
    }
  `;
  document.head.appendChild(style);

  // Create HTML
  const aboutSection = document.createElement("section");
  aboutSection.id = "bridge-about";

  aboutSection.innerHTML = `
    <div class="about-container container">
      <div class="about-header">
        <div class="about-subtitle">Our Story</div>
        <h2 class="about-title">ABOUT US</h2>
        <div class="about-divider"></div>
      </div>

      <div class="about-text">
        <p>Bridge Fine Dining was born from a deep passion for exceptional cuisine and timeless elegance. Nestled in the heart of New York, we bring together centuries-old culinary traditions with modern creativity, offering an intimate dining experience where every detail is thoughtfully crafted.</p>
        <p>Our philosophy is simple: the finest ingredients, prepared with precision and served with genuine warmth. From our carefully curated wine list to our seasonal tasting menus, every element is designed to create unforgettable moments around the table.</p>
      </div>

      <div class="about-grid">
        <!-- Left Image: Restaurant Interior -->
        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34b4?w=800&q=80" 
             alt="Bridge Fine Dining Interior" 
             class="about-image">

        <!-- Center Pattern -->
         <img src="https://bridge496.qodeinteractive.com/wp-content/uploads/2019/10/main-img-3.jpg" 
             alt="Signature Chocolate Tart" 
             class="about-image">

        <!-- Right Image: Dessert -->
        <img src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80" 
             alt="Signature Chocolate Tart" 
             class="about-image">
      </div>
    </div>
  `;

  // Append to body (after hero or navbar)
  document.body.appendChild(aboutSection);
}