import { Component, OnInit } from '@angular/core';
import { Group } from './model/group'; 
import { Student } from './model/Student';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-list',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class StudentListComponent implements OnInit {
  title: string = 'Student List'; 
  loading: boolean = false; 
  groups: Group[] = []; 

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Create a reference to the component in the global scope
    (window as any).angularComponentRef = this;
    // Call the API on component initialization
    this.getPrintedContent();
  }

  getPrintedContent(): void {
    this.loading = true; // Set loading to true before making the HTTP request
    this.http.get<Group[]>('http://localhost:9192/api/admin/1/students')
      .subscribe(data => {
        this.groups = data; // Assign the received data to the 'groups' property
        this.loading = false;
        console.log(this.groups); 
      });
  }
}