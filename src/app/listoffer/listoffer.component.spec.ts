import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofferComponent } from './listoffer.component';

describe('ListofferComponent', () => {
  let component: ListofferComponent;
  let fixture: ComponentFixture<ListofferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
