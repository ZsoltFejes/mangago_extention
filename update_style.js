// Update overall size
pic_container = document.getElementById('pic_container')
pic_container.style.display = "flex";
pic_container.style.height = '90vh';

// Change width to retain aspect ratio
img = document.getElementsByTagName('img')[0];
img.style.width = 'auto';
img.style.minWidth = null;
img.style.maxWidth = null;
console.log(img.style)
console.log("Style update completed")