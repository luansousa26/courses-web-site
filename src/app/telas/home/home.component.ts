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
      'assets/imagem1.jpg',
      'assets/imagem2.jpg',
      'assets/imagem3.jpg'
    ];
    this.startTimer();
  }

  displayNextImage() {
    this.controlador = (this.controlador === this.imagensDisponiveis.length - 1) ? 0 : this.controlador + 1;
    (<HTMLImageElement>document.getElementById('img')).src = this.imagensDisponiveis[this.controlador];
  }

  displayPreviousImage() {
    this.controlador = (this.controlador <= 0) ? this.imagensDisponiveis.length - 1 : this.controlador - 1;
    (<HTMLImageElement>document.getElementById("img")).src = this.imagensDisponiveis[this.controlador];
  }

  startTimer() {
    setInterval(this.displayNextImage(), 3000);
  }

}
