import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));

// Another way to provide services to the entire app. The downfall is that this method does not allow for lazy loading of services.
// bootstrapApplication(AppComponent, {
//   providers: [TaskService]
// }).catch((err) => console.error(err));
