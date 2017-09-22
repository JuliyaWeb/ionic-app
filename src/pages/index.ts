import { WelcomePage } from "./welcome/welcome";
import { LoginPage } from "./auth/login/login";
import { RegisterPage } from "./auth/register/register";
import { ProfilePage } from "./profile/profile";
import { TabsPage } from "./tabs/tabs";
import { InsightsPage } from "./insights/insights";
import { NotificationsPage } from "./notifications/notifications";
import { TasksPage } from "./tasks/tasks";
import { TaskDetailPage } from "./task-detail/task-detail";
import { ChatPage } from "./chat/chat";
import { CampaignOfferPage } from "./campaign-offer/campaign-offer";
import { RegisterCompletionPage } from "./auth/register-completion/register-completion";
import { ForgotPasswordPage } from "./auth/forgot-password/forgot-password";

export const APP_PAGES: any[] = [
  WelcomePage,
  LoginPage,
  RegisterPage,
  RegisterCompletionPage,
  ForgotPasswordPage,
  ProfilePage,
  InsightsPage,
  NotificationsPage,
  ChatPage,
  CampaignOfferPage,
  TasksPage,
  TaskDetailPage,
  TabsPage
];
