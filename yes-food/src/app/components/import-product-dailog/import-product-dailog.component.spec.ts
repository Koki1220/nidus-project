import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportProductDailogComponent } from './import-product-dailog.component';

describe('ImportProductDailogComponent', () => {
  let component: ImportProductDailogComponent;
  let fixture: ComponentFixture<ImportProductDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportProductDailogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportProductDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
