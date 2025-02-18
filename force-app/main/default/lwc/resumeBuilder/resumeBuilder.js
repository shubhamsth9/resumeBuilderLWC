import { LightningElement } from 'lwc';
// import PersonalInfo from 'c/personalInfo/personalInfo';

export default class ResumeBuilder extends LightningElement {
    personalInfo = {};
    workExInfo = [];

    handleUpdatePI(event){
        this.personalInfo = event.detail;
        // console.log(this.personalInfo);
        // console.log("in pi evt");
    }
    handleUpdateWorkEx(event){
        // console.log("in workex evt");
        this.workExInfo = [...this.workExInfo, event.detail];
        // console.log(this.workExInfo);
    }
}