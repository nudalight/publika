import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { GithubService } from './github/shared/github.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';

import { ContactComponent } from './contact/contact.component';
import {FeedComponent} from "./feed/feed.component";
import {PageNotFoundComponent} from "./common/page-not-found/page-not-found.component";
import {MainNavComponent} from "./main-nav/main-nav.component";
import {SignUpComponent} from "./auth/sign-up/sign-up.component";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RepoBrowserComponent,
    RepoListComponent,
    RepoDetailComponent,
    HomeComponent,
    ContactComponent,
    FeedComponent,
    PageNotFoundComponent,
    MainNavComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,

    // feed the route paths to ng-app with RouterModule.
    // It returns a module, containing the configured Router service provider,
    // plus other providers that the routing library requires
    // this also makes the Router available everywhere in the application.
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    GithubService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
