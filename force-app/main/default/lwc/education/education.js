import { LightningElement } from 'lwc';

export default class Education extends LightningElement {

    educationInfo = {};
    handleEDChange(event){
        let fieldName = event.target.dataset.field;
        let fieldValue = event.target.value;
        this.educationInfo[fieldName] = fieldValue;
    }
    handleAddEdu(){
        const educationInfoCopy = JSON.parse(JSON.stringify(this.educationInfo)); 
        this.dispatchEvent(new CustomEvent('updateeducation', {detail: educationInfoCopy}));
    }

}