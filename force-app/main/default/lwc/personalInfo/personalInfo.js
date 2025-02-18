import { LightningElement } from 'lwc';

export default class PersonalInfo extends LightningElement {
    pInfo = {};
    handlePIChange(event){ 
        let fieldName = event.target.dataset.field;
        let fieldValue = event.target.value;
        this.pInfo[fieldName] = fieldValue;
        this.updateResume();
    }
    updateResume(){
        //created a custom event that gets called everytime a info is changed
        // let updatepievt = new CustomEvent('updatepi', {detail: this.pInfo});
        // this.dispatchEvent(updatepievt);
        this.dispatchEvent(new CustomEvent('updatepi', {detail: this.pInfo}));
    }
}