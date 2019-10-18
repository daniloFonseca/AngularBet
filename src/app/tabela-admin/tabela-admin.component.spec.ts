import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaAdminComponent } from './tabela-admin.component';

describe('TabelaAdminComponent', () => {
  let component: TabelaAdminComponent;
  let fixture: ComponentFixture<TabelaAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
