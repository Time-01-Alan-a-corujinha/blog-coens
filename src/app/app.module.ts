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
import { ProjetosExtensaoComponent } from './pages/atividades-producao/projetos-extensao/projetos-extensao.component';
import { EstagioCurricularComponent } from './pages/curso/estagio-curricular/estagio-curricular.component';
import { InternacionalizacaoComponent } from './pages/curso/internacionalizacao/internacionalizacao.component';
import { LogomarcasComponent } from './pages/outros/logomarcas/logomarcas.component';
import { LegislacaoComponent } from './pages/outros/legislacao/legislacao.component';
import { HorarioCalendarioComponent } from './pages/outros/horario-calendario/horario-calendario.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ProducaoAcademicaComponent } from './pages/atividades-producao/producao-academica/producao-academica.component';
import { MatTableModule } from '@angular/material/table';
import { AtividadesComplementaresComponent } from './pages/curso/atividades-complementares/atividades-complementares.component';

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
    ProjetosExtensaoComponent,
    EstagioCurricularComponent,
    InternacionalizacaoComponent,
    LogomarcasComponent,
    LegislacaoComponent,
    HorarioCalendarioComponent,
    ProducaoAcademicaComponent,
    AtividadesComplementaresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
    MatMenuModule,
    HttpClientModule,
    MatExpansionModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
