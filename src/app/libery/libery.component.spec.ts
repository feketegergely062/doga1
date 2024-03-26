import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiberyComponent } from './libery.component';

describe('LiberyComponent', () => {
  let component: LiberyComponent;
  let fixture: ComponentFixture<LiberyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiberyComponent]
    });
    fixture = TestBed.createComponent(LiberyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
