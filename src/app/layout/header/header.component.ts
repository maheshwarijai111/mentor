import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  // imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [NgIf]
})
export class HeaderComponent {
  showBanner: boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.activatedRoute.root.firstChild;
        if (currentRoute?.snapshot.data['showBanner'] !== undefined) {
          this.showBanner = currentRoute.snapshot.data['showBanner'];
        } else {
          this.showBanner = true;
        }
      }
    });
  }
}