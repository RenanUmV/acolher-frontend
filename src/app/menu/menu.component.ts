import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  logado(){
    let ok: boolean = false

    if(environment.token != ''){
      ok = true
    }

    return ok
  }

  sair(){
    this.router.navigate(['/inicio'])
    environment.token=''
    environment.foto=''
    environment.nome=''
    environment.id = 0

  }
  
}
