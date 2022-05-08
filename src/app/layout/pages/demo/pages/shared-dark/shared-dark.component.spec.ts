import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedDarkComponent } from './shared-dark.component';

describe('SharedDarkComponent', () => {
  let component: SharedDarkComponent;
  let fixture: ComponentFixture<SharedDarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedDarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
