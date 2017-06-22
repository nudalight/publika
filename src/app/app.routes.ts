import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { ContactComponent } from './contact/contact.component';
import {FeedComponent} from "./feed/feed.component";
import {PageNotFoundComponent} from "./common/page-not-found/page-not-found.component";
import {SignUpComponent} from "./auth/sign-up/sign-up.component";

export const rootRouterConfig: Routes = [
  {
    // default path, the place to go when the path in the URL is empty
    path: '',
    redirectTo: 'feed',
    pathMatch: 'full' // required by redirectTo
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'github', component: RepoBrowserComponent,
    children: [
      { path: '', component: RepoListComponent },
      { path: ':org', component: RepoListComponent,
        children: [
          { path: '', component: RepoDetailComponent },
          { path: ':repo', component: RepoDetailComponent }
        ]
      }]
  },
  { path: 'contact', component: ContactComponent },
  {
    path: 'feed',
    data: { title: 'Лента новостей' },
    component: FeedComponent,
    children: [
      {
        path: ':hash',
        component: FeedComponent
      }
    ]
  },
  {
    // router will select this route if the requested URL doesn't match any of the predefined paths
    // this route should always come last
    path: '**',
    component: PageNotFoundComponent
    // if user enter non-existent path, then the router to throw an error and crash the app.
    // so ** path will handle the issue
  }
];

