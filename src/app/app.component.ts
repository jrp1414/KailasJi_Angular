import { Component } from "@angular/core";

@Component({
  selector:"ap-app",
  // template:"<h2>Welcome to Angular Class</h2>"
  // template:`
  // <h1>Welcome to Angular Class</h1>
  // <h2>We are tagetting to learn Angular 2</h2>
  // <p>Hey {{title}}, how are you doing today</p>
  // `
  templateUrl:"app.component.html",
  styleUrls:[
    "app.component.css"
  ]
})
export class AppComponent {
  title:string;
  Names:string[];

  constructor(){
    this.title="Kailasji, GautamJi";
    this.Names==[
      "Ram", "Manoj","Amol","Kailas","Gautam"
    ];
  }
}