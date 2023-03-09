import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusRegComponent } from './cus-reg.component';

describe('CusRegComponent', () => {
  let component: CusRegComponent;
  let fixture: ComponentFixture<CusRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CusRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
