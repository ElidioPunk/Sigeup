import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilEstudantePage } from './perfil-estudante.page';

describe('PerfilEstudantePage', () => {
  let component: PerfilEstudantePage;
  let fixture: ComponentFixture<PerfilEstudantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilEstudantePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilEstudantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
