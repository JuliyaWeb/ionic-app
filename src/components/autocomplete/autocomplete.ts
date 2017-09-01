import { Component } from '@angular/core';
import { ViewController } from "ionic-angular";

declare let google: any;

@Component({
  selector: 'autocomplete',
  templateUrl: 'autocomplete.html'
})
export class AutocompleteComponent {
  public autocompleteItems: Array<any> = [];
  public autocomplete = '';
  private _service;

  constructor(public viewCtrl: ViewController) {
    this._service = new google.maps.places.AutocompleteService();
  }

  public dismiss() {
    this.viewCtrl.dismiss();
  }

  public chooseItem(item: any) {
    this._getPlaceDetail(item.place_id);
  }

  public onChange($event) {
    if (this.autocomplete == '') {
      this.autocompleteItems = [];
      return;
    }
    this._service.getPlacePredictions({input: this.autocomplete}, (predictions) => {
      this.autocompleteItems = predictions;
    });
  }

  private _getPlaceDetail(placeId): void {
    const geocoder = new google.maps.Geocoder;
    geocoder.geocode({'placeId': placeId}, (results, status) => {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        let lodationData = {
          latitude: results[0].geometry.location.lat(),
          longitude: results[0].geometry.location.lng(),
          address: results[0].formatted_address
        };
        this.viewCtrl.dismiss(lodationData);
      }
    });
  }

}
