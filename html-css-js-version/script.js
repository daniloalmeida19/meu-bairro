// Lógica para o site Conexão de Vizinhança

document.addEventListener('DOMContentLoaded', () => {
    // --- Dados e Lógica para as Publicações da Comunidade ---
    const postsData = [
        {
            author: 'Ana',
            time: '5 min',
            avatar: 'https://i.pravatar.cc/40?img=1',
            content: 'Alguém tem uma furadeira para emprestar?',
            responses: 3
        },
        {
            author: 'João',
            time: '1 h',
            avatar: 'https://i.pravatar.cc/40?img=2',
            content: 'Vai ter feira de artesanato na praça sábado',
            responses: 6
        },
        {
            author: 'Maria',
            time: '3 h',
            avatar: 'https://i.pravatar.cc/40?img=3',
            content: 'Pessoal, encontrei um cachorro perdido perto da padaria. Alguém conhece?',
            responses: 1
        },
    ];

    const communityPostsSection = document.querySelector('.community-posts');

    function renderPosts() {
        communityPostsSection.innerHTML = '<h2>Publicações da comunidade</h2>'; 
        postsData.forEach(post => {
            const postElement = document.createElement('article');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <div class="post-header">
                    <img src="${post.avatar}" alt="Avatar ${post.author}" class="avatar">
                    <div class="post-info">
                        <p class="author">${post.author}</p>
                        <p class="time">${post.time}</p>
                    </div>
                </div>
                <p class="post-content">${post.content}</p>
                <div class="post-footer">
                    <p>${post.responses} ${post.responses === 1 ? 'resposta' : 'respostas'}</p>
                    <button class="more-options-btn">...</button>
                </div>
            `;
            communityPostsSection.appendChild(postElement);
        });
    }

    // --- Dados e Lógica para o Comércio Local ---
    const businessesData = [
        {
            type: 'Padaria',
            name: 'Pão de Ouro',
            description: 'Pães frescos, bolos e café de qualidade.',
            location: 'Rua das Flores, 123',
            phone: '(11) 98765-4321'
        },
        {
            type: 'Farmácia',
            name: 'Farmácia Bem-Estar',
            description: 'Medicamentos, perfumaria e atendimento farmacêutico.',
            location: 'Avenida Principal, 456',
            phone: '(11) 91234-5678'
        },
        {
            type: 'Adega',
            name: 'Adega do Bairro',
            description: 'Vinhos, cervejas artesanais e destilados.',
            location: 'Travessa dos Vinhos, 78',
            phone: '(11) 95555-4444'
        }
    ];

    const localCommerceSection = document.querySelector('.local-commerce');

    function renderBusinesses() {
        localCommerceSection.innerHTML = '<h2>Comércio Local</h2>';
        businessesData.forEach(business => {
            const businessElement = document.createElement('div');
            businessElement.classList.add('business-card');
            businessElement.innerHTML = `
                <p class="business-type">${business.type}</p>
                <h3 class="business-name">${business.name}</h3>
                <p class="business-description">${business.description}</p>
                <p class="business-location">📍 ${business.location}</p>
                <p class="business-phone">📞 ${business.phone}</p>
            `;
            localCommerceSection.appendChild(businessElement);
        });
    }


    // --- Renderização Inicial ---
    renderPosts();
    renderBusinesses();
});
