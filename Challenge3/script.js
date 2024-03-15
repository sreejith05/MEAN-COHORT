// Dummy user data for demonstration purposes
const users = [
    { username: 'student1', password: 'password1' },
    { username: 'student2', password: 'password2' }
];

// Get references to necessary elements
const loginForm = document.getElementById('loginForm');
const registrationForm = document.getElementById('registrationForm');
const registerLink = document.getElementById('registerLink');
const loginLink = document.getElementById('loginLink');
const loginPage = document.querySelector('.login-page');
const registrationPage = document.querySelector('.registration-page');
const logout = document.getElementById('logout-btn')

// Show registration page
// registerLink.addEventListener('click', (e) => {
//     e.preventDefault();
//     loginPage.style.display = 'none';
//     registrationPage.style.display = 'block';
// });

// Show login page
const handleLogin = () =>{

loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginPage.style.display = 'block';
    registrationPage.style.display = 'none';
});

// Handle login form submission

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loggedIn = true

    console.log(username)
    console.log(password)

    // Check if user is valid
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        // Redirect to welcome page
        window.location.href = 'login.html';
        localStorage.setItem("username",username)
        localStorage.setItem("password",password)
        localStorage.setItem('loggedIn',true)
    } else {
        alert('Invalid username or password');
        //redirect to other page
    }
});

}

const handleLogout = () => {
    logout.addEventListener('click', (e) =>{
        window.location.href = 'index.html'
    },false)
}

const handleRegistration = ()=>{
// Handle registration form submission
registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;

    // Register the new user (dummy implementation)
    users.push({ username, password });
    alert('Registration successful!');

    // Redirect to login page
    loginPage.style.display = 'block';
    registrationPage.style.display = 'none';
});

}

// Array to store monthly activities
const monthlyActivities = [
    {
        id: 1,
        activity: "Create project file which contains tables between 12 to 19",
        subject: "Maths"
    },
    {
        id: 2,
        activity: "Prepare a presentation on Newton's laws of motion",
        subject: "Physics"
    },
    {
        id: 3,
        activity: "Write an essay on the importance of chemistry in daily life",
        subject: "Chemistry"
    },
    {
        id: 4,
        activity: "Read and analyze the novel 'To Kill a Mockingbird'",
        subject: "English"
    }
];

// Get references to necessary elements
const monthlyActivitiesBtn = document.getElementById('monthlyActivitiesBtn');
const monthlyActivitiesSection = document.querySelector('.monthly-activities');
const subjectDropdown = document.getElementById('subjectDropdown');
const activityList = document.getElementById('activityList');


// Show/hide monthly activities
const subjectDetails = () => {
    monthlyActivitiesBtn.addEventListener('click', () => {
        monthlyActivitiesSection.style.display = monthlyActivitiesSection.style.display === 'none' ? 'block' : 'none';
    },true);

    // Filter and display monthly activities based on selected subject
    subjectDropdown.addEventListener('change', () => {
        const selectedSubject = subjectDropdown.value;
        const filteredActivities = monthlyActivities.filter(activity => activity.subject === selectedSubject);

        activityList.innerHTML = '';
        if (filteredActivities.length === 0) {
            activityList.innerHTML = '<p>No activities found for the selected subject.</p>';
        } else {
            filteredActivities.forEach(activity => {
                const activityItem = document.createElement('div');
                activityItem.textContent = `${activity.id}. ${activity.activity}`;
                activityList.appendChild(activityItem);
            });
        }
    });
}

// Call the subjectDetails function after the DOM content is loaded
document.addEventListener('DOMContentLoaded', subjectDetails)