import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMoeda]',
  standalone: true
})
export class MoedaDirective {
  private currencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const input = this.el.nativeElement;
    let value = input.value.replace(/\D/g, ''); // Mantém apenas dígitos

    // Remover zeros à esquerda
    value = value.replace(/^0+/, '');

    if (value.length > 0) {
      // Converte o valor para um número
      const numericValue = parseFloat(value) / 100;

      // Formata o valor como moeda
      const formattedValue = this.currencyFormatter.format(numericValue);

      // Atualiza o valor do input
      input.value = formattedValue;

      // Mantém a posição do cursor
      const start = input.selectionStart;
      const end = input.selectionEnd;
      input.setSelectionRange(start, end);
    }
  }
}
