import { CursoDialogComponent } from './../curso-dialog/curso-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { trigger, state, style, transition, keyframes, animate } from '../../../../node_modules/@angular/animations';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
  animations: [ 
    trigger("container", [
      state('active', style({})),
      transition("inactive => active", [
        animate(1000, keyframes([
          style({
            transition: '.3s',
            top: '60px',
            transform: 'rotateX(150deg)',
            opacity: '0.3'
          })
        ]))
      ]),
    ]),
  ]
})
export class CursosComponent implements OnInit {

  arrayLinhaUm: any[] = [];
  arrayLinhaDois: any[] = [];
  currentState: String;
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.currentState = 'inactive';
    setTimeout(() => {
      this.currentState = 'active';
    }, 500);
    this.arrayLinhaUm = [
      {imagem: 'assets/cursos/informatica.jpg', titulo: 'Informática',
       informacoes: 'O aluno(a) estará apto a operar computadores como seus programas e recursos.', linha: 1},
      {imagem: 'assets/cursos/historia.jpg', titulo: 'História', informacoes: 'O aluno(a) aprenderá sobre história geral.', linha: 1},
      {imagem: 'assets/cursos/ingles.jpg', titulo: 'Inglês', informacoes: 'O aluno(a) aprenderá a dominar o inglês.', linha: 1},
      {imagem: 'assets/cursos/frances.jpg', titulo: 'Frânces',
       informacoes: 'O aluno(a) estará apto(a) a conversar em frânces fluentemente.', linha: 1}
  ];
    this.arrayLinhaDois = [
      {imagem: 'assets/cursos/russo.jpg', titulo: 'Russo', informacoes: 'O aluno(a) aprenderá a dominar o Russo.', linha: 2},
      {imagem: 'assets/cursos/enfermagem.jpg', titulo: 'Enfermagem',
      informacoes: 'O aluno(a) será treinado para poder atuar em um hospital.', linha: 2},
      {imagem: 'assets/cursos/pintura.jpg', titulo: 'Pintura', informacoes: 'O aluno(a) aprenderá pintura.', linha: 2},
      {imagem: 'assets/cursos/bordado.jpg', titulo: 'Bordado', informacoes: 'O aluno(a) aprenderá bordado.', linha: 2}
    ];
  }

  abrirDialog(curso) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      dados: curso
  };
    this.dialog.open(CursoDialogComponent, dialogConfig);
  }
}
