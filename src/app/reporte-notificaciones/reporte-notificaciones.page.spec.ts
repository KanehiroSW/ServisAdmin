import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReporteNotificacionesPage } from './reporte-notificaciones.page';

describe('ReporteNotificacionesPage', () => {
  let component: ReporteNotificacionesPage;
  let fixture: ComponentFixture<ReporteNotificacionesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteNotificacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
