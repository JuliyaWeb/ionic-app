import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';

@Injectable()
export class NetworksDataService {
  private _networksData;

  constructor() {
    this._initNetworks();
  }


  public getNetworksData() {
    return this._networksData;
  }

  public getNetworkForModal(index: number) {
    if (this._networksData[index]) {
      return this._networksData[index];
    }
  }

  private _initNetworks() {
    /*  List Networks Data */
    return this._networksData = [{
      title: 'Instagram',
      icon: 'logo-instagram',
    }, {
      slug: '1',
      title: 'Facebook',
      icon: 'logo-facebook',
    }, {
      slug: '2',
      title: 'Twitter',
      icon: 'logo-twitter',
    }, {
      slug: '3',
      title: 'Snapchat',
      icon: 'logo-snapchat',
    }, {
      slug: '4',
      title: 'Youtube',
      icon: 'logo-youtube',
    }, {
      slug: '5',
      title: 'Twitch',
      icon: 'logo-twitch',
    }, {
      slug: '6',
      title: 'Blog',
      icon: 'globe'
    }]
  }


}
