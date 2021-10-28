import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedMapComponent } from './saved-map.component';

describe('SavedMapComponent', () => {
  let component: SavedMapComponent;
  let fixture: ComponentFixture<SavedMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
