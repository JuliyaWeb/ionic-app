import { Statistic } from "./statistic.model";
import { INetwork } from "./network.model";

export class User {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  created: string;
  created_by: string;
  modified: string;
  modified_by: string;
  info: Object;
  networks: Array<INetwork>;
  geo_distance: string|boolean;
  geo_distance_km: string|boolean;
  statistics: Statistic;

  constructor(data: any) {
    this.id = data.id;
    this.first_name = data.first_name;
    this.last_name = data.last_name;
    this.username = data.username;
    this.email = data.email;
    this.created = data.created;
    this.created_by = data.created_by;
    this.modified = data.modified;
    this.modified_by = data.modified_by;
  }

  get full_name(): string {
    return `${this.first_name} ${this.last_name}`;
  }

  isValid(): boolean {
    return !!this.id;
  }

}
