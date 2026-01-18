// Lógica para o site Conexão de Vizinhança

document.addEventListener('DOMContentLoaded', () => {
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
        {
            author: 'Carlos',
            time: '8 h',
            avatar: 'https://i.pravatar.cc/40?img=4',
            content: 'Vendo bicicleta usada, em ótimo estado. Interessados chamar no privado!',
            responses: 0
        }
    ];

    const communityPostsSection = document.querySelector('.community-posts');

    function renderPosts() {
        // Limpa a seção antes de renderizar para evitar duplicatas
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

    renderPosts();
});
