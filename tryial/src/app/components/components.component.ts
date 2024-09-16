import { Component, OnInit, Renderer2 } from '@angular/core';
import { ComponentService } from '../component.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import * as Prism from 'prismjs';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {
  title = 'SW UI LIBRARY';
  components: any[] = [];
  filteredComponents: { [category: string]: any[] } = {};
  categories: string[] = [];
  filteredCategories: string[] = [];
  currentComponentIndex: { [category: string]: number } = {};
  iframeSrc: { [category: string]: SafeResourceUrl } = {};

  constructor(private componentService: ComponentService, private sanitizer: DomSanitizer, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.componentService.getComponents().subscribe(data => {
      this.components = data;

      // Extract unique categories
      this.categories = Array.from(new Set(data.map((c: any) => c.category)));

      // Initialize with all categories
      this.filteredCategories = [...this.categories];

      // Filter components and initialize component indexes
      this.filterComponentsByCategory('all');
      this.initializeComponentIndexes();

      // Ensure iframe src is set for all categories after initialization
      this.categories.forEach(category => this.updateIframeSrc(category));
    });
  }

  sanitizeUsage(usage: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`data:text/html;charset=utf-8,${encodeURIComponent(usage)}`);
  }

  filterByCategory(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selectedCategory = target.value;

    this.filterComponentsByCategory(selectedCategory);
  }

  filterComponentsByCategory(category: string): void {
    if (category === 'all') {
      this.filteredCategories = [...this.categories];
      this.categories.forEach(cat => {
        this.filteredComponents[cat] = this.components.filter((component: any) => component.category === cat);
      });
    } else {
      this.filteredCategories = [category];
      this.filteredComponents[category] = this.components.filter((component: any) => component.category === category);
    }
  }

  initializeComponentIndexes(): void {
    this.categories.forEach(category => {
      this.currentComponentIndex[category] = 0;
    });
  }

  updateIframeSrc(category: string): void {
    const component = this.filteredComponents[category]?.[this.currentComponentIndex[category]];
    if (component) {
      this.iframeSrc[category] = this.sanitizeUsage(component.code);
    }
  }

  prevPage(category: string): void {
    if (this.currentComponentIndex[category] > 0) {
      this.currentComponentIndex[category]--;
    } else {
      this.currentComponentIndex[category] = this.filteredComponents[category].length - 1;
    }
    this.updateIframeSrc(category);
  }

  nextPage(category: string): void {
    if (this.currentComponentIndex[category] < this.filteredComponents[category].length - 1) {
      this.currentComponentIndex[category]++;
    } else {
      this.currentComponentIndex[category] = 0;
    }
    this.updateIframeSrc(category);
  }

  copyToClipboard(usage: string): void {
    const textarea = this.renderer.createElement('textarea');
    this.renderer.setStyle(textarea, 'position', 'fixed');
    this.renderer.setStyle(textarea, 'opacity', '0');
    this.renderer.setProperty(textarea, 'value', usage);
    this.renderer.appendChild(document.body, textarea);
    textarea.select();
    document.execCommand('copy');
    this.renderer.removeChild(document.body, textarea);
    alert('Usage code copied to clipboard!');
  }

  // New method to highlight code
  highlightedCode(code: string): string {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
}
