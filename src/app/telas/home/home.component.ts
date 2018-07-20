import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { OnDestroy } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  imagensDisponiveis: any[] = [];
  controlador = -1;
  lat = -23.2828262;
  lng = -46.7455076;
  navIsFixed: boolean;
  controle: any;
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.imagensDisponiveis = [
      'assets/background/imagem1.jpg',
      'assets/background/imagem2.jpg',
      'assets/background/imagem3.jpg',
      'assets/background/imagem5.jpg'
    ];
    this.controle = setInterval(() => {this.startTimer(); }, 7000);
  }
  ngOnDestroy() {
  clearInterval(this.controle);
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) {
      document.getElementById('myBtn').style.display = 'block';
    } else {
      document.getElementById('myBtn').style.display = 'none';

        }
}
 topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

  displayNextImage() {
    (<HTMLImageElement>document.getElementById('img')).style.opacity = '0.1';
    (<HTMLImageElement>document.getElementById('img')).style.transition = 'opacity 1s linear';
    setTimeout(() => {
      this.controlador = (this.controlador === this.imagensDisponiveis.length - 1) ? 0 : this.controlador + 1;
      (<HTMLImageElement>document.getElementById('img')).src = this.imagensDisponiveis[this.controlador];
      (<HTMLImageElement>document.getElementById('img')).style.opacity = '1';
    }, 600);
  }

  displayPreviousImage() {
    this.controlador = (this.controlador <= 0) ? this.imagensDisponiveis.length - 1 : this.controlador - 1;
    (<HTMLImageElement>document.getElementById('img')).src = this.imagensDisponiveis[this.controlador];
  }

  startTimer() {
      this.displayNextImage();
  }

}