
var videoAreas = document.querySelectorAll(".video-container");
var filtros = document.querySelectorAll(".filtros");

document.querySelectorAll('.filter-options').forEach(button => {
    button.addEventListener('click', () => {
      // Remover a classe 'active' de todos os botões
      document.querySelectorAll('.filter-options').forEach(btn => btn.classList.remove('active'));
  
      // Adicionar a classe 'active' ao botão clicado
      button.classList.add('active');
  
      // Pegar o valor do filtro selecionado
      const filter = button.getAttribute('data-filter');
  
      // Selecionar todos os vídeos
      const videos = document.querySelectorAll('.video');
  
      // Mostrar ou ocultar vídeos com base no filtro
      videos.forEach(video => {
        if (filter === 'tudo') {
          video.style.display = 'block'; // Mostrar todos
        } else {
          if (video.id === filter) {
            video.style.display = 'block'; // Mostrar vídeos da categoria
          } else {
            video.style.display = 'none'; // Esconder vídeos de outras categorias
          }
        }
      });
    });
  });
  