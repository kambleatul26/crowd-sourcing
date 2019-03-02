import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundraiserBlogComponent } from './fundraiser-blog.component';

describe('FundraiserBlogComponent', () => {
  let component: FundraiserBlogComponent;
  let fixture: ComponentFixture<FundraiserBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundraiserBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundraiserBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
