import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { FaqComponent } from './faq/faq.component';
import { PoliticaPrivacidadeComponent } from './politica-privacidade/politica-privacidade.component';
import { ContatoComponent } from './contato/contato.component';
import { DicasComponent } from './dicas/dicas.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { MapaSiteComponent } from './mapa-site/mapa-site.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'usuarios', component: ListaUsuarioComponent },
  { path: 'sobrenos', component: SobrenosComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'politica', component: PoliticaPrivacidadeComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'dicas', component: DicasComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'mapa-site', component: MapaSiteComponent},
  { path: 'carrinho', component: CarrinhoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
