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
      {imagem: 'assets/menu.png', curso: 'Informática', informacoes: 'O aluno(a) irá aprender sobre informática.', linha: 1},
      {imagem: 'assets/dados.png', curso: 'História', informacoes: 'O aluno(a) irá aprender sobre a história mundial.', linha: 1},
      {imagem: 'assets/mente-coracao.png', curso: 'Inglês', informacoes: 'O aluno(a) estará apto a falar inglês.', linha: 1},
      {imagem: 'assets/nucleo.png', curso: 'Frânces', informacoes: 'O aluno(a) estará apto a falar Frânces.', linha: 1}
  ];
    this.arrayLinhaDois = [
      {imagem: 'assets/nucleo.png', curso: 'Russo', informacoes: 'O aluno(a) estará apto a falar Russo.', linha: 2},
      {imagem: 'assets/mente-coracao.png', curso: 'Enfermagem', informacoes: 'O aluno(a) está apto a atuar em hospitais.', linha: 2},
      {imagem: 'assets/dados.png', curso: 'Pintura', informacoes: 'O aluno(a) está apto a desenhar.', linha: 2},
      {imagem: 'assets/menu.png', curso: 'Bordado', informacoes: 'O aluno(a) está apto a realizar bordados.', linha: 2}
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
