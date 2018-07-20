<mat-dialog-content>
  <div>
    <span id="titulo">{{curso.curso}}</span>
  </div>
  <div id="detalhes">
    <span>{{curso.informacoes}}</span>
  </div>
</mat-dialog-content>
<mat-dialog-actions>
  <button class="mat-raised-button" (click)="fechar()">Fechar</button>
</mat-dialog-actions>
