import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TECH-TEST-FE';
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate([''])
    console.log(this.title);
  }
}
