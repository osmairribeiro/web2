import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RoupaModalComponent } from '../roupaModal/roupa.modal';
import { RoupaService } from '../../../services/roupa.service';
//import { RoupaService } from '../../services/roupa.service';
//import { MoedaPipe } from '../../shared/pipes';
import { MoedaPipe } from '../../../shared/pipes';
import { ConfirmaComponent } from '../confirmModal/confirma/confirma.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

interface Roupa {
  id: number;
  nome: string;
  preco: number;
  prazo: number;
}

@Component({
  selector: 'app-roupa',
  standalone: true,
  templateUrl: './roupa.component.html',
  styleUrls: ['./roupa.component.css'],
  imports: [CommonModule, FormsModule, HttpClientModule, RoupaModalComponent, MoedaPipe],
  providers: [RoupaService]
})
export class RoupaComponent implements OnInit {
  //roupas: any[] = [];
  roupas: Roupa[] = [];
  roupaSelecionada: Roupa = { id: 0, nome: '', preco: 0, prazo: 0 };
  editando: boolean = false;
  showModal: boolean = false;
  modalRef?: BsModalRef;

  constructor(
    private roupaService: RoupaService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
        this.listaRoupas();
  }

  listaRoupas(): void {
    this.roupaService.getRoupa().subscribe({
      next: (roupas) => {
        this.roupas = roupas;
        console.log('Roupas recebidas:', roupas);
      },
      error: (err) => console.error(err),
      complete: () => console.info('Lista de roupas completa')
    });
  }

  iniciarInclusao() {
    console.log('Iniciar Inclusão');
    this.roupaSelecionada = { id: 0, nome: '', preco: 0, prazo: 0 };
    this.editando = true;
    this.showModal = true;
  }

  editarRoupa(roupa: Roupa) {
    console.log('Editar Roupa', roupa);
    this.roupaSelecionada = { ...roupa };
    this.editando = true;
    this.showModal = true;
  }

  salvarRoupa(roupa: Roupa) {
    console.log('Salvar Roupa', roupa);
    if (roupa.id) {
      const index = this.roupas.findIndex(r => r.id === roupa.id);
      this.roupas[index] = roupa;
    } else {
      roupa.id = this.roupas.length + 1;
      this.roupas.push(roupa);
    }
    this.cancelar();
  }

  cancelar() {
    console.log('Cancelar');
    this.editando = false;
    this.showModal = false;
  }



  deleteRoupa(id: number) {
    const initialState = {
      message: 'Tem certeza que deseja excluir?'
    };
    this.modalRef = this.modalService.show(ConfirmaComponent, {initialState});

    this.modalRef.content.onConfirm = () => {
      this.roupas = this.roupas.filter(roupa => roupa.id !== id);
      this.modalRef?.hide();
    };

    this.modalRef.content.onDecline = () => {
      this.modalRef?.hide();
    };
  }


  // deleteRoupa(id: number) {
  //   console.log('Deletar Roupa', id);
  //   this.roupas = this.roupas.filter(r => r.id !== id);
  // }
}
