import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular";
import { InfoComponent } from './user-profile/info/info';
import { NetworksComponent } from './user-profile/networks/networks';
import { InterestsComponent } from './user-profile/interests/interests';
import { InterestsModalComponent } from './user-profile/interests/list-interests-modal/list-interests-modal';
import { GenresModalComponent } from './user-profile/interests/genres-modal/genres-modal';

@NgModule({
  declarations: [
    InfoComponent,
    NetworksComponent,
    InterestsComponent,
    InterestsModalComponent,
    GenresModalComponent
  ],
  imports: [
    IonicModule
  ],
  exports: [
    InfoComponent,
    NetworksComponent,
    InterestsComponent,
    InterestsModalComponent,
    GenresModalComponent
  ],
  entryComponents: [
    InterestsModalComponent,
    GenresModalComponent
  ]
})
export class ComponentsModule {
}
