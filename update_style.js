// Update overall size
img_container = document.getElementById('pic_container')
img_container.style.display = "flex";
img_container.style.height = '90vh';

// Change width to retain aspect ratio
imgs = document.getElementsByTagName('img');
for (let i = 0; i < imgs.length; i++){
  imgs[i].style.width = auto;
  imgs[i].style.minWidth = null;
  imgs[i].style.maxWidth = null;
}