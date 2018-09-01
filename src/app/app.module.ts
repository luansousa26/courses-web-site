import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { EventosComponent } from './telas/eventos/eventos.component';
import { BackTopComponent } from './layout/back-top/back-top.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { isDevMode } from '@angular/core';
export function HttpLoaderFactory(http: HttpClient) {
  if (isDevMode()) {
    return new TranslateHttpLoader(http);
  }{
    return new TranslateHttpLoader(http, './courses-web-site/assets/i18n/');
  }
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CursosComponent,
    SobreComponent,
    FooterComponent,
    CursoDialogComponent,
    EventosComponent,
    BackTopComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDamuwvDFPTTlR9Cv1RUAQxR-z3dntAeu8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CursoDialogComponent]
})
export class AppModule { }
