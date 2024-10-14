import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprovedHomeComponent } from './improved-home.component';

describe('ImprovedHomeComponent', () => {
  let component: ImprovedHomeComponent;
  let fixture: ComponentFixture<ImprovedHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImprovedHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImprovedHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
