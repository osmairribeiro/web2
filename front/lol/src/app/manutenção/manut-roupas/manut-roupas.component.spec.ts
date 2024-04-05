import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutRoupasComponent } from './manut-roupas.component';

describe('ManutRoupasComponent', () => {
  let component: ManutRoupasComponent;
  let fixture: ComponentFixture<ManutRoupasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManutRoupasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManutRoupasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
