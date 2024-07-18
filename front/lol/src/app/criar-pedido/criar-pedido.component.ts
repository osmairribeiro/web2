import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-pedido',
  standalone: true,
  imports: [],
  templateUrl: './criar-pedido.component.html',
  styleUrl: './criar-pedido.component.css',
})
export class CriarPedidoComponent {
  /*@ViewChild('createClothingForm') createClothingForm!: NgForm;
    clothing!: Clothing;

    //constructor(private clothingService: ClothingService, private router: Router) {}

    ngOnInit(): void {
        this.clothing = new Clothing();
    }

    public async save(): Promise<void> {
        if (this.createClothingForm.form.valid) {
        this.clothingService.saveClothing(this.clothing).subscribe({
            next: (clothing) => {
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
