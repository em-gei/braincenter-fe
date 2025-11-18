import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from './service/data-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  constructor(private http: HttpClient, private dataService: DataService) { }

  protected readonly title = signal('braincenter-fe');

  callEndpoint() {
    this.dataService.getData();
  }
}
