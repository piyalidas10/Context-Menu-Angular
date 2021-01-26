import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { ContextmenuComponent } from './contextmenu/contextmenu.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'contextmeu';
  rightClickMenuItems = [];
  parentElem: any;
  contextMenuSelector: string;
  menuEvent: any;

  @ViewChild('contextMenu', { read: ViewContainerRef, static: true }) container;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  onListClick(event) {
    console.log(event);
    this.menuEvent = event;
    this.contextMenuSelector = event.srcElement;
    this.rightClickMenuItems = [
      {
        menuText: 'Edit',
        menuLink: '',
      },
      {
        menuText: 'Delete',
        menuLink: '',
      },
    ];
    this.createContextMenuComponent();
  }
  onTableClick(event) {
    console.log(event);
    this.menuEvent = event;
    this.contextMenuSelector = event.srcElement;
    this.rightClickMenuItems = [
      {
        menuText: 'Cut',
        menuLink: '',
      },
      {
        menuText: 'Copy',
        menuLink: '',
      },
      {
        menuText: 'Paste',
        menuLink: '',
      },
    ];
    this.createContextMenuComponent();
  }

  createContextMenuComponent() {
    this.container.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ContextmenuComponent);
    const componentRef = this.container.createComponent(componentFactory);
    (<ContextmenuComponent>componentRef.instance).contextMenuEvent = this.menuEvent;
    (<ContextmenuComponent>componentRef.instance).contextMenuSelector = this.contextMenuSelector;
    (<ContextmenuComponent>componentRef.instance).contextMenuItems = this.rightClickMenuItems;
  }

}
