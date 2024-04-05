import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutFuncComponent } from './manut-func.component';

describe('ManutFuncComponent', () => {
  let component: ManutFuncComponent;
  let fixture: ComponentFixture<ManutFuncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManutFuncComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManutFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
