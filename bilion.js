const profileCard = document.querySelector('.profile-card');
const toggleButton = document.querySelector('button');

toggleButton.addEventListener('click', () => {
  profileCard.classList.toggle('expanded');
});


