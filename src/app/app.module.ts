import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HomeComponent } from './telas/home/home.component';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './rotas/app-routing.module';
import { CursosComponent } from './telas/cursos/cursos.component';
import { SobreComponent } from './telas/sobre/sobre.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CursoDialogComponent } from './telas/curso-dialog/curso-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CursosComponent,
    SobreComponent,
    FooterComponent,
    CursoDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDamuwvDFPTTlR9Cv1RUAQxR-z3dntAeu8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CursoDialogComponent]
})
export class AppModule { }
