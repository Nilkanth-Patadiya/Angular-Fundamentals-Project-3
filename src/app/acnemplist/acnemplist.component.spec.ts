import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcnemplistComponent } from './acnemplist.component';

describe('AcnemplistComponent', () => {
  let component: AcnemplistComponent;
  let fixture: ComponentFixture<AcnemplistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcnemplistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcnemplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
