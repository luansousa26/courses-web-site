import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('conteudos', [
      state('active', style({})),
      transition('inactive => active', [
        animate(4000, keyframes([
          style({
            marginTop: '-4%'
          }),
        ])),
        animate(5000, keyframes([
          style({
            marginTop: '0px'
          }),
        ]))
      ]),
    ]),
  ]
})
export class HomeComponent implements OnInit, OnDestroy {

  imagensDisponiveis: any[] = [];
  controlador = -1;
  lat = -23.2828262;
  lng = -46.7455076;
  navIsFixed: boolean;
  controle: any;
  currentState: any;
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.currentState = 'inactive';
    setTimeout(() => {
      this.currentState = 'active';
    }, 500);
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
