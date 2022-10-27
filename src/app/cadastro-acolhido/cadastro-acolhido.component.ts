import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from '../model/UsuarioModel';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro-acolhido',
  templateUrl: './cadastro-acolhido.component.html',
  styleUrls: ['./cadastro-acolhido.component.css']
})
export class CadastroAcolhidoComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel
  confirmarSenha: string
  estado: string

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  userEstado(event: any){
    this.estado = event.target.value
  }

  cadastrar(){
    this.usuario.tipo = "Acolhido"

    if(this.usuario.senha != this.confirmarSenha){

      alert('As senhas estão incorretas.')
    } else {
      this.authService.cadastrar(this.usuario).subscribe((resp: UsuarioModel) => {
        this.usuario = resp
        this.router.navigate(['/login'])
        this.alertas.showAlertSuccess('Usuário cadastrado com sucesso!')
      })
    }
  }


}
