import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElegirDestinoComponent } from './elegir-destino.component';

describe('ElegirDestinoComponent', () => {
  let component: ElegirDestinoComponent;
  let fixture: ComponentFixture<ElegirDestinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElegirDestinoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElegirDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
