import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BrowserModule } from '@angular/platform-browser';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';
import { RecentesComponent } from './pages/noticias/recentes/recentes.component';
import { MeusPostsComponent } from './pages/noticias/meus-posts/meus-posts.component';
import { PosGraduacaoComponent } from './pages/pos-graduacao/pos-graduacao.component';
import { ConhecaOAlanComponent } from './pages/conheca-o-alan/conheca-o-alan.component';
import { DescricaoCursoComponent } from './pages/curso/descricao-curso/descricao-curso.component';
import { MatrizCurricularComponent } from './pages/curso/matriz-curricular/matriz-curricular.component';
import { DocentesComponent } from './pages/coens/docentes/docentes.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'menu', pathMatch: 'full'},
  {path: 'menu', component: MenuComponent, children: [
    {path: '', component: InicioComponent},
    {path: 'curso', children: [
      {path:'', component: DescricaoCursoComponent},
      {path:'matriz-curricular', component: MatrizCurricularComponent}
    ]},
    {path: 'noticias', children:[
      {path:'', component:RecentesComponent},
      {path:'meus-posts', component:MeusPostsComponent}
    ]},
    {path: 'pos-graduacao', component: PosGraduacaoComponent},
    {path: 'conheca', component: ConhecaOAlanComponent},
    {path:'coens', children:[
      {path:'docentes', component: DocentesComponent}
    ]}
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
