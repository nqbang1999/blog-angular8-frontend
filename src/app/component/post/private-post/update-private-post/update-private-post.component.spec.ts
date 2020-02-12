import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePrivatePostComponent } from './update-private-post.component';

describe('UpdatePrivatePostComponent', () => {
  let component: UpdatePrivatePostComponent;
  let fixture: ComponentFixture<UpdatePrivatePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePrivatePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePrivatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
