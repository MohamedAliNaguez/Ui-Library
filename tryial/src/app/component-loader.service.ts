import { Injectable, Compiler, Injector, NgModule, Component, Type, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComponentLoaderService {
  private componentsCache = new Map<string, Type<any>>();

  constructor(private http: HttpClient, private compiler: Compiler, private injector: Injector) {}

  getComponents(): Observable<any[]> {
    // Adjust the API endpoint according to your setup
    return this.http.get<any[]>('/api/components');
  }

  loadComponent(path: string): Observable<Type<any>> {
    if (this.componentsCache.has(path)) {
      return from(Promise.resolve(this.componentsCache.get(path)!));
    }

    return this.http.get<string>(path, { responseType: 'text' as 'json' }).pipe(
      switchMap(template => {
        const component = this.createComponent(template);
        this.componentsCache.set(path, component);
        return from(Promise.resolve(component));
      })
    );
  }

  private createComponent(template: string): Type<any> {
    @Component({
      selector: 'dynamic-component',
      template: "template"
    })
    class DynamicComponent {}

    @NgModule({
      declarations: [],
      imports: [],
      entryComponents: [DynamicComponent] // Required for dynamic components
    })
    class DynamicModule {}

    // Compile the module and create the component factory
    const module = this.compiler.compileModuleSync(DynamicModule);
    const moduleRef = module.create(this.injector);
    const componentFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(DynamicComponent);

    return componentFactory.componentType;
  }
}
