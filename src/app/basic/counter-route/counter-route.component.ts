import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-counter-route',
  templateUrl: './counter-route.component.html'
})
export class CounterRouteComponent {
  public counter: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const initialValue = Number(this.route.snapshot.paramMap.get('initial'));
    this.counter = isNaN(initialValue) ? 10 : initialValue;
  }

  increaseBy(value: number) {
  this.counter += value;

  }
}
