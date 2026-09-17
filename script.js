const CONFIG = {
  recipient: 'Sayang',
  photos: [
    '/images/photo1.jpg',
    '/images/photo2.jpg',
    '/images/photo3.jpg',
    '/images/photo4.jpg',
    '/images/photo5.jpg'
  ]
};

const welcomeScreen = document.querySelector('.welcome-screen');
const giftScreen = document.querySelector('.gift-screen');
const memoriesScreen = document.querySelector('.memories-screen');
const receiveButton = document.querySelector('[data-receive]');
const giftButton = document.querySelector('[data-gift]');

document.querySelectorAll('[data-recipient]').forEach((element) => {
  element.textContent = CONFIG.recipient;
});

document.querySelectorAll('.particles').forEach((container) => {
  const symbols = ['✦', '·', '♡', '✧', '•'];
  for (let index = 0; index < 24; index += 1) {
    const particle = document.createElement('span');
    particle.textContent = symbols[index % symbols.length];
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * -9}s`;
    particle.style.animationDuration = `${7 + Math.random() * 7}s`;
    particle.style.fontSize = `${8 + Math.random() * 10}px`;
    container.appendChild(particle);
  }
});

receiveButton.addEventListener('click', () => {
  welcomeScreen.classList.add('is-leaving');
  window.setTimeout(() => {
    welcomeScreen.style.display = 'none';
    giftScreen.classList.add('is-active');
  }, 650);
});

giftButton.addEventListener('click', () => {
  if (giftScreen.classList.contains('opening')) return;
  giftScreen.classList.add('opening');
  giftButton.setAttribute('aria-label', 'Kado sedang dibuka');
  window.setTimeout(() => {
    giftScreen.classList.add('opened');
    window.setTimeout(() => {
      giftScreen.classList.remove('is-active');
      giftScreen.style.display = 'none';
      memoriesScreen.classList.add('is-active', 'visible');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 950);
  }, 1650);
});

// Keep the configured paths visible in one place while allowing local placeholders to render gracefully.
document.querySelectorAll('.photo-card img').forEach((image, index) => {
  image.src = CONFIG.photos[index];
  image.addEventListener('error', () => {
    image.alt = `Placeholder foto ${index + 1}`;
    image.classList.add('is-missing');
  });
});
