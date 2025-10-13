document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const gameName = card.querySelector('img').alt.toLowerCase(); // беремо назву гри
  
      window.location.href = `game.html?name=${encodeURIComponent(gameName)}`;
    });
  });