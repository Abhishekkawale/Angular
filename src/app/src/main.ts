import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

// Bootstrap the standalone AppComponent
bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
