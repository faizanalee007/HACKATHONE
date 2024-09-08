// Get form elements....
const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
const resumeSection = document.getElementById('resume') as HTMLElement;
const resumeFormSection = document.getElementById('resume-from-section') as HTMLElement
const nameInput = document.getElementById('name') as HTMLInputElement;
const dobInput = document.getElementById('dob') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const phonelInput = document.getElementById('phone') as HTMLInputElement;
const addresslInput = document.getElementById('address') as HTMLInputElement;
const educationInput = document.getElementById('education') as HTMLTextAreaElement;
const skillsInput = document.getElementById('skills') as HTMLInputElement;
const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;
const photoInput = document.getElementById('photo') as HTMLInputElement;

// const photoInput = document.getElementById('photo') as HTMLInputElement;
// const displayPhoto = document.getElementById('display-photo') as HTMLImageElement;

// Get resume display elements
const displayName = document.getElementById('display-name') as HTMLElement;
const displayDOB = document.getElementById('display-dob') as HTMLElement;
const displayEmail = document.getElementById('display-email') as HTMLElement;
const displayPhone = document.getElementById('display-phone') as HTMLElement;
const displayAddress = document.getElementById('display-address') as HTMLElement;
const displayPhoto = document.getElementById('display-photo') as HTMLImageElement;
const displayEducation = document.getElementById('display-education').querySelector('ul') as HTMLElement;
const displaySkills = document.getElementById('display-skills').querySelector('ul') as HTMLElement;
const displayExperience = document.getElementById('display-experience').querySelector('ul') as HTMLElement;

// Handle form submission
resumeForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload

    if (nameInput.value === '' || emailInput.value === '') {
        alert('Please fill in all fields.');
        return;
    }

    const file = photoInput.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            displayPhoto.src = e.target?.result as string;
            displayPhoto.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }

    // Continue with generating the resume
    displayName.textContent =nameInput.value;
    displayDOB.textContent =  dobInput.value
    displayEmail.textContent = emailInput.value;
    displayPhone.textContent = phonelInput.value
    displayAddress.textContent = addresslInput.value

    // Update Education
    const educationItems = educationInput.value.split('\n');
    displayEducation.innerHTML = '';  // Clear previous entries
    educationItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        displayEducation.appendChild(li);
    });

    // Update Skills
    const skillItems = skillsInput.value.split(',');
    displaySkills.innerHTML = '';  // Clear previous entries
    skillItems.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill.trim();
        displaySkills.appendChild(li);
    });

    // Update Work Experience
    const experienceItems = experienceInput.value.split('\n');
    displayExperience.innerHTML = '';  // Clear previous entries
    experienceItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        displayExperience.appendChild(li);
    });
     
    // Show the resume section after the form is submitted
    resumeSection.style.display = 'block'; 
        
});



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


const reGenerateButton =  document.getElementById('regenrate-cv') as HTMLButtonElement
reGenerateButton.addEventListener('click', ()=>{

    resumeSection.style.display = 'none'; 
    window.scrollTo({ top: 0, behavior: 'smooth' });
   
   

})






