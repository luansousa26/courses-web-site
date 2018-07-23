import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-curso-dialog',
  templateUrl: './curso-dialog.component.html',
  styleUrls: ['./curso-dialog.component.scss']
})
export class CursoDialogComponent implements OnInit {

  dado: any;
  constructor(private dialogRef: MatDialogRef<CursoDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
                this.dado = data.dados;
              }

  ngOnInit() {
  }
  fechar() {
    this.dialogRef.close();
}
}
