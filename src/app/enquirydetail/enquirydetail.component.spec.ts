import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquirydetailComponent } from './enquirydetail.component';

describe('EnquirydetailComponent', () => {
  let component: EnquirydetailComponent;
  let fixture: ComponentFixture<EnquirydetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnquirydetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquirydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
