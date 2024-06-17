import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciaSesionComponent } from './inicia-sesion.component';

describe('IniciaSesionComponent', () => {
  let component: IniciaSesionComponent;
  let fixture: ComponentFixture<IniciaSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IniciaSesionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciaSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
