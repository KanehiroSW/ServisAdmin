import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrincipalMantPage } from './principal-mant.page';

describe('PrincipalMantPage', () => {
  let component: PrincipalMantPage;
  let fixture: ComponentFixture<PrincipalMantPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalMantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
