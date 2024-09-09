// Get form elements....
var resumeForm = document.getElementById('resume-form');
var resumeSection = document.getElementById('resume');
var resumeFormSection = document.getElementById('resume-from-section');
var nameInput = document.getElementById('name');
var dobInput = document.getElementById('dob');
var emailInput = document.getElementById('email');
var phonelInput = document.getElementById('phone');
var addresslInput = document.getElementById('address');
var educationInput = document.getElementById('education');
var skillsInput = document.getElementById('skills');
var experienceInput = document.getElementById('experience');
var photoInput = document.getElementById('photo');
// const photoInput = document.getElementById('photo') as HTMLInputElement;
// const displayPhoto = document.getElementById('display-photo') as HTMLImageElement;
// Get resume display elements
var displayName = document.getElementById('display-name');
var displayDOB = document.getElementById('display-dob');
var displayEmail = document.getElementById('display-email');
var displayPhone = document.getElementById('display-phone');
var displayAddress = document.getElementById('display-address');
var displayPhoto = document.getElementById('display-photo');
var displayEducation = document.getElementById('display-education').querySelector('ul');
var displaySkills = document.getElementById('display-skills').querySelector('ul');
var displayExperience = document.getElementById('display-experience').querySelector('ul');
// Handle form submission
resumeForm.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault(); // Prevent page reload
    if (nameInput.value === '' || emailInput.value === '') {
        alert('Please fill in all fields.');
        return;
    }
    var file = (_a = photoInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            displayPhoto.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            displayPhoto.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
    // Continue with generating the resume
    displayName.textContent = nameInput.value;
    displayDOB.textContent = dobInput.value;
    displayEmail.textContent = emailInput.value;
    displayPhone.textContent = phonelInput.value;
    displayAddress.textContent = addresslInput.value;
    // Update Education
    var educationItems = educationInput.value.split('\n');
    displayEducation.innerHTML = ''; // Clear previous entries
    educationItems.forEach(function (item) {
        var li = document.createElement('li');
        li.textContent = item;
        displayEducation.appendChild(li);
    });
    // Update Skills
    var skillItems = skillsInput.value.split(',');
    displaySkills.innerHTML = ''; // Clear previous entries
    skillItems.forEach(function (skill) {
        var li = document.createElement('li');
        li.textContent = skill.trim();
        displaySkills.appendChild(li);
    });
    // Update Work Experience
    var experienceItems = experienceInput.value.split('\n');
    displayExperience.innerHTML = ''; // Clear previous entries
    experienceItems.forEach(function (item) {
        var li = document.createElement('li');
        li.textContent = item;
        displayExperience.appendChild(li);
    });
    // Show the resume section after the form is submitted
    resumeSection.style.display = 'block';
    var buttonSection = document.getElementById('buttonSection');
    buttonSection.style.display = 'flex';
});
//Toogle buttons Fucntions for Different Sections..
var toggleEducation = document.getElementById('toggle-education');
var educationSection = document.getElementById('educationList');
toggleEducation.addEventListener('click', function () {
    if (educationSection.style.display === 'none') {
        educationSection.style.display = 'block';
        toggleEducation.textContent = '-';
    }
    else {
        educationSection.style.display = 'none';
        toggleEducation.textContent = '+';
    }
});
var toggleSkills = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skillsList');
toggleSkills.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleSkills.textContent = '-';
    }
    else {
        skillsSection.style.display = 'none';
        toggleSkills.textContent = '+';
    }
});
var toggleWork = document.getElementById('toggle-work');
var workSection = document.getElementById('workList');
toggleWork.addEventListener('click', function () {
    if (workSection.style.display === 'none') {
        workSection.style.display = 'block';
        toggleWork.textContent = '-';
    }
    else {
        workSection.style.display = 'none';
        toggleWork.textContent = '+';
    }
});
var reGenerateButton = document.getElementById('regenrate-cv');
reGenerateButton.addEventListener('click', function () {
    resumeSection.style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
var downloadButton = document.getElementById('download-cv');
downloadButton.addEventListener('click', function () {
    var resumeElement = document.getElementById("resume");
    var opt = {
        margin: 0,
        filename: "Resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {},
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] // Optional: helps to prevent breaking important sections
        }
    };
    html2pdf().from(resumeElement).set(opt).save();
});
