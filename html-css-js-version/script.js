document.addEventListener("DOMContentLoaded", () => {
  // --- Dados e Lógica para as Publicações da Comunidade ---
  const postsData = [
    /* ... dados dos posts ... */
  ];
  const communityPostsSection = document.querySelector(".community-posts");
  function renderPosts() {
    /* ... função de renderizar posts ... */
  }

  // --- Dados e Lógica para o Comércio Local ---
  const businessesData = [
    {
      type: "Padaria",
      name: "Pão de Ouro",
      description: "Pães frescos, bolos e café.",
      location: "Rua das Flores, 123",
      phone: "(11) 98765-4321",
      whatsapp: "5511987654321",
      instagram: "paodeouro",
      mapLink: "#",
      rating: 4.5,
      votes: 88,
    },
    {
      type: "Farmácia",
      name: "Farmácia Bem-Estar",
      description: "Medicamentos e perfumaria.",
      location: "Avenida Principal, 456",
      phone: "(11) 91234-5678",
      whatsapp: "5511912345678",
      instagram: "farmabemestar",
      mapLink: "#",
      rating: 4.8,
      votes: 120,
    },
    {
      type: "Adega",
      name: "Adega do Bairro",
      description: "Vinhos e cervejas artesanais.",
      location: "Travessa dos Vinhos, 78",
      phone: "(11) 95555-4444",
      whatsapp: "5511955554444",
      instagram: "adegadobairro",
      mapLink: "#",
      rating: 4.9,
      votes: 95,
    },
    {
      type: "Pet Shop",
      name: "Amigo Fiel Pet Shop",
      description: "Ração, brinquedos e banho & tosa.",
      location: "Rua dos Animais, 50",
      phone: "(11) 92222-3333",
      whatsapp: "5511922223333",
      instagram: "amigofielpet",
      mapLink: "#",
      rating: 5.0,
      votes: 150,
    },
    {
      type: "Pizzaria",
      name: "Pizza Nostra",
      description: "Pizzas artesanais em forno a lenha.",
      location: "Avenida da Gula, 789",
      phone: "(11) 94444-5555",
      whatsapp: "5511944445555",
      instagram: "pizzanostra",
      mapLink: "#",
      rating: 4.7,
      votes: 210,
    },
    {
      type: "Padaria",
      name: "Doce Sonho Padaria",
      description: "Pães, doces e salgados.",
      location: "Rua da Esquina, 2",
      phone: "(11) 96666-7777",
      whatsapp: "5511966667777",
      instagram: "docesonho",
      mapLink: "#",
      rating: 4.3,
      votes: 75,
    },
  ];

  const localCommerceSection = document.querySelector(".local-commerce");
  const commerceFiltersContainer = document.querySelector(".commerce-filters");

  function generateStars(rating) {
    let starsHTML = "";
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    for (let i = 0; i < fullStars; i++) starsHTML += "★";
    if (halfStar) starsHTML += "☆";
    for (let i = 0; i < emptyStars; i++) starsHTML += "☆";
    return starsHTML;
  }

  function renderBusinesses(businessesToRender) {
    localCommerceSection.innerHTML = "<h2>Comércio Local</h2>";
    businessesToRender.sort(
      (a, b) => b.rating - a.rating || a.name.localeCompare(b.name),
    );
    businessesToRender.forEach((business) => {
      const businessElement = document.createElement("div");
      businessElement.classList.add("business-card");
      businessElement.innerHTML = `
                <div class="business-header">
                    <p class="business-type">${business.type}</p>
                    <div class="business-rating">
                        <span class="stars">${generateStars(business.rating)}</span>
                        <span class="rating-value">${business.rating.toFixed(1)}</span>
                    </div>
                </div>
                <h3 class="business-name">${business.name}</h3>
                <p class="business-description">${business.description}</p>
                <div class="business-actions">
                    <a href="https://wa.me/${business.whatsapp}" target="_blank" class="action-link whatsapp">WhatsApp</a>
                    <a href="https://www.instagram.com/${business.instagram}" target="_blank" class="action-link instagram">Instagram</a>
                    <a href="${business.mapLink}" target="_blank" class="action-link map">Mapa</a>
                </div>
            `;
      localCommerceSection.appendChild(businessElement);
    });
  }

  function setupFilters() {
    const categories = ["Todos", ...new Set(businessesData.map((b) => b.type))];
    commerceFiltersContainer.innerHTML = categories
      .map(
        (category) =>
          `<button class="filter-btn" data-category="${category}">${category}</button>`,
      )
      .join("");

    commerceFiltersContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("filter-btn")) {
        const category = e.target.dataset.category;
        const filteredBusinesses =
          category === "Todos"
            ? businessesData
            : businessesData.filter((b) => b.type === category);
        renderBusinesses(filteredBusinesses);

        // Ativa o botão clicado
        document
          .querySelectorAll(".filter-btn")
          .forEach((btn) => btn.classList.remove("active"));
        e.target.classList.add("active");
      }
    });

    // Ativa o botão "Todos" inicialmente
    commerceFiltersContainer
      .querySelector('.filter-btn[data-category="Todos"]')
      .classList.add("active");
  }

  // --- Renderização Inicial ---
  // renderPosts(); // Comentado para focar na funcionalidade atual
  setupFilters();
  renderBusinesses(businessesData);

  // --- Lógica do Menu Lateral ---
  const menuBtn = document.querySelector(".menu-btn");
  const sideMenu = document.querySelector(".side-menu");
  const closeMenuBtn = document.querySelector(".close-menu-btn");

  menuBtn.addEventListener("click", () => {
    sideMenu.classList.add("active");
  });

  closeMenuBtn.addEventListener("click", () => {
    sideMenu.classList.remove("active");
  });

  // --- Lógica do Modal de Categorias ---
  const registerCategoryLink = document.getElementById(
    "register-category-link",
  );
  const categoryModal = document.getElementById("category-modal");
  const closeModalBtn = document.querySelector(".close-modal-btn");
  const saveCategoryBtn = document.getElementById("save-category-btn");
  const newCategoryInput = document.getElementById("new-category-input");

  // Abrir modal ao clicar no link do menu
  registerCategoryLink.addEventListener("click", (e) => {
    e.preventDefault();
    categoryModal.style.display = "block";
    sideMenu.classList.remove("active"); // Fecha o menu lateral
  });

  // Fechar modal
  closeModalBtn.addEventListener("click", () => {
    categoryModal.style.display = "none";
  });

  // Fechar ao clicar fora do modal
  window.addEventListener("click", (e) => {
    if (e.target == categoryModal) {
      categoryModal.style.display = "none";
    }
  });

  // Salvar nova categoria
  saveCategoryBtn.addEventListener("click", () => {
    const categoryName = newCategoryInput.value.trim();
    if (categoryName) {
      alert(`Categoria "${categoryName}" registrada com sucesso!`);
      newCategoryInput.value = ""; // Limpa o campo
      categoryModal.style.display = "none"; // Fecha o modal
      // Aqui você poderia adicionar lógica para atualizar a lista de filtros, se desejar
    } else {
      alert("Por favor, digite um nome para a categoria.");
    }
  });

  // --- Lógica da Página de Cadastro de Empresa ---
  const registerBtn = document.querySelector(".register-btn");
  const registrationPage = document.getElementById(
    "business-registration-page",
  );
  const closeRegistrationBtn = document.getElementById(
    "close-registration-btn",
  );
  const businessForm = document.getElementById("business-form");
  const regCategoryList = document.getElementById("reg-category-list");
  const regPhoneInput = document.getElementById("reg-phone");
  const regCommercialPhoneInput = document.getElementById(
    "reg-commercial-phone",
  );
  const regNeighborhoodInput = document.getElementById("reg-neighborhood");

  // Máscara para telefone
  function maskPhone(e) {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 10) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    } else if (value.length > 5) {
      value = value.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
    }
    e.target.value = value;
  }

  // Função para preencher o select de categorias
  function populateCategories() {
    // Categorias solicitadas + existentes
    const requestedCategories = [
      "Alimento",
      "Cabeleireiro",
      "Manicure e Pedicure",
    ];
    const existingCategories = [...new Set(businessesData.map((b) => b.type))];
    const categories = [
      ...new Set([...requestedCategories, ...existingCategories]),
    ].sort();

    regCategoryList.innerHTML = "";
    categories.forEach((cat) => {
      const option = document.createElement("option");
      option.value = cat;
      regCategoryList.appendChild(option);
    });
  }

  // Abrir página de cadastro
  registerBtn.addEventListener("click", () => {
    populateCategories();
    registrationPage.classList.add("active");
  });

  // Fechar página de cadastro (Voltar)
  closeRegistrationBtn.addEventListener("click", () => {
    registrationPage.classList.remove("active");
  });

  // Enviar formulário (Simulação)
  businessForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validação de senha
    const password = document.getElementById("reg-password").value;
    const confirmPassword = document.getElementById(
      "reg-confirm-password",
    ).value;

    if (password !== confirmPassword) {
      alert("As senhas não coincidem. Por favor, verifique.");
      return;
    }

    alert("Empresa cadastrada com sucesso!");
    registrationPage.classList.remove("active");
    businessForm.reset(); // Limpa o formulário
  });
});
