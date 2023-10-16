// Carrousel
if (document.readyState === "complete") {
  monScript();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    monScript();
  });
}

function monScript() {
  console.log("HTML prêt !");

  const slides = [
    {
      image: "slide1.jpg",
      tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
      image: "slide2.jpg",
      tagLine:
        "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
      image: "slide3.jpg",
      tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
      image: "slide4.png",
      tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    },
  ];

  let nbElement = slides.length - 1;
  
  let numDot = 0;

  let srcImage = "./Images/Carrousel/";

  
  const bannerImg = document.querySelector(".banner-img");
  const bannerText = document.querySelector(".banner-text");
  const arrowLeft = document.querySelector(".arrow_left");
  const arrowRight = document.querySelector(".arrow_right");
  const dots = document.querySelector(".dots");

  console.log(dots);

  
  arrowLeft.classList.remove("hidden");
  arrowRight.classList.remove("hidden");

  
  for (let pas = 0; pas <= nbElement; pas++) {
    dots.innerHTML +=
      '<span id="dot' +
      pas +
      '" class="dot" title="Image ' +
      (pas + 1) +
      '"></span>';
  }

  const dotList = document.querySelectorAll(".dot");

  const addSelected = () => {
    for (let pas = 0; pas <= nbElement; pas++) {
      if (pas === numDot) {
        dotList[pas].classList.add("dot_selected");
      } else {
        dotList[pas].classList.remove("dot_selected");
      }
    }
  };

  const updateSlider = (arg) => {
    bannerImg.src = srcImage + slides[arg]["image"];
    bannerImg.alt = "Banner Print-it - " + slides[arg]["image"];
    bannerText.innerHTML = slides[arg]["tagLine"];
    addSelected();
  };

  updateSlider(numDot);

  dots.addEventListener("click", (e) => {
    // console.log(e);
    console.log(e.target.title);
    if (e.target.id != "" && e.target.id != null) {
      numDot = parseInt(e.target.id.substring(3));
    }
    updateSlider(numDot);
  });

  // Fleche gauche
  arrowLeft.addEventListener("click", () => {
    if (numDot <= 0) {
      numDot = nbElement;
    } else {
      numDot--;
    }
    updateSlider(numDot);
  });

  // Fleche droite
  arrowRight.addEventListener("click", () => {
    if (numDot >= nbElement) {
      numDot = 0;
    } else {
      numDot++;
    }
    updateSlider(numDot);
  });
}