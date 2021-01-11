import { Component } from "@angular/core";

@Component({
  selector: "select-overview-example",
  templateUrl: "select-overview-example.html"
})
export class SelectOverviewExample {
  public activiteFavorite: string;

  groupeActivites = [
    {
      nom: "Sportive",
      activites: ["Basket", "Foot", "Tennis", "Course", "Natation"]
    },
    {
      nom: "Reposante",
      activites: ["Jeux de sociétés", "Film", "Jeux vidéos", "Sieste"]
    }
  ];
}
