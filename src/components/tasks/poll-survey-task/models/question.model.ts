export class Question {
    title: string;
    question_title: string;
    description: string;
    question_id: number;
    type: string;
    question_options: Array<Object>;
    texBox_data_type?: any;
    scale_labels?: Array<string>;
    mandatory_question?: boolean;
    randomize_order?: boolean;
    ordering?: boolean;
    formGroup: any;

    constructor(data) {
        this.question_id = data.id;
        this.title = data.title;
        this.type = data.type;
    }

    setValue() {
        this.question_title = this.formGroup.value.question;
        this.description = this.formGroup.value.description;
        this.mandatory_question = this.formGroup.value.mandatory_question;
        this.randomize_order = this.formGroup.value.randomize_order;
        this.formGroup.value.randomize_order && (this.randomize_order = this.formGroup.value.randomize_order);
        if (this.formGroup.value.scale_min && this.formGroup.value.scale_max) {
            this.scale_labels = [this.formGroup.value.scale_min, this.formGroup.value.scale_max]
        }

        if ((this.type !== 'text_box') && (this.type !== 'one_to_ten')) {
            this.question_options = this.formGroup.value.options;
        }
    }

    serializeDataForRequest(): Object {
        let obj = {
            question: this.question_title,
            description: this.description,
            question_type: this.question_id,
            is_mandatory_question: this.mandatory_question,
            is_randomize_order: this.randomize_order,
            ordering: this.ordering,
            data_type: this.texBox_data_type,
            question_options: this.question_options,
            scale_labels: this.scale_labels
        };
        return obj;
    }

}