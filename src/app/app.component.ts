import { Component } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'App-Store';
  showHeader = true;

  constructor(private router: Router) {
    // Hide header on the loading route
    this.router.events
      .pipe(
        filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        this.showHeader = event.url !== '/';
      });
  }
}
