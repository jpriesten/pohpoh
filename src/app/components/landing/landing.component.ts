import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.css"]
})
export class LandingComponent implements OnInit {
  title = "pohpoh";
  constructor() {}

  ngOnInit() {}

  get url() {
    return window.location.origin + "/verify";
  }
}
