import { Component } from '@angular/core';

@Component({
  selector: 'app-consultar-pedido',
  standalone: true,
  imports: [],
  templateUrl: './consultar-pedido.component.html',
  styleUrl: './consultar-pedido.component.css',
})
export class ConsultarPedidoComponent {
  /*@ViewChild('editClothingForm') editClothingForm!: NgForm;
    clothing!: Clothing;
  
    constructor(
        private clothingService: ClothingService,
        private router: Router,
        private route: ActivatedRoute,
    ) {}
  
    ngOnInit(): void {
      const id: number = +this.route.snapshot.params['id'];
  
      this.clothingService.findById(id).subscribe(clothingResponseDto => {
        if (clothingResponseDto.entity === null) {
          throw new Error('Clothing not found. ID: ' + id);
        }
  
        this.clothing = clothingResponseDto.entity!;
      });
    }
  
    public async save(): Promise<void> {
      if (this.editClothingForm.form.valid) {
        this.clothingService.saveClothing(this.clothing).subscribe({
          next: (dto) => {
            this.router.navigate([RoutesEnum.LIST_CLOTHINGS])
          },
          error: (err) => {
            alert(err.error.message);
            console.log(err.error.message);
          },
        });
      }
    }*/
}
