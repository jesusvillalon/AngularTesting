import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherComponent } from '../../../src/app/basic/father/father.component';
import { FatherSonComponent } from '../../../src/app/basic/father-son/father-son.component';
import { By } from '@angular/platform-browser';

describe('FatherComponent', () => {
  let component: FatherComponent;
  let fixture: ComponentFixture<FatherComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FatherComponent, FatherSonComponent]
    });
    fixture = TestBed.createComponent(FatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('debe hacer match con el snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  test('debe de establecer el cliente con el nombre indicado', () => {
    component.onSetClient('Pedro');
    fixture.detectChanges();

    const codeDiv = compiled.querySelector('.mt-2');
    expect(codeDiv?.textContent).toContain('"name"');
    expect(codeDiv?.textContent).toContain('Pedro');
  });

  test('debe de borrar el cliente si se emite onDeleteClient (hijo)', () => {
    component.client = {id: 1, name: "Eduardo"};
    fixture.detectChanges();

    const sonDebugElement = fixture.debugElement.query(By.directive(FatherSonComponent));
    const sonComponent:FatherSonComponent = sonDebugElement.componentInstance;

    sonComponent.onDeleteClient.emit();
    expect(component.client).toBe(undefined)

  });

  test('deb3e de actualizar el cliente onClientUpdated', () => {
    component.client = {id: 1, name: "Eduardo"};
    fixture.detectChanges();

    const sonDebugElement = fixture.debugElement.query(By.directive(FatherSonComponent));
    const sonComponent:FatherSonComponent = sonDebugElement.componentInstance;

    sonComponent.onClientUpdated.emit({ id: 10, name: 'Pedro'});
    expect(component.client).toEqual({id: 10, name: 'Pedro'});

    // Usar toBe cuando algo es igual a un string, number o booleano.
    // Usar toEqual cuando un objeto sea igual a otro objeto.

  });




});
