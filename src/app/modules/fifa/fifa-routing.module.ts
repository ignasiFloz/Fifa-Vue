import { NgModule } from "@angular/core";
import { PlayerDetailsComponent } from "./player-details/player-details.component";
import { PlayerVideosComponent } from "./player-videos/player-videos.component";
import { HomeComponent } from "./home/home.component";
import { RouterModule } from "@angular/router";

const routes = [
    { 
        path:'',
        data: {
            breadcrumb: 'Home'
          },
        children: [

            { path: '',
                data: {
                    breadcrumb: null
                }, 
                component: HomeComponent 
            },
            { 
                path: ':id', 
                data: {
                    breadcrumb: 'Player'
                },
                component: PlayerDetailsComponent 
            },
            { 
                path: ':id/videos', 
                data: {
                    breadcrumb: 'Videos'
                },
                component: PlayerVideosComponent 
            }
        ]
    }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})
export class FifaRoutingModule { }