import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BrowserModule } from '@angular/platform-browser';
import { MenuComponent } from './components/menu/menu.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { PosGraduacaoComponent } from './pages/pos-graduacao/pos-graduacao.component';
import { DescricaoCursoComponent } from './pages/curso/descricao-curso/descricao-curso.component';
import { MatrizCurricularComponent } from './pages/curso/matriz-curricular/matriz-curricular.component';
import { DocentesComponent } from './pages/coens/docentes/docentes.component';
import { CoordenacaoComponent } from './pages/coens/coordenacao/coordenacao.component';
import { ProjetosExtensaoComponent } from './pages/atividades-producao/projetos-extensao/projetos-extensao.component';
import { EstagioCurricularComponent } from './pages/curso/estagio-curricular/estagio-curricular.component';
import { InternacionalizacaoComponent } from './pages/curso/internacionalizacao/internacionalizacao.component';
import { LogomarcasComponent } from './pages/outros/logomarcas/logomarcas.component';
import { LegislacaoComponent } from './pages/outros/legislacao/legislacao.component';
import { HorarioCalendarioComponent } from './pages/outros/horario-calendario/horario-calendario.component';
import { ProducaoAcademicaComponent } from './pages/atividades-producao/producao-academica/producao-academica.component';
import { AtividadesComplementaresComponent } from './pages/curso/atividades-complementares/atividades-complementares.component';
import { TccComponent } from './pages/curso/tcc/tcc.component';
import { GruposDePesquisaComponent } from './pages/atividades-producao/grupos-de-pesquisa/grupos-de-pesquisa.component';
import { CentroAcademicoComponent } from './pages/curso/centro-academico/centro-academico.component';
import { NucleoDocenteEstruturanteComponent } from './pages/coens/nucleo-docente-estruturante/nucleo-docente-estruturante.component';
import { ColegiadoComponent } from './pages/coens/colegiado/colegiado.component';

const routes: Routes = [
  {path: '', redirectTo: 'menu', pathMatch: 'full'},
  {path: 'menu', component: MenuComponent, children: [
    {path: '', component: InicioComponent},
    {path: 'curso', children: [
      {path:'', component: DescricaoCursoComponent},
      {path:'matriz-curricular', component: MatrizCurricularComponent},
      {path:'atividades-complementares', component: AtividadesComplementaresComponent},
      {path:'estagio-curricular', component: EstagioCurricularComponent},
      {path:'tcc', component: TccComponent},
      {path:'centro-academico', component: CentroAcademicoComponent},
      {path:'internacionalizacao', component: InternacionalizacaoComponent}
    ]},
    {path: 'coens', children: [
      {path: 'coordenacao', component: CoordenacaoComponent},
      {path: 'docentes', component: DocentesComponent},
      {path: 'nucleo-docente', component: NucleoDocenteEstruturanteComponent},
      {path: 'colegiado', component: ColegiadoComponent}
    ]},
    {path: 'noticias', component: NoticiasComponent},
    {path: 'atividades-producao', children: [
      {path: 'producao-academica', component: ProducaoAcademicaComponent},
      {path: 'projetos-extensao', component: ProjetosExtensaoComponent},
      {path: 'grupos-de-pesquisa', component: GruposDePesquisaComponent}
    ]},
    {path: 'outros', children: [
      {path: 'horario-calendario', component: HorarioCalendarioComponent},
      {path: 'legislacao', component: LegislacaoComponent},
      {path: 'logomarcas', component: LogomarcasComponent}
    ]},
    {path: 'pos-graduacao', component: PosGraduacaoComponent}
  ]},
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
