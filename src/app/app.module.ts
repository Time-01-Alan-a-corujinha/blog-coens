import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MenuComponent } from './components/menu/menu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { LoginComponent } from './pages/login/login.component';
import { InputCustomComponent } from './components/input-custom/input-custom.component';
import { BoxtextComponent } from './components/boxtext/boxtext.component';
import { MeusPostsComponent } from './pages/noticias/meus-posts/meus-posts.component';
import { RecentesComponent } from './pages/noticias/recentes/recentes.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { SafePipePipe } from './components/safe-pipe/safe-pipe.pipe';
import { PosGraduacaoComponent } from './pages/pos-graduacao/pos-graduacao.component';
import { ConhecaOAlanComponent } from './pages/conheca-o-alan/conheca-o-alan.component';
import { DescricaoCursoComponent } from './pages/curso/descricao-curso/descricao-curso.component';
import { MatrizCurricularComponent } from './pages/curso/matriz-curricular/matriz-curricular.component';
import { DocentesComponent } from './pages/coens/docentes/docentes.component';
import { CoordenacaoComponent } from './pages/coens/coordenacao/coordenacao.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuComponent,
    LoginComponent,
    InputCustomComponent,
    BoxtextComponent,
    MeusPostsComponent,
    RecentesComponent,
    FooterComponent,
    SafePipePipe,
    PosGraduacaoComponent,
    ConhecaOAlanComponent,
    DescricaoCursoComponent,
    MatrizCurricularComponent,
    DocentesComponent,
    CoordenacaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
    MatMenuModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
