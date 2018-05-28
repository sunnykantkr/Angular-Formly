import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TryformlyComponent } from './tryformly.component';

describe('TryformlyComponent', () => {
  let component: TryformlyComponent;
  let fixture: ComponentFixture<TryformlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryformlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryformlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
