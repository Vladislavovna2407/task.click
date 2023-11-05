let container = document.querySelector('div');
let block = document.querySelector("article")

 block.addEventListener("click",  {
   handleEvent(event){
    let colecction = Array.from(document.querySelectorAll('div'));
    colecction.shift();
    let target = event.target;
    
    if(target.tagName = 'div') {
      target.style.display = 'none';
      let index = colecction[Math.floor(Math.random() * 5)];
      index.style.display ='block';
     }
}
})
