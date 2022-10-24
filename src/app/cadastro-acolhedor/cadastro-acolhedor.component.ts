import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from '../model/UsuarioModel';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro-acolhedor',
  templateUrl: './cadastro-acolhedor.component.html',
  styleUrls: ['./cadastro-acolhedor.component.css']
})
export class CadastroAcolhedorComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel
  confirmarSenha: string
  tipoUsuario: string

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

  tipoUser(event: any){
    this.tipoUsuario = event.target.value
  }

  cadastrar(){
    this.usuario.tipo = this.tipoUsuario

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
