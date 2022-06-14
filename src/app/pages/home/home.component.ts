import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projectList!: any

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.showProjects()
  }

  showProjects() {
    this.projectService.getProjects().subscribe(data => {
      console.log(data);
      this.projectList = data;
    })
  }
}
