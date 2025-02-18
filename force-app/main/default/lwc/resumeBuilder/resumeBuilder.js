import { LightningElement } from 'lwc';
// import PersonalInfo from 'c/personalInfo/personalInfo';

export default class ResumeBuilder extends LightningElement {
    personalInfo = {};
    workExInfo = [];
    educationInfo = [];
    skillsList = [];

    handleUpdatePI(event){
        this.personalInfo = event.detail;
        // console.log(this.personalInfo); git se masti ke liye ek aur commit
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