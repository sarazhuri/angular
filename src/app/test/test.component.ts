import { Component, OnInit } from "@angular/core";
import { type } from "os";

@Component({
  selector: "app-test",
  template: `
    <h2>welcome {{ name }}</h2>
    <h2>welcome {{ 2 + 2 }}</h2>
    <h2>{{ "angela " + name }}</h2>
    <h2>gjatesia {{ name.length }}</h2>
    <h2>shkronja te vofla {{ name.toLowerCase() }}</h2>
    <h2>{{ greetUser() }}</h2>
    <input type="text" value="sara" />
    <h2 class="text-success">tekst me ngjyre</h2>
    <h2 [class]="successClass">teks me te njejten ngjyre</h2>
    <button (click)="onClick()">greet</button>
    {{ greeting }}
    <br />
    <input #myInput type="text" />
    <button (click)="logMessage(myInput.value)">log in</button>
    <br />
    <br />
    <input [(ngModel)]="surname" type="text" />
    {{ surname }}
  `,
  styles: [
    `
      .text-success {
        color: green;
      }
      .text-danger {
        color: red;
      }
      .text-special {
        font-style: italic;
      }
    `
  ]
})
export class TestComponent implements OnInit {
  public name = "SARA";
  public successClass = "text-success";
  public greeting = "";
  public surname = "";

  constructor() {}

  ngOnInit() {}
  greetUser() {
    return "u can do it " + this.name;
  }
  onClick() {
    console.log("hello sara hellooooo harif");
    this.greeting = "udhetim te mbare ";
  }
  logMessage(value) {
    console.log(value);
  }
}
