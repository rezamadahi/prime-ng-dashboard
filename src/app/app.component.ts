import {Component, OnInit, ViewChild} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Menu} from "primeng/menu";
import {Router} from "@angular/router";

declare var jQuery :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  menuItems: MenuItem[] = [];
  miniMenuItems: MenuItem[] = [];

  @ViewChild('bigMenu') bigMenu!: Menu;
  @ViewChild('smallMenu') smallMenu!: Menu;

  constructor(private router: Router) {}

  ngOnInit() {
    let handleSelected = function(event: any) {
      let allMenus = jQuery(event.originalEvent.target).closest('ul');
      let allLinks = allMenus.find('.menu-selected');

      allLinks.removeClass("menu-selected");
      let selected = jQuery(event.originalEvent.target).closest('a');
      selected.addClass('menu-selected');
    }

    this.menuItems = [
      {label: 'Dashboard', icon: 'fa fa-home', routerLink: ['/dashboard'], command: (event) => handleSelected(event)},
      {label: 'All Times', icon: 'fa fa-calendar', routerLink: ['/all-times'], command: (event) => handleSelected(event)},
      {label: 'My Timesheet', icon: 'fa fa-clock-o', routerLink: ['/time-sheet'], command: (event) => handleSelected(event)},
      {label: 'Add Project', icon: 'fa fa-tasks', routerLink: ['/projects'], command: (event) => handleSelected(event)},
      {label: 'My Profile', icon: 'fa fa-users', routerLink: ['/profile'], command: (event) => handleSelected(event)},
      {label: 'Settings', icon: 'fa fa-sliders', routerLink: ['/settings'], command: (event) => handleSelected(event)},
    ];
    this.miniMenuItems = [];
    this.menuItems.forEach( (item : MenuItem) => {
      let miniItem = { icon: item.icon, routerLink: item.routerLink }
      this.miniMenuItems.push(miniItem);
    });
  }
}
