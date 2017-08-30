import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular";
import { InfoComponent } from './user-profile/info/info';
import { NetworksComponent } from './user-profile/networks/networks';
import { InterestsComponent } from './user-profile/interests/interests';
import { InterestsModalComponent } from './user-profile/interests/list-interests-modal/list-interests-modal';
import { GenresModalComponent } from './user-profile/interests/genres-modal/genres-modal';
import { EventTaskComponent } from './tasks/event-task/event-task';
import { AquisitionTaskComponent } from './tasks/aquisition-task/aquisition-task';
import { ReviewTaskComponent } from './tasks/review-task/review-task';
import { ShareTaskComponent } from './tasks/share-task/share-task';
import { PostTaskComponent } from './tasks/post-task/post-task';
import { CreateTaskComponent } from './tasks/create-task/create-task';
import { ImageUploadComponent } from './image-upload/image-upload';

@NgModule({
  declarations: [
    InfoComponent,
    NetworksComponent,
    InterestsComponent,
    InterestsModalComponent,
    GenresModalComponent,
    EventTaskComponent,
    AquisitionTaskComponent,
    ReviewTaskComponent,
    ShareTaskComponent,
    PostTaskComponent,
    CreateTaskComponent,
    ImageUploadComponent
  ],
  imports: [
    IonicModule
  ],
  exports: [
    InfoComponent,
    NetworksComponent,
    InterestsComponent,
    InterestsModalComponent,
    GenresModalComponent,
    EventTaskComponent,
    AquisitionTaskComponent,
    ReviewTaskComponent,
    ShareTaskComponent,
    PostTaskComponent,
    CreateTaskComponent,
    ImageUploadComponent
  ],
  entryComponents: [
    InterestsModalComponent,
    GenresModalComponent
  ]
})
export class ComponentsModule {
}
