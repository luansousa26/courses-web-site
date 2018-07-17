import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imagensDisponiveis: any[] = [];
  controlador = -1;
  constructor() { }

  ngOnInit() {
    this.imagensDisponiveis = [
      'assets/background/imagem1.jpg',
      'assets/background/imagem2.jpg',
      'assets/background/imagem3.jpg',
      'assets/background/imagem5.jpg'
    ];
    this.startTimer();
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
    setInterval(() => {
      this.displayNextImage();
    }, 7000);
  }

}
