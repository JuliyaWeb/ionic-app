export class LoginForm {
  email: string;
  password: string;

  constructor(data: Object) {
    this.email = data['email'];
    this.password = data['password'];
  }

  static validationMessages(): Object {
    return {
      'password': {
        'required': 'Password is required.',
        'minlength': 'Password isn\'t long enough, minimum of 8 characters.'
      },
      'email': {
        'required': 'Email is required.',
        'invalidEmail': 'Invalid email address.'
      }
    }
  }
}

export class RegisterForm {
  username: string;
  email: string;
  password: string;

  constructor(data: Object) {
    this.username = data['username'];
    this.email = data['email'];
    this.password = data['password'];
  }

  static validationMessages(): Object {
    return {
      'username': {
        'required': 'Name is required.',
        'minlength': 'Minimum of 3 characters.'
      },
      'email': {
        'required': 'Email is required.',
        'invalidEmail': 'Invalid email address.'
      },
      'password': {
        'required': 'Password is required.',
        'minlength': 'Password isn\'t long enough, minimum of 8 characters.'
      }
    }
  }
}

export class RegisterSecondaryFrom {
  public first_name: string;
  public last_name: string;
  public possition: string;
  public username: string;
  public password: string;
  public confirm_password: string;
  public company: Company;
  public invite_emails: Array<string>;

  constructor() {
  }

  setDataForStep(data: Object, step: string) {
    console.log('setDataForStep', step, data);
    switch (step) {
      case 'USER_INFO':
      case 'PASSWORD':
        for (let value in data) {
          this[value] = data[value];
        }
        break;
      case 'TEAM':
        let formattedData: Array<string> = [];
        data['invite_emails'].forEach((item) => {
          if (item.invite_email) {
            formattedData.push(item.invite_email);
          }
        })
        this.invite_emails = formattedData;
        break;
      case 'COMPANY':
        this.company = new Company(data['company_url'], data['industry'], data['email_domain'])
      default:
        // code...
        break;
    }
  }

  static validationMessages(step: number): Object {
    const errors = {
      [FormState[FormState.USER_INFO]]: {
        'first_name': {
          'required': 'First Name is required.',
          'minlength': 'Minimum of 3 characters.',
          'invalidName': 'Invalid First Name.'
        },
        'last_name': {
          'required': 'Last Name is required.',
          'minlength': 'Minimum of 3 characters.',
          'invalidName': 'Invalid Last Name.'
        },
        'possition': {
          'required': 'Possition is required.',
          'minlength': 'Minimum of 3 characters.'
        },
        'username': {
          'required': 'Username is required.',
          'minlength': 'Minimum of 3 characters.'
        }
      },
      [FormState[FormState.COMPANY]]: {
        'company_url': {
          'required': 'Company URL is required.',
          'minlength': 'Minimum of 3 characters.',
          'invalidLink': 'Invalid Company URL.',
        },
        'industry': {
          'required': 'Industry is required.',
          'minlength': 'Minimum of 3 characters.'
        },
        'email_domain': {
          'required': 'Email Domain is required.',
          'minlength': 'Minimum of 3 characters.',
          'invalidDomain': 'Invalid Company domain.'
        }
      },
      [FormState[FormState.PASSWORD]]: {
        'password': {
          'required': 'Password is required.',
          'minlength': 'Password isn\'t long enough, minimum of 8 characters.'
        },
        'confirm_password': {
          'required': 'Confirm Password is required.',
          'mismatchedPasswords': 'Passwords do not match.'
        }
      }
    }
    return errors[FormState[step]];
  }

}

export class Company {
  url: string;
  industry: string;
  email_domain: string;

  constructor(url, industry, email_domain) {
    this.url = url;
    this.industry = industry;
    this.email_domain = email_domain;
  }
}

export enum FormState {
  USER_INFO = 1,
  COMPANY = 2,
  TEAM = 3,
  PASSWORD = 4
}
