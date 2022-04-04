// Update overall size
pic_container = document.getElementById('pic_container')
pic_container.style.display = "flex";
pic_container.style.height = '90vh';

var imgs = document.getElementById('pic_container').querySelectorAll('img')

imgs.forEach(element => {
  console.log(element.src)
  element.style.width = 'auto';
  element.style.minWidth = 'unset';
});

