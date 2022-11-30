import { Component, OnInit } from '@angular/core';
import { menuData } from './menu.content';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuData = menuData

  constructor() { }

  ngOnInit(): void {
  }

}
