class Carousel {
  constructor(root){
    if(root){
      this._rootElem = root;
      this._arrowLeft = this._rootElem.querySelector('.js-arrow-left');
      this._arrowLeft.addEventListener('pointerdown',(event)=>this._handlerArrowButton('left',event));
      this._arrowRight = this._rootElem.querySelector('.js-arrow-right');
      this._arrowRight.addEventListener('pointerdown',(event)=>this._handlerArrowButton('right',event));
      this._appendData();
      this._index = 0;
    } else console.error('Root elem of carousel in null!')
  }

  _handlerArrowButton = (type,event) => {
    if(type==='left'){
      if(this._index === 0){
        return;
      } else {
        this._carouselNodes[this._index].classList.remove('carousel__content-item-wrapper_is-visible');
        this._carouselNodes[this._index-1].classList.add('carousel__content-item-wrapper_is-visible');
        this._index--;
      }
    } else {
      if(this._index === this._carouselNodes.length-1){
        return;
      } else {
        this._carouselNodes[this._index].classList.remove('carousel__content-item-wrapper_is-visible');
        this._carouselNodes[this._index+1].classList.add('carousel__content-item-wrapper_is-visible');
        this._index++;
      }
    }
  }

  _appendData = ()=>{
    this._content = this._rootElem.querySelector('.js-carousel__content');
    this._carouselNodes = this._content.querySelectorAll('.js-carousel__content-item-wrapper');
    this._carouselNodes.forEach((elem,index)=>{
      if(index===0){
        elem.classList.add('carousel__content-item-wrapper_is-visible')
      }
    });
  }
}

document.querySelectorAll('.js-carousel').forEach(elem=>new Carousel(elem));