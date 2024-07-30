import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  projects: any[] = [];
  tasks: any[] = [];

  constructor(private projectService: ProjectService, private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadProjects();
    this.loadTasks();
  }

  loadProjects(): void {
    this.projectService.getProjects().subscribe((projects: any[]) => {
      this.projects = projects;
    });
  }

  loadTasks(): void {
    this.taskService.getTasksByProjectId('defaultProjectId').subscribe((tasks: any[]) => {
      this.tasks = tasks;
    });
  }
}
