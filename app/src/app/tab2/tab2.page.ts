import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  constructor(private platform: Platform) {}

  ngOnInit(): void {

  }

  public grabSearch(){
    var browserTargets = "_blank"
    var browserOptions ="location=yes"
    var browserLink = "https://www.google.co.uk/"

    const localCordova = <any> cordova;
    var dayMan = localCordova.InAppBrowser.open(browserLink, browserTargets, browserOptions);

    dayMan.addEventListener('loadstart',this.loadStartCallBack());

    //const browser = new InAppBrowser();
    //browser.create(browserLink, browserTargets, browserOptions);
    //browser.addEventListener('loadstart', this.loadStartCallBack());
    //browser.on("loadstart").subscribe(() => {
      //console.log("I guess they never miss huh?")
    //});

  }

  public loadStartCallBack(){
    console.log($('#status-message'));
  }

}
