import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Group } from './model/group';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'College Students';
  loading = true;
  groups: Group[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loading = true;
    this.http.get<Group[]>('Http://localhost:9192/api/admin/1/students').subscribe({
        next: (data: Group[]) => {
            console.log("Received data:", data);
            this.groups = data;
            this.loading = false;
        },
        error: (error) => {
            console.error("HTTP Error:", error);
            this.loading = false;

        }
    });
   // console.log(this.groups) 
}

}
