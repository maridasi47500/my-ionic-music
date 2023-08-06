import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
private _musicfileUrl="myucifileurl"
private _musiccount="myucifileurl"
  constructor(private httpClient: HttpClient) {}
  async uploadPhoto(fileChangeEvent:any) {
    // Get a reference to the file that has just been added to the input
    const photo = fileChangeEvent.target.files[0];

    // Create a form data object using the FormData API
    let formData = new FormData();

    // Add the file that was just added to the form data
    formData.append("music", photo, photo.name);
    formData.append("photo", photo, photo.name);
        this.httpClient.get(this._musicfileUrl)
            .subscribe(googleVolumeListResponse => {
                this._musiccount = googleVolumeListResponse.totalItems;
                })
}
}
