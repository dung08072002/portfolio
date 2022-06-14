import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
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
