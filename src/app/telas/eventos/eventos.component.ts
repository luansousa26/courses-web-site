import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, keyframes, animate } from '../../../../node_modules/@angular/animations';
import { MatDialogConfig, MatDialog } from '../../../../node_modules/@angular/material';
import { CursoDialogComponent } from '../curso-dialog/curso-dialog.component';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
  animations: [
    trigger("container", [
      state('active', style({})),
      transition("inactive => active", [
        animate(1000, keyframes([
          style({
            transition: '.9s',
            transform: 'rotateY(150deg)',
            opacity: '0'
          })
        ]))
      ]),
    ]),
  ]
})
export class EventosComponent implements OnInit {

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
      {
        imagem: 'assets/eventos/formatura.jpg', titulo: 'Encontro dos Formandos',
        informacoes: 'O aluno(a) estará apto a operar computadores como seus programas e reeventos.', linha: 1
      },
      { imagem: 'assets/eventos/formatura.jpg', titulo: 'test', informacoes: 'O aluno(a) aprenderá sobre história geral.', linha: 1 },
      { imagem: 'assets/eventos/formatura.jpg', titulo: 'teste', informacoes: 'O aluno(a) aprenderá a dominar o inglês.', linha: 1 },
      {
        imagem: 'assets/eventos/formatura.jpg', titulo: 'teste',
        informacoes: 'O aluno(a) estará apto(a) a conversar em frânces fluentemente.', linha: 1
      }
    ];
    this.arrayLinhaDois = [
      { imagem: 'assets/eventos/formatura.jpg', titulo: 'teste2', informacoes: 'O aluno(a) aprenderá a dominar o Russo.', linha: 2 },
      {
        imagem: 'assets/eventos/formatura.jpg', titulo: 'teste2',
        informacoes: 'O aluno(a) será treinado para poder atuar em um hospital.', linha: 2
      },
      { imagem: 'assets/eventos/formatura.jpg', titulo: 'teste55', informacoes: 'O aluno(a) aprenderá pintura.', linha: 2 },
      { imagem: 'assets/eventos/formatura.jpg', titulo: 'teste33', informacoes: 'O aluno(a) aprenderá bordado.', linha: 2 }
    ];
  }

  abrirDialog(evento) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      dados: evento
  };
    this.dialog.open(CursoDialogComponent, dialogConfig);
  }
}
