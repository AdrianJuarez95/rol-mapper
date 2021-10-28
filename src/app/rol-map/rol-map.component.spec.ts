import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolMapComponent } from './rol-map.component';

describe('RolMapComponent', () => {
  let component: RolMapComponent;
  let fixture: ComponentFixture<RolMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
