import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaxShell } from './rax-shell.component';

describe('RaxShell', () => {
  let component: RaxShell;
  let fixture: ComponentFixture<RaxShell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaxShell ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaxShell);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
