import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {
  MatToolbarModule,
  MatSnackBarModule,
  MatDialogModule
      } from '@angular/material';
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatGridListModule,
    MatAutocompleteModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  declarations: []
})
export class MaterialModule { }
