import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';



import "reflect-metadata";
import {createConnection} from "typeorm";
import {Song} from "./app/models/song";
 
createConnection({
    type: "sqlite",
    database: "test",
    entities: [
        Song
    ],
    synchronize: true,
    logging: false
}).then(connection => {
    // here you can start to work with your entities
}).catch(error => console.log(error));
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
  
  if (environment.production) {
  enableProdMode();
}