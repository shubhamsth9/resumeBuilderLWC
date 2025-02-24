import { LightningElement, api, wire, track } from 'lwc';
// import PersonalInfo from 'c/personalInfo/personalInfo';

export default class ResumeBuilder extends LightningElement {
    @track personalInfo = {};
    @track workExInfo = [];
    @track educationInfo = [];
    @track skillsList = [];

    handleUpdatePI(event){
        this.personalInfo = JSON.parse(JSON.stringify(event.detail));
        // console.log(this.personalInfo);
        // console.log("in pi evt");
    }
    handleUpdateWorkEx(event){
        // console.log("in workex evt");
        this.workExInfo = [...this.workExInfo, event.detail];
        // console.log(this.workExInfo);
    }
    handleUpdateEd(event){
        // console.log("in ed evt");
        this.educationInfo = [...this.educationInfo, event.detail];
        // console.log(this.educationInfo);
    }
    handleUpdateSkills(event){
        // console.log("in skills evt");
        let skills = event.detail;
        // console.log("skills ->", this.skills);
        this.skillsList = skills.split(',').map(skill => skill.trim());
        // console.log("skillsList", this.skillsList);
    }
}