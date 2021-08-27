/**
 * work.js
 * 
 * This module regards the logic for the work page
 */
(function(){
    const projectItems = [
        {
            project: () => document.querySelector('#toronto-tube-project'),
            description: () => document.querySelector('#toronto-tube-description'),
        },
        {
            project: () => document.querySelector('#subtle-t-project'),
            description: () => document.querySelector('#subtle-t-description'),
        },
        {
            project: () => document.querySelector('#smart-mirror-project'),
            description: () => document.querySelector('#smart-mirror-description'),
        },
        {
            project: () => document.querySelector('#beth-project'),
            description: () => document.querySelector('#beth-description'),
        },
    ];

    const showProjectDescription = (description) => {
        description().classList.remove('hidden');
    };

    const hideProjectDescription = (description) => {
        description().classList.add('hidden');
    };

    const initWork = () => {
        projectItems.forEach(({ project, description }) => {
            project().addEventListener('mouseenter', () => showProjectDescription(description))
            project().addEventListener('mouseleave', () => hideProjectDescription(description))
        });
    };

    document.addEventListener('DOMContentLoaded', () => initWork());

}());