import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingledataComponent } from './singledata.component';

describe('SingledataComponent', () => {
  let component: SingledataComponent;
  let fixture: ComponentFixture<SingledataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingledataComponent]
    });
    fixture = TestBed.createComponent(SingledataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
