export function loadFooter() {
    

    if (!document.getElementById("bf-fonts")) {
        const link = document.createElement("link");
        link.id = "bf-fonts";
        link.rel = "stylesheet";
        link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Montserrat:wght@300;400;500;600&display=swap";
        document.head.appendChild(link);
    }


    if (!document.getElementById("bf-styles")) {
        const style = document.createElement("style");
        style.id = "bf-styles";
        style.textContent = `

            #bridge-footer {
                background: #0b1018;
                color: #f5f0e8;
                font-family: 'Montserrat', sans-serif;
                padding: 70px 5% 50px;
                position: relative;
                overflow: hidden;
            }

            .bf-grid-lines {
                position: absolute;
                inset: 0;
                pointer-events: none;
                z-index: 0;
            }

            .bf-inner {
                position: relative;
                z-index: 1;
                max-width: 700px;
                margin: 0 auto;
                text-align: center;
            }

            .bf-monogram {
                font-family: 'Cormorant Garamond', serif;
                font-size: 3.2rem;
                font-weight: 300;
                color: #c9a96e;
                line-height: 1;
                margin: 0 0 32px;
                display: block;
            }

            .bf-info {
                font-family: 'Montserrat', sans-serif;
                font-size: 0.72rem;
                font-weight: 300;
                letter-spacing: 2px;
                color: rgba(245, 240, 232, 0.65);
                line-height: 2.2;
                margin: 0 0 6px;
            }

            .bf-info a {
                color: rgba(245, 240, 232, 0.65);
                text-decoration: none;
                transition: color 0.2s;
            }

            .bf-info a:hover {
                color: #c9a96e;
            }

            .bf-social {
                display: flex;
                justify-content: center;
                gap: 40px;
                margin-top: 36px;
            }

            .bf-social a {
                font-family: 'Cormorant Garamond', serif;
                font-size: 1rem;
                font-weight: 400;
                color: rgba(245, 240, 232, 0.75);
                text-decoration: none;
                letter-spacing: 1px;
                position: relative;
                padding-bottom: 6px;
                transition: color 0.25s;
            }

            .bf-social a::after {
                content: '';
                position: absolute;
                left: 0; bottom: 0;
                width: 100%; height: 1px;
                background: #c9a96e;
                opacity: 0.5;
            }

            .bf-social a:hover {
                color: #c9a96e;
            }
            .bf-social a:hover::after {
                opacity: 1;
            }

            .bf-divider {
                border: none;
                background: rgba(201,169,110,0.2);
                width: 60px;
                height: 0.5px;
                margin: 40px auto 22px;
            }

            .bf-copy {
                font-size: 0.6rem;
                letter-spacing: 2.5px;
                color: rgba(245,240,232,0.25);
                font-weight: 300;
                text-transform: uppercase;
                margin: 0;
            }

            /* ==================== GLOBAL SCROLL BUTTON ==================== */
            .bf-scroll-btn {
                position: fixed;
                bottom: 40px;
                right: 40px;
                width: 42px;
                height: 42px;
                border: 1px solid rgba(201,169,110,0.35);
                border-radius: 50%;
                background: transparent;
                color: #c9a96e;
                font-size: 20px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
                z-index: 9999;
                opacity: 0;
                visibility: hidden;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            }

            .bf-scroll-btn:hover {
                border-color: #c9a96e;
                background: rgba(201,169,110,0.1);
                transform: translateY(-3px);
            }

            .bf-scroll-btn.show {
                opacity: 1;
                visibility: visible;
            }
        `;
        document.head.appendChild(style);
    }


    if (!document.getElementById("bridge-footer")) {
        const footer = document.createElement("footer");
        footer.id = "bridge-footer";

        footer.innerHTML = `
            <div class="bf-inner">
                <span class="bf-monogram">B</span>
                
                <div class="bf-info">
                    Bridge Restaurant & Fine Dining<br>
                    71 Madison Ave<br>
                    10013 New York<br>
                    914-309-7030 • bridge@example.com<br><br>
                    Open: 09:00 am – 01:00 pm
                </div>

                <div class="bf-social">
                    <a href="#" target="_blank">Instagram</a>
                    <a href="#" target="_blank">Twitter</a>
                    <a href="#" target="_blank">Facebook</a>
                </div>

                <hr class="bf-divider">
                
                <p class="bf-copy">© 2026 Bridge Restaurant. All rights reserved.</p>
            </div>
        `;

        document.body.appendChild(footer);
    }


    if (!document.getElementById("bf-scroll-btn")) {
        const scrollBtn = document.createElement("button");
        scrollBtn.id = "bf-scroll-btn";
        scrollBtn.className = "bf-scroll-btn";
        scrollBtn.title = "Back to top";
        scrollBtn.innerHTML = `↑`;

        scrollBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });

        document.body.appendChild(scrollBtn);

        // Show button when user scrolls down
        window.addEventListener("scroll", () => {
            if (window.scrollY > 500) {
                scrollBtn.classList.add("show");
            } else {
                scrollBtn.classList.remove("show");
            }
        });
    }
}