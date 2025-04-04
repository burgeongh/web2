let lightbulb = document.querySelector('.lightbulb');
let body = document.querySelector('body');
let collection = document.querySelectorAll('.collection');
let upper = document.querySelector('.top');
let info = document.querySelectorAll('.info')
let bottom = document.querySelector('.bottom')
let gray_big = document.querySelector('.Gray_big')

lightbulb.onclick = () => {
  if (body.style.background == 'rgb(43, 43, 43)'){
    body.style.background = 'white'
    upper.classList.remove('darkMode-background2')
    bottom.classList.remove('darkMode-background2')
    gray_big.classList.remove('darkMode-text')
    
    for(let i = 0; i < collection.length; i++){
      collection[i].classList.remove('darkMode-text')
      collection[i].classList.remove('darkMode-background')
  }

    for(let i = 0; i < info.length; i++){
      info[i].classList.remove('darkMode-text')
  }
    
  } else{
    body.style.background = 'rgb(43, 43, 43)'
    upper.classList.add('darkMode-background2')
    bottom.classList.add('darkMode-background2')
    gray_big.classList.add('darkMode-text')
    
    for(let i = 0; i < collection.length; i++){
      collection[i].classList.add('darkMode-text')
      collection[i].classList.add('darkMode-background')
  }

    for(let i = 0; i < info.length; i++){
      info[i].classList.add('darkMode-text')
  }
    
  }

  console.log(gray_big.classList)
  
}

