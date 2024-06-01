import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultadoHistorialPage } from './resultado-historial.page';

describe('ResultadoHistorialPage', () => {
  let component: ResultadoHistorialPage;
  let fixture: ComponentFixture<ResultadoHistorialPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoHistorialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
