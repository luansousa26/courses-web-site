import { CursoDialogComponent } from './../curso-dialog/curso-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  arrayLinhaUm: any[] = [];
  arrayLinhaDois: any[] = [];
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.arrayLinhaUm = [
      {imagem: 'assets/menu.png', curso: 'Informática',
       informacoes: 'O aluno(a) estará apto a operar computadores como seus programas e recursos.', linha: 1},
      {imagem: 'assets/dados.png', curso: 'História', informacoes: 'O aluno(a) aprenderá sobre história geral.', linha: 1},
      {imagem: 'assets/mente-coracao.png', curso: 'Inglês', informacoes: 'O aluno(a) aprenderá a dominar o inglês.', linha: 1},
      {imagem: 'assets/nucleo.png', curso: 'Frânces',
       informacoes: 'O aluno(a) estará apto(a) a conversar em frânces fluentemente.', linha: 1}
  ];
    this.arrayLinhaDois = [
      {imagem: 'assets/nucleo.png', curso: 'Russo', informacoes: 'O aluno(a) aprenderá a dominar o Russo.', linha: 2},
      {imagem: 'assets/mente-coracao.png', curso: 'Enfermagem',
      informacoes: 'O aluno(a) será treinado para poder atuar em um hospital.', linha: 2},
      {imagem: 'assets/dados.png', curso: 'Pintura', informacoes: 'O aluno(a) aprenderá pintura.', linha: 2},
      {imagem: 'assets/menu.png', curso: 'Bordado', informacoes: 'O aluno(a) aprenderá bordado.', linha: 2}
    ];
  }

  abrirDialog(curso) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      curso: curso
  };
    this.dialog.open(CursoDialogComponent, dialogConfig);
  }
}
