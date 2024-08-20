import { Component, OnInit } from '@angular/core';
import { ComponentService } from './component.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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
  iframeSrc: { [category: string]: SafeResourceUrl } = {}; // Map to hold iframe sources

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

  sanitizeUsage(usage: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(usage);
  }

  filterComponentsByCategory(): void {
    this.categories.forEach(category => {
      this.filteredComponents[category] = this.components.filter((component: any) => component.category === category);
      this.updateIframeSrc(category); // Update iframe src when components are filtered
    });
  }

  initializeComponentIndexes(): void {
    this.categories.forEach(category => {
      this.currentComponentIndex[category] = 0; // Start at the first component for each category
    });
  }

  updateIframeSrc(category: string): void {
    const componentId = this.filteredComponents[category]?.[this.currentComponentIndex[category]]?.id;
    if (componentId) {
      this.componentService.getComponentHtml(componentId).subscribe(html => {
        this.iframeSrc[category] = this.sanitizeUsage(`data:text/html;charset=utf-8,${encodeURIComponent(html)}`);
      });
    }
  }

  prevPage(category: string): void {
    if (this.currentComponentIndex[category] > 0) {
      this.currentComponentIndex[category]--;
    }
    this.updateIframeSrc(category); // Update iframe src on page change
  }

  nextPage(category: string): void {
    if (this.filteredComponents[category] && this.currentComponentIndex[category] < this.filteredComponents[category].length - 1) {
      this.currentComponentIndex[category]++;
    } else if (this.filteredComponents[category]) {
      this.currentComponentIndex[category] = 0; // Loop back to the first component
    }
    this.updateIframeSrc(category); // Update iframe src on page change
  }

  autoSwipe(): void {
    this.categories.forEach(category => {
      interval(5000).subscribe(() => {
        this.nextPage(category);
      });
    });
  }
}
