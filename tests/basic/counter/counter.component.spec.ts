import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from '../../../src/app/basic/counter/counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should match with snapshot', () => {
    expect(compiled).toMatchSnapshot();
  })

  test('increaBy should increase based on the argument (5)', () => {
    component.increaseBy(5);
    expect(component.counter).toBe(15)
  })

  test('by clicking the buttons it should increase and decrease by 1', () => {
    const buttons = compiled.querySelectorAll('button');
    buttons[0].click();
    expect(component.counter).toBe(11)

    buttons[1].click();
    buttons[1].click();
    expect(component.counter).toBe(9)
  })

  test('changing the counter it should update the h1 element', () => {
    component.increaseBy(10);
    fixture.detectChanges(); /*Debemos detectar los cambios para que
                               haga la comprobación en este caso */

    const h1 = compiled.querySelector('h1');
    expect(h1?.textContent).toContain('20')
  })
});
