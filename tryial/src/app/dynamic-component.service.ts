import { Injectable, Compiler, Injector, NgModuleFactory, NgModule, Component, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentService {
  constructor(private compiler: Compiler, private injector: Injector) {}

  async createComponent(viewContainerRef: ViewContainerRef, template: string): Promise<void> {
    @Component({ template })
    class DynamicComponent {}

    @NgModule({ declarations: [DynamicComponent] })
    class DynamicComponentModule {}

    const moduleFactory = await this.compiler.compileModuleAsync(DynamicComponentModule);
    const moduleRef = moduleFactory.create(this.injector);

    const componentFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(DynamicComponent);
    viewContainerRef.clear();
    viewContainerRef.createComponent(componentFactory);
  }
}
