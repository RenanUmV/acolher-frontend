import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InicioComponent } from './inicio/inicio.component';
import { FeedComponent } from './feed/feed.component';
import { TemaComponent } from './tema/tema.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ContatoComponent } from './contato/contato.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PerfilUserComponent } from './perfil-user/perfil-user.component';
import { OrderModule } from 'ngx-order-pipe';
import { AlertasComponent } from './alertas/alertas.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { CadastroAcolhedorComponent } from './cadastro-acolhedor/cadastro-acolhedor.component';
import { CadastroAcolhidoComponent } from './cadastro-acolhido/cadastro-acolhido.component';
import { OngsComponent } from './ongs/ongs.component';






@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    LoginComponent,
    CadastroComponent,
    CadastroAcolhedorComponent,
    InicioComponent,
    FeedComponent,
    TemaComponent,
    TemaEditComponent,
    TemaDeleteComponent,
    PostagemEditComponent,
    PostagemDeleteComponent,
    ContatoComponent,
    PerfilComponent,
    PerfilUserComponent,
    AlertasComponent,
    CadastroAcolhidoComponent,
    OngsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IvyCarouselModule,
    ModalModule.forRoot(),
    OrderModule
  ],
  providers: [{provide: LocationStrategy,
    useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
