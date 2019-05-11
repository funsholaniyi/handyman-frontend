import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateDefaultPictureComponent } from './generate-default-picture.component';

describe('GenerateDefaultPictureNonObservableComponent', () => {
  let component: GenerateDefaultPictureComponent;
  let fixture: ComponentFixture<GenerateDefaultPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateDefaultPictureComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateDefaultPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
