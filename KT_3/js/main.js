// === Переход между страницами с анимацией ===
function goToShip(id) {
  const transition = document.getElementById("pageTransition");
  if (transition) {
    transition.classList.add("active");
    setTimeout(() => {
      window.location.href = `ship-detail.html?id=${id}`;
    }, 600);
  } else {
    window.location.href = `ship-detail.html?id=${id}`;
  }
}

function goToCatalog() {
  const transition = document.getElementById("pageTransition");
  if (transition) {
    transition.classList.add("active");
    setTimeout(() => {
      window.location.href = "catalog.html";
    }, 600);
  } else {
    window.location.href = "catalog.html";
  }
}

// === Показывает информацию о корабле в каталоге ===
function showDetails(id) {
  const ships = {
    1: {
      name: "Искатель Звёзд",
      description: "Легкий разведчик для межпространственных путешествий."
    },
    2: {
      name: "Титан-X",
      description: "Мощный тяжелый корабль с полной защитой."
    },
    3: {
      name: "Феникс",
      description: "Самовосстанавливающийся корабль нового поколения."
    }
  };

  const ship = ships[id];
  const detailsBox = document.getElementById("detailsBox");

  if (ship && detailsBox) {
    detailsBox.innerHTML = `
      <h3>${ship.name}</h3>
      <p>${ship.description}</p>
      <button onclick="goToShip(${id})">Перейти к кораблю</button>
    `;
  } else {
    detailsBox.innerHTML = "<p>Корабль не найден.</p>";
  }
}

function hideDetails() {
  const detailsBox = document.getElementById("detailsBox");
  if (detailsBox) {
    detailsBox.classList.remove("show");
  }
}

// === Отображение информации на странице ship-detail.html ===
window.addEventListener("load", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  const ships = {
    1: {
      name: "Искатель Звёзд",
      description: "Легкий разведчик для межпространственных путешествий.",
      image: "images/star-seeker.jpg"
    },
    2: {
      name: "Титан-X",
      description: "Мощный тяжелый корабль с полной защитой.",
      image: "images/titan-x.jpg"
    },
    3: {
      name: "Феникс",
      description: "Самовосстанавливающийся корабль нового поколения.",
      image: "images/phoenix.jpg"
    }
  };

  const container = document.getElementById("shipInfo");
  if (!container) {
    console.warn("Элемент #shipInfo не найден. Возможно, вы не на странице ship-detail.html");
    return;
  }

  if (!id || !ships[id]) {
    container.innerHTML = "<p>Корабль не найден.</p>";
    return;
  }

  const ship = ships[id];
  container.innerHTML = `
    <h2>${ship.name}</h2>
    <img src="${ship.image}" alt="${ship.name}" class="ship-img"/>
    <p>${ship.description}</p>
  `;
});