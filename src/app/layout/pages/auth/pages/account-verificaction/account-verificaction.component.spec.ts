import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountVerificactionComponent } from './account-verificaction.component';

describe('AccountVerificactionComponent', () => {
  let component: AccountVerificactionComponent;
  let fixture: ComponentFixture<AccountVerificactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountVerificactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountVerificactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
