import { Config } from "./config/config";
import { Session } from "./auth/session";
import { UserService } from "./auth/user.service";
import { AuthServiceApp } from "./auth/auth.service";

export const APP_PROVIDERS: any[] = [
  AuthServiceApp,
  UserService,
  Session,
  Config,
];

export * from "./api-http";
export * from "./config/config";
export * from "./auth/session";
