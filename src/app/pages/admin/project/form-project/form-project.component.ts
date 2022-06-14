import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-form-project',
  templateUrl: './form-project.component.html',
  styleUrls: ['./form-project.component.css']
})
export class FormProjectComponent implements OnInit {
  project: any = {
    nameProject: "",
    shortDescription: "",
    description: "",
    cateProject: "",
    imageProject: "",
    createAt: "12 May 2022",
  }
  constructor(
    private projectService : ProjectService,
    private router: Router,
    private activateRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.activateRoute.snapshot.paramMap.get('id')!;
    if(id) {
      this.projectService.getProject(+id).subscribe(data => {
        this.project = data
      })
    }
  }

  onSubmit(){
    const id = +this.activateRoute.snapshot.paramMap.get('id')!;
    if(id){
      this.projectService.updateProject(this.project).subscribe(data => {
        this.router.navigate(['/admin/project/list']);
      })
    }
    this.projectService.addProject(this.project).subscribe(data => {
      // console.log(data)
      this.router.navigate(['/admin/project/list']);
    })
  }
}
