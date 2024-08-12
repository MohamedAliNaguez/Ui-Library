import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../component.service';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css']
})
export class ComponentListComponent implements OnInit {
  components: any[] = [];

  constructor(private componentService: ComponentService) { }

  ngOnInit(): void {
    this.componentService.getComponents().subscribe(data => {
      this.components = data;
    });
  }
}