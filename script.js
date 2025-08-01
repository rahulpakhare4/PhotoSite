const imageSources = [
  "images/myra.jpeg",
  "images/myra2.jpeg",
  "images/myra3.jpeg",
  "images/tejal1.jpg",
  "images/tejal2.jpg",
  "images/tejal3.jpg",
  "images/tejal4.jpeg",
  "images/tejal5.jpeg",
  "images/tejal6.jpg",
  "images/tejal7.jpeg",
  "images/tejal8.jpg",
  "images/tejal9.jpeg"
];

let currentIndex = 0;

function showSection(section) {
  const photoSection = document.getElementById('photos');
  const videoSection = document.getElementById('videos');

  if (section === 'photos') {
    photoSection.style.display = 'flex';
    videoSection.style.display = 'none';
  } else {
    photoSection.style.display = 'none';
    videoSection.style.display = 'flex';
  }
}

function openModal(index) {
  currentIndex = index;
  document.getElementById('modalImage').src = imageSources[currentIndex];
  document.getElementById('modal').style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

function nextImage() {
  currentIndex = (currentIndex + 1) % imageSources.length;
  document.getElementById('modalImage').src = imageSources[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
  document.getElementById('modalImage').src = imageSources[currentIndex];
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowRight') nextImage();
  if (e.key === 'ArrowLeft') prevImage();
});
