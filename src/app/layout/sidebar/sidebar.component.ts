import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public menuItems = [
    {icon: "person", text: "Profile", router: "profile"},
    {icon: "center_focus_strong", text: "Verify product", route: "verify"},
    {icon: "work", text: "Products", route: "/products"}

  ]
  constructor() { }

  ngOnInit() {
  }

}
