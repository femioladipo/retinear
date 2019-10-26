import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  constructor() {}

  ngOnInit() {
    
  }

  public clickToggle(){
    document.body.classList.toggle('--ion-color-dark');
    document.body.classList.toggle('dark');
  }



}
