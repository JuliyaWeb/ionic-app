export class Statistic {
	female: number;
	female_percent: number;
	male: number;
	male_percent: number;
	top_city: string;
	top_country: string;
	total_engagement: Object;
	total_reach: Object;

	isValid: boolean;

	constructor(data = null) {
		if (!data) {
			this.isValid = false;
			return;
		};
		this.isValid = true;
		this.female = data.female;
		this.male = data.male;
		this.top_city = data.top_city;
		this.top_country = data.top_country;
		this.total_engagement = data.total_engagement;
		this.total_reach = data.total_reach;

		this.male_percent = data.male;
		this.female_percent = data.female;
	}

    // private _calculateAudienceGenger(){
    // 	if (!this.isValid) return;
    // 	const total = this.female + this.male;
    // 	this.female_percent = this.female * 100 / total;
    // 	this.male_percent = this.male * 100 / total;
    // }
}
