import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterRouteComponent } from '../../../src/app/basic/counter-route/counter-route.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';

describe('CounterRouteComponent', () => {
  let component: CounterRouteComponent;
  let fixture: ComponentFixture<CounterRouteComponent>;


  test('debe de tener el valor inicial en cero', () => {
    TestBed.configureTestingModule({
      declarations: [CounterRouteComponent],
      imports: [RouterTestingModule]
    });
    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.counter).toBe(0);
  });

  test('debe de tener el valor inicial de 100 en la ruta /counter/100', () => {
    const mockActivatedRoute = {
      snapshot:{
        paramMap: {
          get(param:string){
            return (param === 'initial') ? '100' : undefined;
          }
        }
      }
    }

    TestBed.configureTestingModule({
      declarations: [CounterRouteComponent],
      providers:[
        {provide: ActivatedRoute, useValue: mockActivatedRoute}
      ]
    });
    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.counter).toBe(100);
  });

  test('debe de tener el valor inicial de 10 en la ruta /counter/20abc', () => {
    const mockActivatedRoute = {
      snapshot:{
        paramMap: {
          get(param:string){
            return (param === 'initial') ? '20abc' : undefined;
          }
        }
      }
    }

    TestBed.configureTestingModule({
      declarations: [CounterRouteComponent],
      providers:[
        {provide: ActivatedRoute, useValue: mockActivatedRoute}
      ]
    });
    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.counter).toBe(10);
  });



});
