import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { StudentListComponent } from './StudentListComponent'; 

const routes: Routes = [
    { path: '', component: StudentListComponent }, //  route  to StudentListComponent
    
];

@NgModule({
    declarations: [
        AppComponent,
        StudentListComponent, 
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes), // Initialize routes
       
    ],
    providers: [],
    bootstrap: [AppComponent], // Bootstrap the AppComponent
})
export class AppModule {}
