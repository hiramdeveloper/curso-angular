import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSimpleComponent } from './formulario-simple.component';

describe('FormularioSimpleComponent', () => {
  let component: FormularioSimpleComponent;
  let fixture: ComponentFixture<FormularioSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
