import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular";
import { InfoComponent } from './user-profile/info/info';
import { NetworksComponent } from './user-profile/networks/networks';
import { InterestsComponent } from './user-profile/interests/interests';
import { GenresModalComponent } from './user-profile/interests/genres-modal/genres-modal';
import { EventTaskComponent } from './tasks/event-task/event-task';
import { AquisitionTaskComponent } from './tasks/aquisition-task/aquisition-task';
import { ReviewTaskComponent } from './tasks/review-task/review-task';
import { ShareTaskComponent } from './tasks/share-task/share-task';
import { PostTaskComponent } from './tasks/post-task/post-task';
import { CreateTaskComponent } from './tasks/create-task/create-task';
import { ImageUploadComponent } from './image-upload/image-upload';
import { AutocompleteComponent } from './autocomplete/autocomplete';
import { ListIconsModalComponent } from './list-icons-modal/list-icons-modal';
import { NetworkModalComponent } from './user-profile/networks/network-modal/network-modal';
import { FaIconComponent } from './fa-icon/fa-icon';

@NgModule({
  declarations: [
    InfoComponent,
    NetworksComponent,
    InterestsComponent,
    GenresModalComponent,
    EventTaskComponent,
    AquisitionTaskComponent,
    ReviewTaskComponent,
    ShareTaskComponent,
    PostTaskComponent,
    CreateTaskComponent,
    ImageUploadComponent,
    AutocompleteComponent,
    ListIconsModalComponent,
    NetworkModalComponent,
    FaIconComponent
  ],
  imports: [
    IonicModule
  ],
  exports: [
    InfoComponent,
    NetworksComponent,
    InterestsComponent,
    GenresModalComponent,
    EventTaskComponent,
    AquisitionTaskComponent,
    ReviewTaskComponent,
    ShareTaskComponent,
    PostTaskComponent,
    CreateTaskComponent,
    ImageUploadComponent,
    AutocompleteComponent,
    ListIconsModalComponent,
    NetworkModalComponent,
    FaIconComponent
  ],
  entryComponents: [
    GenresModalComponent,
    NetworkModalComponent,
    AutocompleteComponent,
    ListIconsModalComponent
  ]
})
export class ComponentsModule {
}
