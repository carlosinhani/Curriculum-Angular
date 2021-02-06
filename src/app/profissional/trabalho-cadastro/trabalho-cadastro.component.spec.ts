import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabalhoCadastroComponent } from './trabalho-cadastro.component';

describe('TrabalhoCadastroComponent', () => {
  let component: TrabalhoCadastroComponent;
  let fixture: ComponentFixture<TrabalhoCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabalhoCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabalhoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
