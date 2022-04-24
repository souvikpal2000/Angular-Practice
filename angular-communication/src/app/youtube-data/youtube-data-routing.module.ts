import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YoutubeDataComponent } from './youtube-data/youtube-data.component';

const routes: Routes = [
  {path: "", component: YoutubeDataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeDataRoutingModule { }
