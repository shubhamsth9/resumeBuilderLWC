import { LightningElement } from 'lwc';

export default class Skills extends LightningElement {
    // skills = "";

    handleAddSkills(){
        console.log("in handle add skills");
        let skills = this.template.querySelector('[data-id="skillsInput"]');
        if(skills){
            let skillsValue = skills.value;
            console.log("skills in skill component ->", skillsValue);
            this.dispatchEvent(new CustomEvent('updateskills', {detail: skillsValue}));
        }
        else{
            console.log("skills input not found->");
        }
    }
}