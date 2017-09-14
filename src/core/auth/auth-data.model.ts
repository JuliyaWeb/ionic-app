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
  email: string;

  constructor() {
  }

  static validationMessages(): Object {
    return {
      'email': {
        'required': 'Email is required.',
        'invalidEmail': 'Invalid email address.'
      }
    }
  }
}

export class RegisterSecondaryFrom {
  public first_name: string;
  public last_name: string;
  public username: string;
  public password: string;
  public confirm_password: string;


  constructor(data: Object) {
    this.first_name = data['first_name'];
    this.last_name = data['last_name'];
    this.username = data['username'];
    this.password = data['password'];
    this.confirm_password = data['confirm_password'];
  }

  static validationMessages(): Object {
    return {
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
      'username': {
        'required': 'Username is required.',
        'minlength': 'Minimum of 3 characters.'
      },
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

}
