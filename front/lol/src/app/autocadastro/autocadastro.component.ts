import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../shared/models/user';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../services/usuario.service';



@Component({
  selector: 'app-autocadastro',
  templateUrl: './autocadastro.component.html',
  styleUrls: ['./autocadastro.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})

export class AutoCadastroComponent implements OnInit {
 @ViewChild('formUsuario') formUsuario! : NgForm;
  user: User = new User();

  formData: any = {};

  

  constructor(private usuarioService: UsuarioService,
              private router : Router) {}
              
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  inserir() {
debugger;
    if(this.formUsuario.valid) {
      const senha = this.gerarSenha();
      this.user.password = senha;
      this.usuarioService.addUser(this.user);
      console.log('sua senha é: ' + senha)
       // Após processar o cadastro no backend, você pode gerar uma senha de 4 dígitos
      
      // Agora você pode enviar um e-mail com a senha para o usuário
      this.enviarEmail(this.user.email, senha);
      // Limpar o formulário após o envio bem-sucedido
      this.router.navigate(['/login'])

    }
  }

  gerarSenha(): string {
    // Lógica para gerar uma senha de 4 dígitos
    const senha = Math.floor(1000 + Math.random() * 9000).toString();
    return senha;
  }

  enviarEmail(email: string | undefined, senha: string) {
    // Lógica para enviar um e-mail com a senha
    console.log(`Enviando e-mail para ${email} com a senha: ${senha}`);
    // Aqui você deve implementar o código para enviar um e-mail
  }
}

 


