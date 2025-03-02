import { api, track, LightningElement } from 'lwc';

export default class ResumePreview extends LightningElement {

    @api personalInfo;
    @api workExInfo;
    @api educationInfo;
    @api skillsList;
    @track formattedWorkEx = [];

    connectedCallback() {
        // Format dates when component initializes
        this.formattedWorkEx = {
            ...this.workExInfo,
            startDate: this.formatDate(this.workExInfo.startDate),
            endDate: this.formatDate(this.workExInfo.endDate)
        };
    }
    
    formatDate(dateString){
        if (!dateString) return '';
        return dateString.replace(/-/g, '/');
    }
}