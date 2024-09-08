

//Toogle buttons Fucntions for Different Sections..
const toggleEducation = document.getElementById('toggle-education') as HTMLButtonElement;
const educationSection = document.getElementById('educationList') as HTMLElement;

toggleEducation.addEventListener('click', () => {
    if (educationSection.style.display === 'none') {
        educationSection.style.display = 'block';
        toggleEducation.textContent = '-';
    } else {
        educationSection.style.display = 'none';
        toggleEducation.textContent = '+';
    }
});


const toggleSkills = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsSection = document.getElementById('skillsList') as HTMLElement;

toggleSkills.addEventListener('click', () => {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleSkills.textContent = '-';
       
    } else {
        skillsSection.style.display = 'none';
        toggleSkills.textContent = '+';
    }
});


const toggleWork = document.getElementById('toggle-work') as HTMLButtonElement;
const workSection = document.getElementById('workList') as HTMLElement;

toggleWork.addEventListener('click', () => {
    if (workSection.style.display === 'none') {
        workSection.style.display = 'block';
        toggleWork.textContent= '-'
       
    } else {
        workSection.style.display = 'none';
        toggleWork.textContent= '+'         
    }
});








