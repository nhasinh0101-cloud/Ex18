import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GroupCustomerComponent } from './group-customer-component';

describe('GroupCustomerComponent', () => {
  let component: GroupCustomerComponent;
  let fixture: ComponentFixture<GroupCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupCustomerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GroupCustomerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
