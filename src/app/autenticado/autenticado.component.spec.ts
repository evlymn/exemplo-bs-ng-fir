import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutenticadoComponent } from './autenticado.component';

describe('AutenticadoComponent', () => {
  let component: AutenticadoComponent;
  let fixture: ComponentFixture<AutenticadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutenticadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutenticadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
