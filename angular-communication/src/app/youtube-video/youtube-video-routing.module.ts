import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YoutubeVideoComponent } from './youtube-video/youtube-video.component';

const routes: Routes = [
  {path: "", component: YoutubeVideoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeVideoRoutingModule { }
