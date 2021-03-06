import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then( () =>{
  // registerServiceWorker('sw-default')
}).catch(err => console.log(err));
// platformBrowserDynamic().bootstrapModule(AppModule);

function registerServiceWorker(swName: string) {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker
      .register(`/${swName}.js`)
      .then(reg => {
        console.log('[App] Successful service worker registration', reg);
      })
      .catch(err =>
        console.error('[App] Service worker registration failed', err)
      );
    });   
  } else {
    console.error('[App] Service Worker API is not supported in current browser');
  }
}