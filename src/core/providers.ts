import { Config } from "./config/config";
import { Session } from "./auth/session";
import { UserService } from "./auth/user.service";
import { AuthServiceApp } from "./auth/auth.service";
import { TaskService } from "./services/task.service";

export const APP_PROVIDERS: any[] = [
  AuthServiceApp,
  UserService,
  Session,
  Config,
  TaskService
];

export * from "./api-http";
export * from "./config/config";
export * from "./auth/session";
export * from "./services/task.service";
