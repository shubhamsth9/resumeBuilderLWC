import { LightningElement } from 'lwc';
import LightningAlert from 'lightning/alert';

export default class WorkEx extends LightningElement {
    workExInfo = {};
    handleWXChange(event){
        let fieldName = event.target.dataset.field;
        let fieldValue = event.target.value;
        this.workExInfo[fieldName] = fieldValue;
        // console.log("on change in work ex", this.workExInfo);
        // this.handleAddWorkEx();
    }
    handleOnSubmit(){
        // console.log("in handle On Submit --->", this.workExInfo);
        const workExInfoCopy = JSON.parse(JSON.stringify(this.workExInfo)); 
        // console.log(workExInfoCopy);
        this.dispatchEvent(new CustomEvent('updateworkex', {detail: workExInfoCopy}));
        // this.handleAddWorkEx();
    }
    // handleAddWorkEx(){
    //     this.dispatchEvent(new CustomEvent('updateworkex', {detail: this.workExInfo}));
    // }

}