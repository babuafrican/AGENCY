// --------------------------
// About Page Content
// --------------------------
const aboutPage = document.getElementById('about-page');

// Create and add heading
const heading = document.createElement('h1');
heading.textContent = 'About Us';
aboutPage.appendChild(heading);

// Create and add mission statement
const missionParagraph = document.createElement('p');
missionParagraph.textContent = 'We are a digital marketing agency focused on driving business growth through SEO, social media marketing, and paid advertising.';
aboutPage.appendChild(missionParagraph);


// --------------------------
// Team Section Content
// --------------------------
const teamMembers = [
    { name: 'Benson Mukami', title: 'CEO', bio: 'Leading the agency for 10 years', img: 'images/hero.jpg' },
    { name: 'Prof Peter Mwambi', title: 'Marketing Director', bio: 'Expert in SEO and social media', img: 'images/team 1.webp' },
    { name: 'Naomi Waithera', title: 'Content Strategist', bio: 'Specializes in content creation', img: 'images/team 2.webp' }
];

// Select team section in the DOM
const teamSection = document.querySelector('.team-members');

// Loop through team members and create elements for each
teamMembers.forEach(member => {
    const memberDiv = document.createElement('div');
    memberDiv.className = 'team-member';

    const img = document.createElement('img');
    img.src = member.img; // Image path
    img.alt = member.name;

    const name = document.createElement('h3');
    name.textContent = member.name;

    const title = document.createElement('p');
    title.textContent = member.title;

    const bio = document.createElement('p');
    bio.textContent = member.bio;

    // Append member details to the memberDiv
    memberDiv.appendChild(img);
    memberDiv.appendChild(name);
    memberDiv.appendChild(title);
    memberDiv.appendChild(bio);
    
    // Add memberDiv to the team section
    teamSection.appendChild(memberDiv);
});


// --------------------------
// Testimonials Content
// --------------------------
const testimonials = [
    { text: 'This agency transformed our social media presence!', client: 'Safaricom' },
    { text: 'Incredible results and great communication.', client: 'DPZ Technologies' },
    { text: 'They boosted our SEO and website traffic.', client: 'SpaceX' }
];

// Select testimonials section in the DOM
const testimonialsSection = document.querySelector('.testimonials');

// Loop through testimonials and create elements for each
testimonials.forEach(testimonial => {
    const testimonialDiv = document.createElement('div');
    testimonialDiv.className = 'testimonial';

    const text = document.createElement('p');
    text.textContent = testimonial.text; // Corrected template literal

    const client = document.createElement('p');
    client.textContent = `— ${testimonial.client}`; // Corrected template literal

    // Append testimonial details to the testimonialDiv
    testimonialDiv.appendChild(text);
    testimonialDiv.appendChild(client);

    // Add testimonialDiv to the testimonials section
    testimonialsSection.appendChild(testimonialDiv);
});


// --------------------------
// Case Studies Content
// --------------------------
const caseStudies = [
    { title: 'Kai & Karo Company', description: 'Increased social media engagement by 200% in 3 months.' },
    { title: 'T Company', description: 'Boosted website traffic by 150% through SEO.' }
];

// Select case studies section in the DOM
const caseStudiesSection = document.querySelector('.case-studies');

// Loop through case studies and create elements for each
caseStudies.forEach(caseStudy => {
    const caseStudyDiv = document.createElement('div');
    caseStudyDiv.className = 'case-study';

    const title = document.createElement('h3');
    title.textContent = caseStudy.title;

    const description = document.createElement('p');
    description.textContent = caseStudy.description;

    // Append case study details to the caseStudyDiv
    caseStudyDiv.appendChild(title);
    caseStudyDiv.appendChild(description);

    // Add caseStudyDiv to the case studies section
    caseStudiesSection.appendChild(caseStudyDiv);
});


// --------------------------
// Call to Action Button Event
// --------------------------
const ctaButton = document.getElementById('cta-button');
ctaButton.addEventListener('click', () => {
    alert('Thank you for your interest! We will get in touch with you soon.');
});


// --------------------------
// Chat Functions
// --------------------------

// Function to toggle chat window visibility
function toggleChat() {
    const chatWidget = document.getElementById('chatWidget');
    const chatIcon = document.getElementById('chatIcon');
    if (chatWidget.style.display === 'none' || chatWidget.style.display === '') {
        chatWidget.style.display = 'flex';  // Show the chat window
        chatIcon.style.display = 'none';    // Hide the icon
    } else {
        chatWidget.style.display = 'none';  // Hide the chat window
        chatIcon.style.display = 'flex';    // Show the icon
    }
}

// Function to send message from user input
function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() !== "") {
        addUserMessage(userInput);
        setTimeout(() => {
            addBotMessage(getBotResponse(userInput));
        }, 500);
        document.getElementById('userInput').value = "";
    }
}

// Function to add user message to chat body
function addUserMessage(message) {
    const chatBody = document.getElementById('chatBody');
    const userMessage = `<div class="chat-message user-message"><p>${message}</p></div>`;
    chatBody.innerHTML += userMessage;
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Function to add bot message to chat body
function addBotMessage(message) {
    const chatBody = document.getElementById('chatBody');
    const botMessage = `<div class="chat-message bot-message"><p>${message}</p></div>`;
    chatBody.innerHTML += botMessage;
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Function to get bot's response based on user input
function getBotResponse(message) {
    const lowercaseMessage = message.toLowerCase();
    if (lowercaseMessage.includes('services')) {
        return "We offer web development, digital marketing, and more!";
    } else if (lowercaseMessage.includes('pricing')) {
        return "Please visit our pricing page for more details.";
    } else if (lowercaseMessage.includes('contact')) {
        return "You can reach us at support@yourwebsite.com.";
    } else {
        return "I'm not sure I understand. Can you please clarify?";
    }
}

// Function to detect Enter key press
function detectEnter(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}


// --------------------------
// Pre-Chat Form Submission
// --------------------------
function submitPreChatForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    // Simple validation (optional, browsers also handle this via 'required' attribute)
    if (name === "" || email === "" || phone === "") {
        alert("Please fill in all fields.");
        return false;
    }

    // Hide the pre-chat form
    document.getElementById("preChatForm").style.display = "none";

    // Show the chat widget
    document.getElementById("chatWidget").style.display = "flex";

    return false; // Prevent form from submitting (since we're handling it with JS)
}


// --------------------------
// Local Storage Functions
// --------------------------

// Function to store messages in local storage
function storeMessage(message, type) {
    const chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
    chatHistory.push({ text: message, type: type });
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
}

// Function to load messages from local storage
function loadChatHistory() {
    const chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
    chatHistory.forEach(({ text, type }) => {
        appendMessage(text, type);
    });
}

// Function to clear chat history
function clearChatHistory() {
    localStorage.removeItem('chatHistory');
    document.getElementById("chatBody").innerHTML = ''; // Clear chat display
}

// Function to append messages to chat body
function appendMessage(text, type) {
    const chatBody = document.getElementById("chatBody");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message", type); // type can be 'user-message' or 'bot-message'

    // Get current time
    const timeStamp = new Date();
    const timeString = timeStamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    messageDiv.innerHTML = 
        `<p>${text}</p>
         <span class="time-stamp">${timeString}</span>`;
    
    // Append new message to chat body
    chatBody.appendChild(messageDiv);

    // Scroll to the bottom of the chat body
    chatBody.scrollTop = chatBody.scrollHeight;
}
