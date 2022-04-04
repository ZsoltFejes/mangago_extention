function update_style() {
  // Update overall size
  pic_container = document.getElementById('pic_container')
  pic_container.style.display = "flex";
  pic_container.style.height = '95vh';

  var imgs = document.getElementById('pic_container').querySelectorAll('img')

  imgs.forEach(element => {
    if (!element.classList.contains('loading')){
      console.log(element)
      element.style.width = 'auto';
      element.style.minWidth = 'unset';
    }
  });
  window.scroll({
    top: 130,
    behavior: 'smooth'
  })
}

setTimeout(update_style, 1000)

document.addEventListener('keyup', (e) => {
  setTimeout(update_style, 1000)
});
