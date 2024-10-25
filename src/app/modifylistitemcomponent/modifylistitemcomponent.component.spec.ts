import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifylistitemcomponentComponent } from './modifylistitemcomponent.component';

describe('ModifylistitemcomponentComponent', () => {
  let component: ModifylistitemcomponentComponent;
  let fixture: ComponentFixture<ModifylistitemcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifylistitemcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifylistitemcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
