class Article {
  constructor(domElement) {
    this.domElement = domElement;
    this.expandButton = domElement.querySelector('.expandButton');
    this.expandButton.textContent = 'click to expand';
    this.expandButton.addEventListener('click', () => this.expandArticle());
  }

  expandArticle() {
    this.domElement.classList.toggle('article-open');
    if (this.domElement.classList.contains('article-open')) {
      console.log('ARTICLE opening');
      this.expandButton.textContent = 'click to close';
      TweenLite.to(this.domElement, 1, {height:'500px', overflow:'auto', ease:Power4.easeOut});
    } else {
      console.log('ARTICLE closing');
      this.expandButton.textContent = 'click to expand';
      TweenLite.to(this.domElement, 1, {height:'50px', overflow:'hidden', ease:Power4.easeOut});
    } 
  }
}

let articles = document.querySelectorAll('.article');
articles.forEach(domElement => new Article(domElement));