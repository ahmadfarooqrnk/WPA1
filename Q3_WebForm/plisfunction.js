document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('jobApplicationForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Validation examples
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const phoneNumber = document.getElementById('phoneNumber').value.trim();
        const emailAddress = document.getElementById('emailAddress').value.trim();
        const educationLevel = document.getElementById('educationLevel').value;

        // Simple validation checks
        if (!firstName || !lastName || !phoneNumber.match(/^\d{10}$/) || !emailAddress.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) || !educationLevel) {
            alert('Please fill out all required fields correctly.');
            return; // Stop the function if validation fails
        }

        // If validation passes, log the data to the console (simulating data processing)
        console.log('Form Submission:', {
            firstName,
            lastName,
            phoneNumber,
            emailAddress,
            educationLevel,
            // Include other fields as needed
        });

        // Clear the form or redirect the user as necessary
        // form.reset();
        // window.location.href = 'thank-you.html'; // Example redirect
    });
    
        // Function to handle form submission and add the application to a simulated database
        function handleSubmit() {
            // Collect data from the form fields
            const application = {
                firstName: document.getElementById('firstName').value.trim(),
                lastName: document.getElementById('lastName').value.trim(),
                phoneNumber: document.getElementById('phoneNumber').value.trim(),
                emailAddress: document.getElementById('emailAddress').value.trim(),
                educationLevel: document.getElementById('educationLevel').value,
                // Add new fields here
                previousJobTitle: document.getElementById('previousJobTitle').value.trim(),
                companyName: document.getElementById('companyName').value.trim(),
                employmentDates: document.getElementById('employmentDates').value.trim(),
                jobResponsibilities: document.getElementById('jobResponsibilities').value.trim(),
                relevantSkills: document.getElementById('relevantSkills').value.trim(),
                certifications: document.getElementById('certifications').value.trim(),
                startDate: document.getElementById('startDate').value.trim(),
                workSchedule: document.getElementById('workSchedule').value.trim(),
                willingnessToRelocate: document.getElementById('willingnessToRelocate').checked, // Assuming this is a checkbox
                referenceName: document.getElementById('referenceName').value.trim(),
                referenceContact: document.getElementById('referenceContact').value.trim(),
                relationshipToApplicant: document.getElementById('relationshipToApplicant').value.trim(),
                reasonForInterest: document.getElementById('reasonForInterest').value.trim(),
            };
    
            // Simple validation can go here if needed
    
            // Add the new application to the simulated database
            applications.push(application);
    
            console.log('Application Submitted:', application);
    
            // Optionally clear the form or provide feedback to the user
            form.reset();
        }
    
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission
            handleSubmit(); // Handle the form submission
        });
    
        // Simulated database for storing form submissions
        let applications = [];
    
        // Function to display applications as a table
        function displayApplications() {
            // Check if a table already exists and remove it
            const existingTable = document.getElementById('applicationsTable');
            if (existingTable) {
                existingTable.remove();
            }
    
            const table = document.createElement('table');
            table.setAttribute('id', 'applicationsTable'); // Set an id for the table
            table.setAttribute('border', '1');
            const thead = table.createTHead();
            const tbody = table.createTBody();
            const row = thead.insertRow();
    
            // Define the table headers based on the form fields
            const headers = ['First Name', 'Last Name', 'Phone Number', 'Email Address', 'Education Level', 'Previous Job Title', 'Company Name', 'Employment Dates', 'Job Responsibilities', 'Relevant Skills', 'Certifications', 'Start Date', 'Work Schedule', 'Willingness to Relocate', 'Reference Name', 'Reference Contact', 'Relationship to Applicant', 'Reason for Interest'];
            headers.forEach(header => {
                const th = document.createElement('th');
                th.textContent = header;
                row.appendChild(th);
            });
    
            // Populate the table with application data
            applications.forEach(application => {
                const row = tbody.insertRow();
                Object.values(application).forEach(text => {
                    const cell = row.insertCell();
                    cell.textContent = text;
                });
            });
    
            // Append the table to the body or a specific element
            document.body.appendChild(table); // Change this if you want to append the table somewhere else
        }
    
        // Add event listener to the "View Applications" button
        document.getElementById('viewApplications').addEventListener('click', displayApplications);
    });