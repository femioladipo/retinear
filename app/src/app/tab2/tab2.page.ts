import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor(private platform: Platform) {}

  ngOnInit(): void {

  }

  public grabSearch(){
    this.platform.ready().then(() => {
      const browser = new InAppBrowser();
      browser.create('https://www.google.co.uk/','_self','location=yes');
      //browser.on("loadstop").subscribe(()=> console.log("loadstop"));
    });
  }

}
