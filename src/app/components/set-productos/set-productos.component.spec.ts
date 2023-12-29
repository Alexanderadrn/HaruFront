import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetProductosComponent } from './set-productos.component';

describe('SetProductosComponent', () => {
  let component: SetProductosComponent;
  let fixture: ComponentFixture<SetProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetProductosComponent]
    });
    fixture = TestBed.createComponent(SetProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
