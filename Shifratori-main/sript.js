 document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const gameName = card.querySelector('img').alt.toLowerCase();
      window.location.href = `game.html?name=${encodeURIComponent(gameName)}`;
    });
  });