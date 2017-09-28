import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';

@Injectable()
export class InitProfileDataService {
  private _genderData;
  private _ageData;
  private _reachData;
  private _incomeData;
  private _educationData;
  private _occupationData;
  private _relationshipData;
  private _interestedInData;
  private _profileCards;

  constructor() {
    this._init();
  }

  getGenderData() {
    return this._genderData;
  }

  getAgeData(min: number = 16, max: number = 60) {
    this._ageData = [];
    for (let i = min; i < max; i++) {
      this._ageData.push(i.toString());
    }
    return this._ageData;
  }

  getReachData() {
    return this._reachData;
  }

  getIncomeData() {
    return this._incomeData;
  }

  getEducationData() {
    return this._educationData;
  }

  getOccupationData() {
    return this._occupationData;
  }

  getRelationshipData() {
    return this._relationshipData;
  }

  getInterestedInData() {
    return this._interestedInData;
  }

  getprofileCardsData(): Array<Object> {
    return this._profileCards;
  }


  private _init() {
    /* Info Profile Cards */
    this._profileCards = [{
      type: 'about_you',
      title: 'About you',
    }, {
      type: 'basic_info',
      title: 'Basic Info',
    }, {
      type: 'work_education',
      title: 'Work & Education',
    }, {
      type: 'home_life',
      title: 'Home Life',
    }, {
      type: 'register_completion',
      title: 'UserName & Password',
    }];

    /* Gender */
    this._genderData = [{
      id: '1',
      text: 'Male',
    }, {
      id: '2',
      text: 'Female',
    }];

    /* Age */
    this._ageData = [];
    for (let i = 16; i < 60; i++) {
      this._ageData.push(i.toString());
    }

    /* Reach */
    this._reachData = [{
      id: '100',
      text: '100 +',
    },
      {
        id: '300',
        text: '300 +',
      },
      {
        id: '500',
        text: '500 +',
      },
      {
        id: '1000',
        text: '1000 +',
      },
      {
        id: '3000',
        text: '3000 +',
      },
      {
        id: '5000',
        text: '5000 +',
      }];

    /* Income */
    this._incomeData = [{"text": "$30,000 - $40,000", "id": '0'}, {
      "text": "$40,000 - $50,000",
      "id": 1
    }, {"text": "$50,000 - $75,000", "id": 2}, {"text": "$75,000 - $100,000", "id": 3}, {
      "text": "$100,000 - $125,000",
      "id": 4
    }, {"text": "$125,000 - $150,000", "id": 5}, {
      "text": "$150,000 - $250,000",
      "id": 6
    }, {"text": "$250,000 - $350,000", "id": 7}, {"text": "$350,000 - $500,000", "id": 8}, {
      "text": "Over $500,000",
      "id": 9
    }];

    /* Education */
    this._educationData = [{"text": "High School", "id": '0'}, {
      "text": "University",
      "id": 1
    }, {"text": "University (postgraduate)", "id": 2}];

    /* Occupation */
    this._occupationData = [{"text": "Accounting", "id": '0'}, {
      "text": "Admin & Clerical",
      "id": 1
    }, {"text": "Automotive", "id": 2}, {"text": "Banking", "id": 3}, {
      "text": "Biotech",
      "id": 4
    }, {"text": "Broadcast - Journalism", "id": 5}, {"text": "Business", "id": 6}, {
      "text": "Development",
      "id": 7
    }, {"text": "Construction", "id": 8}, {"text": "Consultant", "id": 9}, {
      "text": "Customer",
      "id": 10
    }, {"text": "Service", "id": 11}, {"text": "Design", "id": 12}, {
      "text": "Distribution - Shipping",
      "id": 13
    }, {"text": "Education - Teaching", "id": 14}, {"text": "Engineering", "id": 15}, {
      "text": "Entry",
      "id": 16
    }, {"text": "Level - New", "id": 17}, {"text": "Grad", "id": 18}, {
      "text": "Executive",
      "id": 19
    }, {"text": "Facilities", "id": 20}, {"text": "Finance", "id": 21}, {
      "text": "Franchise",
      "id": 22
    }, {"text": "General", "id": 23}, {"text": "Labor", "id": 24}, {"text": "Government", "id": 25}, {
      "text": "Grocery",
      "id": 26
    }, {"text": "Health", "id": 27}, {"text": "Care", "id": 28}, {
      "text": "Hotel - Hospitality",
      "id": 29
    }, {"text": "Human", "id": 30}, {"text": "Resources", "id": 31}, {
      "text": "Information",
      "id": 32
    }, {"text": "Technology", "id": 33}, {"text": "Installation - Maint - Repair", "id": 34}, {
      "text": "Insurance",
      "id": 35
    }, {"text": "Inventory", "id": 36}, {"text": "Legal", "id": 37}, {"text": "Admin", "id": 38}, {
      "text": "Management",
      "id": 39
    }, {"text": "Manufacturing", "id": 40}, {"text": "Marketing", "id": 41}, {
      "text": "Media - Journalism - Newspaper",
      "id": 42
    }, {"text": "Nonprofit - Social", "id": 43}, {"text": "Services", "id": 44}, {
      "text": "Nurse",
      "id": 45
    }, {"text": "Other", "id": 46}, {"text": "Pharmaceutical", "id": 47}, {
      "text": "Professional",
      "id": 48
    }, {"text": "Purchasing - Procurement", "id": 49}, {"text": "QA - Quality", "id": 50}, {
      "text": "Control",
      "id": 51
    }, {"text": "Real", "id": 52}, {"text": "Retail", "id": 53}, {"text": "Sales", "id": 54}, {
      "text": "Science",
      "id": 55
    }, {"text": "Research", "id": 56}, {"text": "Restaurant - Food", "id": 57}, {
      "text": "Estate",
      "id": 58
    }, {"text": "Skilled", "id": 59}, {"text": "Labor - Trades", "id": 60}, {
      "text": "Strategy - Planning",
      "id": 61
    }, {"text": "Supply", "id": 62}, {"text": "Chain", "id": 63}, {
      "text": "Telecommunications",
      "id": 64
    }, {"text": "Training", "id": 65}, {"text": "Transportation", "id": 66}, {"text": "Warehouse", "id": 67}];

    /* Relationship */
    this._relationshipData = [{"text": "Not selected", "id": '0'}, {"text": "Unmarried", "id": '1'}, {
      "text": "Married",
      "id": '2'
    }];

    /* Interested In */
    this._interestedInData = [{"text": "Not selected", "id": '0'}, {"text": "Male", "id": '1'}, {
      "text": "Female",
      "id": '2'
    }, {"text": "Other", "id": '3'}];
  }


}
