import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankedBlockComponent } from './ranked-block.component';

describe('RankedBlockComponent', () => {
  let component: RankedBlockComponent;
  let fixture: ComponentFixture<RankedBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankedBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankedBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
