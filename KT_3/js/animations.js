
const starfallCanvas = document.getElementById("starfall");
if (starfallCanvas) {
  const ctx = starfallCanvas.getContext("2d");
  let stars = [];

  function initStars(count = 150) {
    stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight - window.innerHeight,
        radius: Math.random() * 2 + 1,
        speed: Math.random() * 0.3 + 1,
        opacity: Math.random()
      });
    }
  }

  function drawStars() {
    ctx.clearRect(0, 0, starfallCanvas.width, starfallCanvas.height);
    ctx.fillStyle = "white";

    for (let star of stars) {
      ctx.globalAlpha = star.opacity;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();

      star.y += star.speed;
      if (star.y > window.innerHeight) {
        star.y = -star.radius;
        star.x = Math.random() * window.innerWidth;
      }
    }

    requestAnimationFrame(drawStars);
  }

  window.addEventListener("resize", () => {
    starfallCanvas.width = window.innerWidth;
    starfallCanvas.height = window.innerHeight;
    initStars();
  });

  window.addEventListener("load", () => {
    starfallCanvas.width = window.innerWidth;
    starfallCanvas.height = window.innerHeight;
    initStars();
    drawStars();
  });
}

const galaxyCanvas = document.getElementById("galaxy");
if (galaxyCanvas) {
  const ctx = galaxyCanvas.getContext("2d");
  let stars = [];

  function initGalaxy() {
    galaxyCanvas.width = window.innerWidth;
    galaxyCanvas.height = window.innerHeight;

    stars = [];
    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * galaxyCanvas.width,
        y: Math.random() * galaxyCanvas.height,
        radius: Math.random() * 2 + 0.5,
        alpha: Math.random(),
        delta: Math.random() * 0.5
      });
    }
  }

  function drawGalaxy() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, galaxyCanvas.width, galaxyCanvas.height);

    for (let star of stars) {
      ctx.globalAlpha = star.alpha;
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();

      star.y -= star.delta;
      if (star.y < 0) star.y = galaxyCanvas.height;
    }

    requestAnimationFrame(drawGalaxy);
  }

  window.addEventListener("resize", initGalaxy);

  window.addEventListener("load", () => {
    initGalaxy();
    drawGalaxy();
  });
}


const parallaxCanvas = document.getElementById("parallax");
if (parallaxCanvas) {
  const ctx = parallaxCanvas.getContext("2d");
  let stars = [];

  function createParallaxStars(layers = 3) {
    stars = [];
    for (let layer = 0; layer < layers; layer++) {
      let layerStars = [];
      for (let i = 0; i < 60; i++) {
        layerStars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: layer === 0 ? 1 : layer === 1 ? 0.7 : 0.4,
          speed: layer === 0 ? 0.8 : layer === 1 ? 0.4 : 0.2
        });
      }
      stars.push(layerStars);
    }
  }

  function drawParallax() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, parallaxCanvas.width, parallaxCanvas.height);

    for (let layer of stars) {
      ctx.fillStyle = "white";
      for (let star of layer) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        star.x -= star.speed;
        if (star.x < 0) star.x = window.innerWidth;
      }
    }

    requestAnimationFrame(drawParallax);
  }

  window.addEventListener("resize", () => {
    parallaxCanvas.width = window.innerWidth;
    parallaxCanvas.height = window.innerHeight;
    createParallaxStars();
  });

  window.addEventListener("load", () => {
    parallaxCanvas.width = window.innerWidth;
    parallaxCanvas.height = window.innerHeight;
    createParallaxStars();
    drawParallax();
  });
}


const planetCanvas = document.getElementById("planet");
if (planetCanvas) {
  const ctx = planetCanvas.getContext("2d");
  let angle = 0;

  function drawPlanet() {
    planetCanvas.width = window.innerWidth;
    planetCanvas.height = window.innerHeight;

    ctx.clearRect(0, 0, planetCanvas.width, planetCanvas.height);

    const centerX = planetCanvas.width / 2;
    const centerY = planetCanvas.height / 2;
    const radius = 150;

    
    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
    gradient.addColorStop(0, "#1a3a7e");
    gradient.addColorStop(1, "#030f27");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fill();


    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(angle);
    ctx.translate(-centerX, -centerY);

    ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 1.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
    angle += 0.005;

    requestAnimationFrame(drawPlanet);
  }

  window.addEventListener("load", drawPlanet);
}

const meteorCanvas = document.getElementById("meteorShower");
if (meteorCanvas) {
  const ctx = meteorCanvas.getContext("2d");
  let meteors = [];

  function createMeteor() {
    meteors.push({
      x: Math.random() * meteorCanvas.width,
      y: -10,
      speed: Math.random() * 5 + 2,
      length: Math.random() * 50 + 20
    });
  }

  function drawMeteors() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, meteorCanvas.width, meteorCanvas.height);

    ctx.strokeStyle = "orange";
    ctx.lineWidth = 2;

    for (let m of meteors) {
      ctx.beginPath();
      ctx.moveTo(m.x, m.y);
      ctx.lineTo(m.x + 10, m.y + m.length);
      ctx.stroke();

      m.y += m.speed;
      m.x += 1.5;

      if (m.y > meteorCanvas.height) {
        m.y = -10;
        m.x = Math.random() * meteorCanvas.width;
      }
    }

    requestAnimationFrame(drawMeteors);
  }

  window.addEventListener("resize", () => {
    meteorCanvas.width = window.innerWidth;
    meteorCanvas.height = window.innerHeight;
  });

  window.addEventListener("load", () => {
    meteorCanvas.width = window.innerWidth;
    meteorCanvas.height = window.innerHeight;
    setInterval(createMeteor, 300);
    drawMeteors();
  });
}