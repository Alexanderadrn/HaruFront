import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetComprasComponent } from './set-compras.component';

describe('SetComprasComponent', () => {
  let component: SetComprasComponent;
  let fixture: ComponentFixture<SetComprasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetComprasComponent]
    });
    fixture = TestBed.createComponent(SetComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
