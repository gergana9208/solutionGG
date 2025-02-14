import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCardComponent } from './product-card.component';
import { By } from '@angular/platform-browser';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardComponent],  
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    component.product = { updatedAt: new Date('2024-02-13T10:00:00Z') };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should convert updatedAt to Date object if it is a string', () => {
    component.product = { updatedAt: '2024-02-13T10:00:00Z' };
    component.ngOnInit();
    expect(component.product.updatedAt instanceof Date).toBe(true);
  });

  it('should not modify updatedAt if it is already a Date object', () => {
    const date = new Date();
    component.product = { updatedAt: date };
    component.ngOnInit();
    expect(component.product.updatedAt).toBe(date);
  });

  it('should return formatted date from getFormattedDate()', () => {
    component.product = { updatedAt: new Date('2024-02-13T10:00:00Z') };
    expect(component.getFormattedDate()).toBe(new Date('2024-02-13T10:00:00Z').toLocaleDateString());
  });

  it('should return "N/A" if updatedAt is missing', () => {
    component.product = {};
    expect(component.getFormattedDate()).toBe('N/A');
  });

  it('should emit edit event when editProduct() is called', () => {
    jest.spyOn(component.edit, 'emit');
    component.editProduct();
    expect(component.edit.emit).toHaveBeenCalled();
  });

  it('should emit delete event when deleteProduct() is called', () => {
    jest.spyOn(component.delete, 'emit');
    component.deleteProduct();
    expect(component.delete.emit).toHaveBeenCalled();
  });

  it('should display the product name in the template', () => {
    component.product = { name: 'Test Product' };
    fixture.detectChanges();
    const nameElement = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(nameElement.textContent).toContain('Test Product');
  });
});