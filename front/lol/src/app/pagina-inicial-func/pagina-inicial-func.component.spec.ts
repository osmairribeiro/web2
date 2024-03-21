import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaInicialFuncComponent } from './pagina-inicial-func.component';

describe('PaginaInicialFuncComponent', () => {
  let component: PaginaInicialFuncComponent;
  let fixture: ComponentFixture<PaginaInicialFuncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaInicialFuncComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaInicialFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
