import { PostagemModel } from "./PostagemModel"

export class UsuarioModel{
  public id: number
  public nome: string
  public usuario: string
  public telefone:string
  public estado:string
  public senha: string
  public foto: string
  public tipo: string
  public postagem: PostagemModel[]
}
