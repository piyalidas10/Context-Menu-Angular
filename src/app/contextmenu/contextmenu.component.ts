import { Component, OnInit, Input, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-contextmenu',
  templateUrl: './contextmenu.component.html',
  styleUrls: ['./contextmenu.component.css']
})
export class ContextmenuComponent implements OnInit {
  @Input() contextMenuEvent;
  @Input() contextMenuSelector;
  @Input() contextMenuItems;
  isDisplayContextMenu: boolean = false;
  _currentMenuVisible = null;

  constructor(private elementRef: ElementRef) {
    this.isDisplayContextMenu = false;
  }

  ngOnInit() {
    this.initContextMenu();
  }

  initContextMenu() {
    console.log(this.contextMenuSelector);
    console.log(this.contextMenuEvent);
    if (this.contextMenuSelector && this.contextMenuEvent) {
      this.contextMenuEvent.preventDefault();
      this.contextMenuEvent.stopPropagation();
      this.createContextMenu(this.contextMenuEvent.clientX, this.contextMenuEvent.clientY);
      this.contextMenuSelector.addEventListener('click', e => {
        this.closeCurrentlyOpenedMenu();
      });
    }
  }

  createContextMenu(x, y) {
    this.closeCurrentlyOpenedMenu();
    this.isDisplayContextMenu = true;
    if (this.isDisplayContextMenu && this.elementRef.nativeElement) {
      console.log(this.elementRef.nativeElement);
      const contextMenuDiv = this.elementRef.nativeElement.querySelector('.contextMenu');
      console.log(contextMenuDiv);
      if (contextMenuDiv) {
        this._currentMenuVisible = contextMenuDiv;
        contextMenuDiv.style.left = x + "px";
        contextMenuDiv.style.top = y + "px";
      }
    }
  }

  closeContextMenu(menu) {
    console.log(menu);
    menu.style.left='0px';
    menu.style.top='0px';
    this._currentMenuVisible = null;
  }

  closeCurrentlyOpenedMenu() {
    console.log(this._currentMenuVisible);
      if (this._currentMenuVisible !== null) {
          this.closeContextMenu(this._currentMenuVisible);
      }
  }

  /* close context menu on left click */
  @HostListener('document:click')
  documentClick(): void {
    this.isDisplayContextMenu = false;
  }

  /* close context menu on "ESC" key keypress */
  @HostListener('window:onkeyup')
  escKeyClick(): void {
    this.isDisplayContextMenu = false;
  }

}
