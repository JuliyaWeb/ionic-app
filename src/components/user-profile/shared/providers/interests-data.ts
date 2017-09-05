import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';

@Injectable()
export class InterestsDataService {
  private _interestsData;
  private _booksData;
  // private _fitnessWellnessData;
  // private _sportOutdoorData;
  // private _musicData;
  // private _filmsData;
  // private _travelData;
  // private _gamesData;
  // private _foodDrinkData;
  // private _shoppingFashionData;
  // private _technologyData;

  constructor() {
    this._initData();
    this._initInterests();
  }

  public getInterestsData() {
    return this._interestsData;
  }

  public getInterestForModal(index: number) {
    if (this._interestsData[index]) {
      return this._interestsData[index];
    }
  }

  private _initData() {
    /* Test Data */
    this._booksData = [{
      id: '0',
      text: 'Test',
    }, {
      id: '1',
      text: 'Test_1',
    }, {
      id: '2',
      text: 'Test_2',
    }, {
      id: '3',
      text: 'Test_3',
    }];
  }

  private _initInterests() {
    /*  List Interests Data */
    return this._interestsData = [{
      title: 'Books',
      icon: 'cube',
      options: this._booksData
    }, {
      slug: '1',
      title: 'Films',
      icon: 'cube',
      options: this._booksData
    }, {
      slug: '2',
      title: 'Games',
      icon: 'cube',
      options: this._booksData
    }, {
      slug: '3',
      title: 'Music',
      icon: 'cube',
      options: this._booksData
    }, {
      slug: '4',
      title: 'Fitness & Wellness',
      icon: 'cube',
      options: this._booksData
    }, {
      slug: '5',
      title: 'Food & Drink',
      icon: 'cube',
      options: this._booksData
    }, {
      slug: '6',
      title: 'Shopping & Fashion',
      icon: 'cube',
      options: this._booksData
    }, {
      slug: '7',
      title: 'Sports & Outdoors',
      icon: 'cube',
      options: this._booksData
    }, {
      slug: '8',
      title: 'Travel',
      icon: 'cube',
      options: this._booksData
    }, {
      slug: '9',
      title: 'Technology',
      icon: 'cube',
      options: this._booksData
    }]
  }

}
