window.addEventListener("DOMContentLoaded", function() {
  let ibg = document.querySelectorAll('.ibg'),
      img = document.querySelectorAll('img');

  ibg.forEach(element => {
    for(let i = 0; i < img.length; i++) {
      if(element.contains(img[i])) {
        element.style.backgroundImage = `url(${img[i].getAttribute('src')})`;
      }
    } 
  });
 });