import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CadastroService } from '../cadastro.service';
import { User } from '../shared/models/user';
import { LoginService } from '../services/loginService';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-autocadastro',
  templateUrl: './autocadastro.component.html',
  styleUrls: ['./autocadastro.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})

export class AutoCadastroComponent {
 @ViewChild('formUsuario') formUsuario! : NgForm;
  user: User = new User();

  formData: any = {};

  

  constructor(private cadastroService: CadastroService,
              private loginService: LoginService,
              private router : Router) {}

  inserir() {

    if(this.formUsuario.valid) {
      const senha = this.gerarSenha();
      this.user.password = senha;
      this.loginService.inserir(this.user);
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

  enviarEmail(email: string, senha: string) {
    // Lógica para enviar um e-mail com a senha
    console.log(`Enviando e-mail para ${email} com a senha: ${senha}`);
    // Aqui você deve implementar o código para enviar um e-mail
  }
}

 


