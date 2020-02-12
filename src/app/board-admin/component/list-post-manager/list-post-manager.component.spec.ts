import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostManagerComponent } from './list-post-manager.component';

describe('ListPostManagerComponent', () => {
  let component: ListPostManagerComponent;
  let fixture: ComponentFixture<ListPostManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPostManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPostManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
