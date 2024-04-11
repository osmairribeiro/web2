import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RoupaService } from '../../services/roupa.service';
import { Roupa } from '../../shared/models/roupas';
import { ConfirmaComponent } from '../confirmModal/confirma/confirma.component';

@Component({
  selector: 'app-roupa',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
    
  ],
  templateUrl: './roupa.component.html',
  styleUrl: './roupa.component.css'
})
export class RoupaComponent implements OnInit {
  
  roupas: Roupa[] = [];
  roupaSelecionada: Roupa = {id: 0, nome: '', preco: 0, prazo: 0};
  editando: boolean = false;
  modalRef!: BsModalRef;
  idParaDeletar: number | null = null;

  constructor(
    private roupaService: RoupaService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.listaRoupas();
  }
  
  listaRoupas(): void {
    this.roupaService.getRoupa().subscribe({
      next: (roupas) => this.roupas = roupas,
      error: (err) => console.error(err),
      complete: () => console.info('Lista de roupas completa')
    });
  }

  onSubmit(): void {
    if (this.roupaSelecionada.id === 0) {
      this.addRoupa(this.roupaSelecionada);
    } else {
      this.updateRoupa(this.roupaSelecionada);
    }
    this.roupaSelecionada = {id: 0, nome: '', preco: 0, prazo: 0};
    this.editando = false;
  }

  iniciarInclusao(): void {
    this.roupaSelecionada = {id: 0, nome: '', preco: 0, prazo: 0};
    this.editando = true;
  }

  editarRoupa(roupa: Roupa): void {
    this.roupaSelecionada = Object.assign({}, roupa);
    this.editando = true;
  }

  cancelaEdicao(): void {
    this.roupaSelecionada = {id: 0, nome: '', preco: 0, prazo: 0};
    this.editando = false;
  }

  addRoupa(roupa: Roupa): void {
    if (this.roupas.length === 0) {
      roupa.id = 1;
    } else {
      const idAtual = Math.max(...this.roupas.map(r => r.id));
      roupa.id = idAtual + 1;
    }
    this.roupaService.addRoupa(roupa).subscribe({
      next: (novaRoupa) => this.roupas.push(novaRoupa),
      error: (err) => console.error(err),
      complete: () => console.info('Roupa inserida com sucesso')
    });
  }

  updateRoupa(roupa: Roupa): void {
    this.roupaService.updateRoupa(roupa).subscribe({
      next: (roupaAtualizada) => {
        const index = this.roupas.findIndex(r => r.id === roupaAtualizada.id);
        if (index > -1) {
          this.roupas[index] = roupaAtualizada;
        }
      },
      error: (err) => console.error(err),
      complete: () => console.info('Atualização efetuada com sucesso')
    });
  }

  deleteRoupa(id: number): void {
    this.idParaDeletar = id;
    this.modalRef = this.modalService.show('./confirma.component.html'); 
  }

  confirmDelete(): void {
    if(this.idParaDeletar === null) return;
    this.roupaService.deleteRoupa(this.idParaDeletar).subscribe({
      next: () => {
        this.roupas = this.roupas.filter(r => r.id !== this.idParaDeletar);
        this.idParaDeletar = null;
        this.modalRef.hide();
      },
      error: (err) => console.error(err),
      complete: () => console.info('Roupa deletada com sucesso')
    });
  }
}
