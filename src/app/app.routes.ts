import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
    {path :'' , component: HomeComponent ,  pathMatch: 'full'},
    {path :'about' , component: AboutComponent },
    {path :'contact' , component: ContactComponent },
    {path :'gallery' , component: GalleryComponent },
    {path :'blog' , component: BlogComponent },
  
];
