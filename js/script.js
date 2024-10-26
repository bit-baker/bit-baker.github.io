const moreButton = document.getElementById('more');
const moreModal = document.getElementById('more_modal');
const moreClose = document.getElementById('more_closeModal');

moreButton.addEventListener('click', () => {
    moreModal.style.display = 'block';
});

moreClose.addEventListener('click', () => {
    moreModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === moreModal) {
        moreModal.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector('.highlights-wrapper');
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
    const highlight = document.querySelector('.highlight'); // First skill to determine width

    const highlightWidth = 75; // Width of each highlight (including gaps)
    const visibleHighlights = 7; // Number of highlights visible at a time
    const scrollAmount = highlightWidth * visibleHighlights;

    // Scroll left and right on button click
    leftBtn.addEventListener('click', () => scrollHorizontally(-scrollAmount));
    rightBtn.addEventListener('click', () => scrollHorizontally(scrollAmount));

    // Smooth scroll function
    function scrollHorizontally(distance) {
        wrapper.scrollBy({
            left: distance,
            behavior: 'smooth'
        });

        // Toggle buttons after scroll completes
        setTimeout(toggleButtons, 300);
    }

    // Enable or disable scroll buttons based on position
    function toggleButtons() {
        const atStart = wrapper.scrollLeft <= 0;
        const atEnd = wrapper.scrollLeft + wrapper.clientWidth >= wrapper.scrollWidth;

        leftBtn.disabled = atStart;
        rightBtn.disabled = atEnd;
    }

    // Check button state on load
    toggleButtons();

    // Adjust button state when window resizes
    window.addEventListener('resize', toggleButtons);
});

function sendEmail(event) {
    event.preventDefault(); // Prevent form submission

    // Replace this with your email sending logic
    const formData = new FormData(document.getElementById('contactForm'));
    const emailData = {};
    formData.forEach((value, key) => {
        emailData[key] = value;
    });

    console.log('Email sent with the following data:', emailData);

    // Here you can use a service like EmailJS, Formspree, etc.
    alert('Your message has been sent!');

    // Reset the form after submission
    document.getElementById('contactForm').reset();
}

function openDetailPage(photo) {
    const contentContainer = document.getElementById('content-container');

    // Here, you can customize the content based on the clicked figure
    let detailContent = '';
    switch (photo) {
        case 'work_1':
            detailContent = `
                <h2>Veolia North America</h2>
                <p>Data Science Engineer</p>
            `;
            break;
        case 'work_2':
            detailContent = `
                <h2>Detail for Photo 2</h2>
                <img src="./images/UB_wordcloud.jpg" alt="Photo 2" style="width: 100%; max-width: 400px;">
                <p>Description and additional details about this photo.</p>
            `;
            break;
        case 'work_3':
            detailContent = `
                <h2>Detail for Photo 1</h2>
                <img src="./images/photo_1.png" alt="Photo 1" style="width: 100%; max-width: 400px;">
                <p>Description and additional details about this photo.</p>
            `;
            break;
    }

    // Display the detail content
    contentContainer.innerHTML = detailContent;
}


function openSection(section, element) {
    const contentContainer = document.getElementById('content-container');

    const navItems = document.querySelectorAll('.nav-item h6');
    navItems.forEach(item => {
        item.style.fontWeight = 'normal';
    });

    element.querySelector('h6').style.fontWeight = 'bold';

    let content = '';
    switch (section) {
        case 'work':
            content = `<section class="profile-publications">
                            <figure class="profile-img" onclick="openDetailPage('work_1')">
                                <img src="./images/veolia_wordcloud.jpg" alt="Photo">
                                <div class="role-hover">
                                    <div class="likes"> <strong>Data Science Engineer</strong></div>

                                </div>
                            </figure>
                            <figure class="profile-img" onclick="openDetailPage('work_2')">
                                <img src="./images/UB_wordcloud.jpg" alt="Photo">
                                <div class="role-hover">
                                    <div class="likes"> <strong>Reseearcher</strong></div>
                                </div>
                            </figure>
                            <figure class="profile-img" onclick="openDetailPage('work_3')">
                                <img src="./images/kaiser_wordcloud.jpg" alt="Photo">
                                <div class="role-hover">
                                    <div class="likes"> <strong>Software Engineer, ML</strong></div>
                                </div>
                            </figure>
                        </section>`;
            break;
        case 'projects':
            content = `<section class="profile-publications">
                           <figure class="profile-img" onclick="openDetailPage('project_1')">
                               <img src="./images/project_1.png" alt="Gen AI with LLMs" style="width: 100%; max-width: 400px; height: auto; object-fit: cover; ">
                               <div class="role-hover">
                                    <div class="likes"> <strong>Gen AI</strong></div>
                               </div>
                           </figure>
                           <figure class="profile-img" onclick="openDetailPage('project_1')">
                               <img src="./images/work_1.jpeg" alt="Affective State Analysis" style="width: 100%; max-width: 400px;">
                               <div class="role-hover">
                                    <div class="likes"> <strong>Computer Vision</strong></div>
                               </div>
                           </figure>
                           <figure class="profile-img" onclick="openDetailPage('project_1')">
                               <img src="./images/work_1.jpeg" alt="Connected Autonomous Driving using Multi-Agent Deep Reinforcement Learning">
                               <div class="role-hover">
                                    <div class="likes"> <strong>Deep RL</strong></div>
                               </div>
                           </figure>
                           <figure class="profile-img" onclick="openDetailPage('project_1')">
                               <img src="./images/work_1.jpeg" alt="Fairness in Multi-Agent Reinforcement Learning">
                               <div class="role-hover">
                                    <div class="likes"> <strong>Multi-Agent Reinforcement Learning</strong></div>
                               </div>
                           </figure>
                           <figure class="profile-img" onclick="openDetailPage('project_1')">
                               <img src="./images/work_1.jpeg" alt="Image Grouping using K-Means Clustering">
                               <div class="role-hover">
                                    <div class="likes"> <strong>Unsupervised Learning</strong></div>
                               </div>
                           </figure>
                           <figure class="profile-img" onclick="openDetailPage('project_1')">
                               <img src="./images/work_1.jpeg" alt="Diabetes Prediction using Classification">
                               <div class="role-hover">
                                    <div class="likes"> <strong>Supervised Learning</strong></div>
                               </div>
                           </figure>
                           <figure class="profile-img" onclick="openDetailPage('project_1')">
                               <img src="./images/work_1.jpeg" alt="NVIDIA Stock Pricing prediction using Q-Learning">
                               <div class="role-hover">
                                    <div class="likes"> <strong>Reinforcement Learning</strong></div>
                               </div>
                           </figure>

                       </section>`;
            break;
        case 'education':
            content = `<section class="profile-publications">
                           <figure class="profile-img">
                               <img src="./images/project_1.png" alt="Project 1">
                               <div class="role-hover">
                                   <div class="likes"><i class="fas fa-heart"></i> <strong>30</strong></div>
                                   <div class="comments"><i class="fas fa-comment"></i> <strong>12</strong></div>
                               </div>
                           </figure>
                       </section>`;
            break;
        case 'certifications':
            content = `<section class="profile-publications">
                           <figure class="profile-img">
                               <img src="./images/project_1.png" alt="Project 1">
                               <div class="role-hover">
                                   <div class="likes"><i class="fas fa-heart"></i> <strong>30</strong></div>
                                   <div class="comments"><i class="fas fa-comment"></i> <strong>12</strong></div>
                               </div>
                           </figure>
                       </section>`;
            break;
        case 'contact':
        content = `<section class="profile-publications">
                           <div class="contact-section">
                                <div class="form-container">
                                    <form id="contactForm" onsubmit="sendEmail(event)">
                                        <input type="text" placeholder="Name" required>
                                        <input type="email" placeholder="Email" required>
                                        <input type="tel" placeholder="Phone" required>
                                        <textarea placeholder="Message" required></textarea>
                                        <button type="submit">Send Message</button>
                                    </form>
                                </div>
                            </div>
                       </section>`;
    }

    // Display the content in the content container
    contentContainer.innerHTML = content;
}



function openModal(section) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    let content = '';

    switch (section) {
        case 'work':
            content = '<h2>Work Experience</h2><p>Details about work...</p>';
            break;
        case 'projects':
            content = '<h2>Projects</h2><p>Details about projects...</p>';
            break;
        case 'education':
            content = '<h2>Education</h2><p>Details about education...</p>';
            break;
        case 'certifications':
            content = '<h2>Certifications</h2><p>Details about certifications...</p>';
            break;
    }

    modalBody.innerHTML = content;
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

const postIds = ["work_1", "work_2", "work_3"];
let currentPostIndex = 0;

function openDetailPage(workId) {
    currentPostIndex = postIds.indexOf(workId);
    updateModalContent(workId);
    document.getElementById('modal').style.display = "block";
}

function updateModalContent(workId) {
    currentContent = content[workId];
    currentImageIndex = 0;

    // Update modal image, title, subtitle, logo, and description
    document.getElementById('modal-image').src = currentContent.images[currentImageIndex];
    document.getElementById('modal-text').innerText = currentContent.descriptions[currentImageIndex];
    document.getElementById('modal-title').innerText = getModalTitle(workId);
    document.getElementById('modal-subtitle').innerText = currentContent.subtitle;
    document.getElementById('modal-logo').src = getModalLogo(workId);
}

function getModalTitle(workId) {
    switch (workId) {
        case 'work_1': return "Veolia North America";
        case 'work_2': return "University at Buffalo";
        case 'work_3': return "Kaiser Permanente";
    }
}

function getModalLogo(workId) {
    switch (workId) {
        case 'work_1': return "./images/veolia_logo.png";
        case 'work_2': return "./images/ub_logo.png";
        case 'work_3': return "./images/kaiser_logo.png";
    }
}

function prevPost() {
    currentPostIndex = (currentPostIndex - 1 + postIds.length) % postIds.length;
    updateModalContent(postIds[currentPostIndex]);
}

function nextPost() {
    currentPostIndex = (currentPostIndex + 1) % postIds.length;
    updateModalContent(postIds[currentPostIndex]);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + currentContent.images.length) % currentContent.images.length;
    document.getElementById('modal-image').src = currentContent.images[currentImageIndex];
    document.getElementById('modal-text').innerText = currentContent.descriptions[currentImageIndex];
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % currentContent.images.length;
    document.getElementById('modal-image').src = currentContent.images[currentImageIndex];
    document.getElementById('modal-text').innerText = currentContent.descriptions[currentImageIndex];
}


const content = {
    work_1: {
        images: ["./images/veolia_wordcloud.jpg", "./images/veolia_image2.jpg", "./images/veolia_image3.jpg"],
        descriptions: [
            `
            <div class="description">
                <h3 style="color: #1d3557;">Data Engineering</h3>
                <p>As a Data Engineering lead, I worked on:</p>
                <ul>
                    <li><strong>Robust Data Pipelines:</strong> Designed and implemented data pipelines to streamline data processing.</li>
                    <li><strong>Data Quality Assurance:</strong> Ensured high-quality data through rigorous testing and validation.</li>
                    <li><strong>Cross-Functional Collaboration:</strong> Worked closely with data scientists and stakeholders for optimal solutions.</li>
                </ul>
            </div>
            `,
            `
            <div class="description">
                <h3 style="color: #1d3557;">Machine Learning</h3>
                <p>In my role, I developed ML models that:</p>
                <ul>
                    <li><strong>Predictive Analysis:</strong> Enhanced operational efficiency by predicting outcomes.</li>
                    <li><strong>Automation:</strong> Automated data-driven decisions to improve productivity.</li>
                </ul>
            </div>
            `,
            `
            <div class="description">
                <h3 style="color: #1d3557;">Software Engineering</h3>
                <p>Contributed to software projects by:</p>
                <ul>
                    <li><strong>Scalability:</strong> Building scalable applications that handled large data volumes.</li>
                    <li><strong>Performance Optimization:</strong> Refactoring code for improved performance.</li>
                </ul>
            </div>
            `,
        ]
    },
    work_2: {
        images: ["./images/UB_wordcloud.jpg"],
        descriptions: [
            `
            <div class="description">
                <h3 style="color: #1d3557;">Research</h3>
                <p>My research focused on:</p>
                <ul>
                    <li><strong>Data Analysis:</strong> Leveraged statistical tools for comprehensive data analysis.</li>
                    <li><strong>Publications:</strong> Authored papers that contributed to the academic community.</li>
                </ul>
            </div>
            `
        ]
    },
    work_3: {
        images: ["./images/kaiser_wordcloud.jpg", "./images/kaiser_2.jpg"],
        descriptions: [
            `
            <div class="description">
                <h3 style="color: #1d3557;">Machine Learning</h3>
                <p>Implemented ML algorithms for:</p>
                <ul>
                    <li><strong>Predictive Analytics:</strong> Improved patient outcomes through data insights.</li>
                </ul>
            </div>
            `,
            `
            <div class="description">
                <h3 style="color: #1d3557;">Software Engineering</h3>
                <p>Key contributions included:</p>
                <ul>
                    <li><strong>Healthcare Applications:</strong> Developed applications that integrated healthcare data.</li>
                </ul>
            </div>
            `
        ]
    }
};


let currentImageIndex = 0;
let currentContent = {};

function openDetailPage(workId) {
    // Set the images and content for the modal based on workId
    currentContent = content[workId];
    currentImageIndex = 0;

    // Load the first image and description
    document.getElementById('modal-image').src = currentContent.images[currentImageIndex];
    document.getElementById('modal-text').innerText = currentContent.descriptions[currentImageIndex];

    // Set title based on the workId
    let title = "";
    let logoSrc = "";
    switch (workId) {
        case 'work_1':
            title = "Veolia North America";
            logoSrc = "./images/veolia_logo.png";
            break;
        case 'work_2':
            title = "University at Buffalo";
            logoSrc = "./images/ub_logo.png";
            break;
        case 'work_3':
            title = "Kaiser Permanente";
            logoSrc = "./images/kaiser_logo.png";
            break;
    }

    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-logo').src = logoSrc;

    // Show the modal
    document.getElementById('modal').style.display = "block";
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % currentContent.images.length;
    document.getElementById('modal-image').src = currentContent.images[currentImageIndex];
    document.getElementById('modal-text').innerText = currentContent.descriptions[currentImageIndex];
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + currentContent.images.length) % currentContent.images.length;
    document.getElementById('modal-image').src = currentContent.images[currentImageIndex];
    document.getElementById('modal-text').innerText = currentContent.descriptions[currentImageIndex];
}

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
}


