import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http, RequestOptions, XHRBackend, HttpModule } from "@angular/http";
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CookieModule } from 'ngx-cookie';
import { IonicStorageModule } from "@ionic/storage";
import { Push } from '@ionic-native/push';
import { Deeplinks } from "@ionic-native/deeplinks";
import { ChartsModule } from 'ng2-charts';

import { APP_PAGES } from "../pages/index";
import { ComponentsModule } from "../components/components.module";
import { APP_PROVIDERS, ApiHttp, Session, Config } from "../core/providers";


@NgModule({
  declarations: [
    MyApp,
    ...APP_PAGES
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: true,
    }),
    CookieModule.forRoot(),
    IonicStorageModule.forRoot(),
    ComponentsModule,
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ...APP_PAGES
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Deeplinks,
    Push,
    ...APP_PROVIDERS,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: Http, useClass: ApiHttp, deps: [XHRBackend, RequestOptions, Session, Config]},
  ]
})
export class AppModule {
}
