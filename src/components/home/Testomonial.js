export function loadTestimonial() {

    // Inject Google Fonts (only once)
    if (!document.getElementById("testimonial-fonts")) {
        const link = document.createElement("link");
        link.id = "testimonial-fonts";
        link.rel = "stylesheet";
        link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Montserrat:wght@300;400;500&display=swap";
        document.head.appendChild(link);
    }

    // Inject Styles (only once)
    if (!document.getElementById("testimonial-styles")) {
        const style = document.createElement("style");
        style.id = "testimonial-styles";
        style.textContent = `
      #bridge-testimonial {
        background: #101520;
        color: #f5f0e8;
        font-family: 'Montserrat', sans-serif;
        position: relative;
        overflow: hidden;
        min-height: 100vh;
      }

      .testimonial-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        min-height: 100vh;
      }

      /* ── LEFT PANEL ── */
      .testimonial-left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 80px 70px 60px 80px;
        position: relative;
        background: #101520;
      }

      .t-quote-mark {
        font-family: 'Cormorant Garamond', serif;
        // font-size: 6rem;
        line-height: 1;
        color: #c9a96e;
        opacity: 0.55;
        margin-bottom: 2rem;
        display: block;
        font-style: italic;
      }

      .t-text {
        font-family: 'Cormorant Garamond', serif;
        font-size: clamp(1.25rem, 2vw, 1.55rem);
        font-style: italic;
        font-weight: 300;
        line-height: 1.85;
        color: rgba(245, 240, 232, 0.88);
        margin-bottom: 2.8rem;
        transition: opacity 0.45s ease;
      }

      .t-author-name {
        font-family: 'Montserrat', sans-serif;
        font-size: 0.85rem;
        font-weight: 500;
        letter-spacing: 4px;
        text-transform: uppercase;
        color: #c9a96e;
        margin-bottom: 2.5rem;
        transition: opacity 0.45s ease;
      }

      /* ── NUMBERED PAGINATION ── */
      .t-pagination {
        display: flex;
        align-items: flex-end;
        gap: 2rem;
        margin-top: auto;
      }

      .t-page-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        opacity: 0.4;
        transition: opacity 0.35s ease;
      }

      .t-page-item.active {
        opacity: 1;
      }

      .t-page-num {
        font-family: 'Montserrat', sans-serif;
        font-size: 0.8rem;
        font-weight: 400;
        letter-spacing: 2px;
        color: #f5f0e8;
      }

      .t-page-item.active .t-page-num {
        color: #c9a96e;
      }

      .t-page-line {
        width: 28px;
        height: 1.5px;
        background: rgba(201, 169, 110, 0.35);
        transition: background 0.35s ease, width 0.35s ease;
      }

      .t-page-item.active .t-page-line {
        background: #c9a96e;
        width: 40px;
      }

      /* ── RIGHT PANEL ── */
      .testimonial-right {
        position: relative;
        overflow: hidden;
      }

      .t-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: opacity 0.5s ease, transform 0.7s ease;
        transform-origin: center center;
      }

      /* ── FADE STATE ── */
      .t-fading .t-text,
      .t-fading .t-author-name,
      .t-fading .t-image {
        opacity: 0;
        transform: translateY(6px);
      }

      .t-image {
        transform: scale(1);
      }
      .t-fading .t-image {
        transform: scale(1.03);
      }

      /* ── RESPONSIVE ── */
      @media (max-width: 900px) {
        .testimonial-wrapper {
          grid-template-columns: 1fr;
          min-height: unset;
        }
        .testimonial-left {
          padding: 60px 40px 50px;
          order: 2;
        }
        .testimonial-right {
          height: 55vw;
          min-height: 300px;
          order: 1;
        }
      }

      @media (max-width: 560px) {
        .testimonial-left {
          padding: 50px 28px 40px;
        }
        .t-quote-mark {
          font-size: 4.5rem;
        }
        .t-text {
          font-size: 1.15rem;
        }
      }
    `;
        document.head.appendChild(style);
    }

    // ── DATA ──
    const testimonialsData = [
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt ut labore diam.",
            author: "JAN WINSENT",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a9c?w=1200&q=85"
        },
        {
            text: "An unforgettable dining experience. The attention to detail in every dish is truly remarkable and deeply moving.",
            author: "MARIA RODRIGUEZ",
            image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=85"
        },
        {
            text: "The ambiance, service, and flavors made this one of the finest evenings we have ever had the pleasure of enjoying.",
            author: "DAVID CHEN",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34b4?w=1200&q=85"
        }
    ];

    let currentIndex = 0;
    let isAnimating = false;

    // ── BUILD HTML ──
    const section = document.createElement("section");
    section.id = "bridge-testimonial";

    section.innerHTML = `
    <div class="testimonial-wrapper ">

      <!-- LEFT -->
      <div class="testimonial-left" id="tLeft">
        <span class="t-quote-mark">
        <img src="https://bridge496.qodeinteractive.com/wp-content/uploads/2023/11/quote-icon.png" alt="Quote Mark" style="width: 2em; height: 2em; vertical-align: middle;">
        </span>

        <p class="t-text" id="tText">
          ${testimonialsData[0].text}
        </p>

        <div class="t-author-name" id="tAuthor">${testimonialsData[0].author}</div>

        <div class="t-pagination" id="tPagination">
          ${testimonialsData.map((_, i) => `
            <div class="t-page-item ${i === 0 ? 'active' : ''}" data-index="${i}">
              <span class="t-page-num">${i + 1}</span>
              <div class="t-page-line"></div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- RIGHT -->
      <div class="testimonial-right">
        <img
          id="tImage"
          class="t-image"
          src="${testimonialsData[0].image}"
          alt="Fine Dining Experience"
        />
      </div>

    </div>
  `;

    document.body.appendChild(section);

    // ── LOGIC ──
    function changeTo(index) {
        if (index === currentIndex || isAnimating) return;
        isAnimating = true;

        const left = document.getElementById('tLeft');
        const text = document.getElementById('tText');
        const author = document.getElementById('tAuthor');
        const img = document.getElementById('tImage');

        // fade out
        left.classList.add('t-fading');

        setTimeout(() => {
            const d = testimonialsData[index];
            text.textContent = d.text;
            author.textContent = d.author;
            img.src = d.image;
            currentIndex = index;

            // update pagination
            document.querySelectorAll('.t-page-item').forEach((el, i) => {
                el.classList.toggle('active', i === index);
            });

            // fade in
            left.classList.remove('t-fading');
            isAnimating = false;
        }, 450);
    }

    // Dot clicks
    section.querySelectorAll('.t-page-item').forEach(el => {
        el.addEventListener('click', () => {
            changeTo(parseInt(el.dataset.index));
        });
    });

    // Auto-advance every 7s
    setInterval(() => {
        changeTo((currentIndex + 1) % testimonialsData.length);
    }, 7000);
}