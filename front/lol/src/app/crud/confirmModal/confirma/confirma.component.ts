import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirma',
  standalone: true,
  imports: [],
  templateUrl: './confirma.component.html',
  styleUrl: './confirma.component.css'
})
export class ConfirmaComponent {

  constructor(public bsModalRef: BsModalRef) {}

  onConfirm(): void {
    
    this.bsModalRef.hide();
  }

  onDecline(): void {
    this.bsModalRef.hide();
  }

  onClose(): void {
    this.bsModalRef.hide();
  }

}
