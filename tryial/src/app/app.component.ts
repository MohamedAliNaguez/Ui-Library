import { Component, OnInit } from '@angular/core';
import { ComponentService } from './component.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'UI Component Showcase';
  components: any[] = [];
  filteredComponents: { [category: string]: any[] } = {};
  categories: string[] = [];
  currentComponentIndex: { [category: string]: number } = {};
  pageSize = 1; // Number of components per page

  constructor(private componentService: ComponentService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.componentService.getComponents().subscribe(data => {
      this.components = data;
      this.categories = Array.from(new Set(data.map((c: any) => c.category)));
      this.filterComponentsByCategory();
      this.initializeComponentIndexes();
      this.autoSwipe();
    });
  }

  sanitizeUsage(usage: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(usage);
  }

  filterComponentsByCategory(): void {
    this.categories.forEach(category => {
      this.filteredComponents[category] = this.components.filter((component: any) => component.category === category);
    });
  }

  initializeComponentIndexes(): void {
    this.categories.forEach(category => {
      this.currentComponentIndex[category] = 0; // Start at the first component for each category
    });
  }

  prevPage(category: string): void {
    if (this.currentComponentIndex[category] > 0) {
      this.currentComponentIndex[category]--;
    }
  }

  nextPage(category: string): void {
    if (this.filteredComponents[category] && this.currentComponentIndex[category] < this.filteredComponents[category].length - 1) {
      this.currentComponentIndex[category]++;
    } else if (this.filteredComponents[category]) {
      this.currentComponentIndex[category] = 0; // Loop back to the first component
    }
  }

  autoSwipe(): void {
    this.categories.forEach(category => {
      interval(5000).subscribe(() => {
        this.nextPage(category);
      });
    });
  }
}
