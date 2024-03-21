import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CadastroService } from '../cadastro.service';


@Component({
  selector: 'app-autocadastro',
  templateUrl: './autocadastro.component.html',
  styleUrls: ['./autocadastro.component.css']
})
export class RegistroComponent {
  formData: any = {};

  constructor(private cadastroService: CadastroService) {}

  submitForm() {
    this.cadastroService.salvarCadastro(this.formData);
    this.formData = {}; // Limpar o formulário após o envio

     // Aqui você pode enviar os dados do formulário para o seu backend para processamento
    // Por exemplo, você pode usar um serviço HTTP para enviar os dados para um endpoint no seu servidor

    // Após processar o cadastro no backend, você pode gerar uma senha de 4 dígitos
    const senha = this.gerarSenha();

    // Agora você pode enviar um e-mail com a senha para o usuário
    this.enviarEmail(this.formData.email, senha);

    // Limpar o formulário após o envio bem-sucedido
    this.formData = {};
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


