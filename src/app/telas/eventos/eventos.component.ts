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
        informacoes: 'O evento de formatura da turma B de informática  ocorreu no dia 10/07/2018.', linha: 1
      },
      { imagem: 'assets/eventos/ballet.jpg', titulo: 'Baile dos Cisnes',
       informacoes: 'Apresentação de nossos alunos de Ballet clássico.', linha: 1 },
      { imagem: 'assets/eventos/criancas.jpg', titulo: 'Dias das Crianças',
       informacoes: 'Traga seus filhos para conheçerem nossa escola e eles se divertirão com nossa programação de dia das crianças.', linha: 1 },
      {
        imagem: 'assets/eventos/idosos.jpg', titulo: 'Festa dos Idosos',
        informacoes: 'Quem disse que os maiores de 50 não de divertem? venham conosco ao baile dos idosos.', linha: 1
      }
    ];
    this.arrayLinhaDois = [
      { imagem: 'assets/eventos/hiphop.jpg', titulo: 'Show de HipHop', informacoes: 'Show de Hip-Hop dos nossos alunos', linha: 2 },
      {
        imagem: 'assets/eventos/palestra.jpg', titulo: 'Palestra',
        informacoes: 'Palestra sobre Tecnologias para internet.', linha: 2
      },
      { imagem: 'assets/eventos/pinturas.jpg', titulo: 'Pinturas', informacoes: 'O aluno(a) aprenderá pintura.', linha: 2 },
      { imagem: 'assets/eventos/sangue.jpg', titulo: 'Doação de sangue', informacoes: 'O aluno(a) aprenderá bordado.', linha: 2 }
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
