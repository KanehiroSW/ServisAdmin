import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistorialReportesPage } from './historial-reportes.page';

describe('HistorialReportesPage', () => {
  let component: HistorialReportesPage;
  let fixture: ComponentFixture<HistorialReportesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialReportesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
