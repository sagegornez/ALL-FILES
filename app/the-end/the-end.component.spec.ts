import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheEndComponent } from './the-end.component';

describe('TheEndComponent', () => {
  let component: TheEndComponent;
  let fixture: ComponentFixture<TheEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TheEndComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
