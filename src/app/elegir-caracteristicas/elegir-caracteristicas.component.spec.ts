import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElegirCaracteristicasComponent } from './elegir-caracteristicas.component';

describe('ElegirCaracteristicasComponent', () => {
  let component: ElegirCaracteristicasComponent;
  let fixture: ComponentFixture<ElegirCaracteristicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElegirCaracteristicasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElegirCaracteristicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
