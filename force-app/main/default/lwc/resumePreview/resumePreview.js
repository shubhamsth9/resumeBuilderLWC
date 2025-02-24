import { api, track, LightningElement } from 'lwc';

export default class ResumePreview extends LightningElement {

    @api personalInfo;
    @api workExInfo;
    @api educationInfo;
    @api skillsList;

    // connectedCallback() {
    //     console.log("in connectedCallback: personalInfo ->", this._personalInfo);
    //     // console.log("workExInfo ->", this.workExInfo);
    //     // console.log("educationInfo ->", this.educationInfo);
    //     // console.log("skillsList ->", this.skillsList);
    // }
}