import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAcolhidoComponent } from './cadastro-acolhido.component';

describe('CadastroAcolhidoComponent', () => {
  let component: CadastroAcolhidoComponent;
  let fixture: ComponentFixture<CadastroAcolhidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroAcolhidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroAcolhidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
