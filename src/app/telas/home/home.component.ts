import { Component, OnInit, Inject, HostListener } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";
import { OnDestroy } from "@angular/core";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, OnDestroy {
  imagensDisponiveis: any[] = [];
  controlador = -1;
  lat = -23.2828262;
  lng = -46.7455076;
  navIsFixed: boolean;
  controle: any;
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    this.imagensDisponiveis = [
      "assets/background/imagem1.jpg",
      "assets/background/imagem2.jpg",
      "assets/background/imagem3.jpg",
      "assets/background/imagem5.jpg"
    ];
    this.controle = setInterval(() => {
      this.startTimer();
    }, 7000);
  }
  ngOnDestroy() {
    clearInterval(this.controle);
  }
  private displayNextImage(): void {
    const styleCss = <HTMLImageElement>document.getElementById("img");
    styleCss.style.opacity = "0.1";
    styleCss.style.transition = "opacity 1s linear";
    // Timeout para alterar a imagem
    setTimeout(() => {
      this.controlador =
        this.controlador === this.imagensDisponiveis.length - 1
          ? 0
          : this.controlador + 1;
      styleCss.src = this.imagensDisponiveis[this.controlador];
      styleCss.style.opacity = "1";
    }, 600);
  }

  private displayPreviousImage(): void {
    this.controlador =
      this.controlador <= 0
        ? this.imagensDisponiveis.length - 1
        : this.controlador - 1;
    (<HTMLImageElement>(
      document.getElementById("img")
    )).src = this.imagensDisponiveis[this.controlador];
  }

  private startTimer(): void {
    this.displayNextImage();
  }
}
