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
      {imagem: 'assets/menu.png', curso: 'Informática', informacoes: 'teste', linha: 1},
      {imagem: 'assets/dados.png', curso: 'História', informacoes: 'teste', linha: 1},
      {imagem: 'assets/mente-coracao.png', curso: 'Inglês', informacoes: 'teste', linha: 1},
      {imagem: 'assets/nucleo.png', curso: 'Frânces', informacoes: 'teste', linha: 1}
  ];
    this.arrayLinhaDois = [
      {imagem: 'assets/nucleo.png', curso: 'Russo', informacoes: 'teste', linha: 2},
      {imagem: 'assets/mente-coracao.png', curso: 'Enfermagem', informacoes: 'teste', linha: 2},
      {imagem: 'assets/dados.png', curso: 'Pintura', informacoes: 'teste', linha: 2},
      {imagem: 'assets/menu.png', curso: 'Bordado', informacoes: 'teste', linha: 2}
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
