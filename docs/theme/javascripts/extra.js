var allH2 = document.querySelectorAll("h2")
allH2[0].insertAdjacentHTML('beforebegin',
    `<a href="#">
    <div class="as-container">
      <div class="as-choice-card">
        <h3 class="as-card-title">
          CTA shown before first H2
        </h3>
        <p class="as-card-info">
          See extra.js to see the code that generates this CTA.
        </p>
        <button class="as-card-cta">
          Awesome CTA in Mkdocs
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
    </a>`);