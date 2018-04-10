import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSemilleroComponent } from './crear-semillero.component';

describe('CrearSemilleroComponent', () => {
  let component: CrearSemilleroComponent;
  let fixture: ComponentFixture<CrearSemilleroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearSemilleroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearSemilleroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
