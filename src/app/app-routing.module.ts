import { TabelaAdminComponent } from './tabela-admin/tabela-admin.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabelaComponent } from './tabela/tabela.component';


const routes: Routes = [{ path:'', component: TabelaComponent},
                        {path:'t2', component:TabelaAdminComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 