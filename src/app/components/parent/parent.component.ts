import { ExtendedScrollToOptions } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatDrawerContent } from '@angular/material/sidenav';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  @ViewChild('sidenav') public sidenav: MatSidenav;
  @ViewChild('mainContainer') private mainContainer: MatDrawerContent;
  opened = true;
  routerEvent: any;
  menu: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {
    this.routerEvent = this.router.events.subscribe((res) => {
      if (res instanceof NavigationEnd) {
        this.menu = this.route.snapshot.firstChild.url[0].path;
      }
    });
  }

  ngOnInit() {}
}
