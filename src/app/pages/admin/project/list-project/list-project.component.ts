import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {

  projectList!: any;

  constructor(private projectService: ProjectService) {
  }

  ngOnInit(): void {
  }

  showProjects() {
    this.projectService.getProjects().subscribe(data => {
      this.projectList = data;
      console.log(data);
    })
  }

  onRemoveItem(id: number) {
    const confirm = window.confirm("Do you want to remove this product !");
    this.projectService.removeProject(id).subscribe(() => {
      if (confirm) {
        this.projectList = this.projectList.filter((item: { id: number; }) => item.id !== id); 
      }
    })

  }

}
