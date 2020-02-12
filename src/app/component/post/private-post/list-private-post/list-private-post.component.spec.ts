import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPrivatePostComponent } from './list-private-post.component';

describe('ListPrivatePostComponent', () => {
  let component: ListPrivatePostComponent;
  let fixture: ComponentFixture<ListPrivatePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPrivatePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPrivatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
