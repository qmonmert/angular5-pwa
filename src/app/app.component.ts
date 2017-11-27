import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  activities: Observable<Activity>;

  private stravaURL: string = "https://www.strava.com/api/v3/athlete/activities?access_token=7352ab3baeb484779ced1f9a35c03bcd4340a403&page=1&per_page=5";

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.activities = this.http.get<Activity>(this.stravaURL);
  }
}

interface Activity {
  id: number,
  type: string,
  name: string
}

