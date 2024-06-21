import { NgModule } from "@angular/core";
import { PlayerDetailsComponent } from "./player-details/player-details.component";
import { PlayerVideosComponent } from "./player-videos/player-videos.component";
import { HomeComponent } from "./home/home.component";
import { RouterModule } from "@angular/router";

const routes = [
    {path: '', component: HomeComponent},
    {path: ':id', component: PlayerDetailsComponent },
    {path: ':id/videos', component: PlayerVideosComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})
export class FifaRoutingModule { }