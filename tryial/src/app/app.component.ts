import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComponentService } from './component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tryial';
  components: any[] = [];

  constructor(private componentService : ComponentService) {}

  ngOnInit(): void {
    this.componentService.getComponents().subscribe(data => {
      this.components = data;
      console.log(data);

    });
  }
}
