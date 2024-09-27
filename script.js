// About Page Content
const aboutPage = document.getElementById('about-page');

const heading = document.createElement('h1');
heading.textContent = 'About Us';

const missionParagraph = document.createElement('p');
missionParagraph.textContent = 'We are a digital marketing agency focused on driving business growth through SEO, social media marketing, and paid advertising.';

aboutPage.appendChild(heading);
aboutPage.appendChild(missionParagraph);

// Team Section Content
const teamMembers = [
    { name: 'Benson Mukami', title: 'CEO', bio: 'Leading the agency for 10 years', img: 'images/hero.jpg' },
    { name: 'Prof Peter Mwambi', title: 'Marketing Director', bio: 'Expert in SEO and social media', img: 'images/team 1.webp' },
    { name: 'Naomi Waithera', title: 'Content Strategist', bio: 'Specializes in content creation', img: 'images/team 2.webp' }
];

const teamSection = document.querySelector('.team-members');

teamMembers.forEach(member => {
    const memberDiv = document.createElement('div');
    memberDiv.className = 'team-member';

    const img = document.createElement('img');
    img.src = member.img; // Use placeholder image path
    img.alt = member.name;

    const name = document.createElement('h3');
    name.textContent = member.name;

    const title = document.createElement('p');
    title.textContent = member.title;

    const bio = document.createElement('p');
    bio.textContent = member.bio;

    memberDiv.appendChild(img);
    memberDiv.appendChild(name);
    memberDiv.appendChild(title);
    memberDiv.appendChild(bio);
    
    teamSection.appendChild(memberDiv);
});

// Testimonials Content
const testimonials = [
    { text: 'This agency transformed our social media presence!', client: 'Safaricom' },
    { text: 'Incredible results and great communication.', client: 'DPZ Technologies' },
    { text: 'They boosted our SEO and website traffic.', client: 'SpaceX' }
];

const testimonialsSection = document.querySelector('.testimonials');

testimonials.forEach(testimonial => {
    const testimonialDiv = document.createElement('div');
    testimonialDiv.className = 'testimonial';

    const text = document.createElement('p');
    text.textContent = `"${testimonial.text}"`;

    const client = document.createElement('p');
    client.textContent = `— ${testimonial.client}`;

    testimonialDiv.appendChild(text);
    testimonialDiv.appendChild(client);

    testimonialsSection.appendChild(testimonialDiv);
});

// Case Studies Content
const caseStudies = [
    { title: 'Kai & Karo Company', description: 'Increased social media engagement by 200% in 3 months.' },
    { title: 'T Company', description: 'Boosted website traffic by 150% through SEO.' }
];

const caseStudiesSection = document.querySelector('.case-studies');

caseStudies.forEach(caseStudy => {
    const caseStudyDiv = document.createElement('div');
    caseStudyDiv.className = 'case-study';

    const title = document.createElement('h3');
    title.textContent = caseStudy.title;

    const description = document.createElement('p');
    description.textContent = caseStudy.description;

    caseStudyDiv.appendChild(title);
    caseStudyDiv.appendChild(description);

    caseStudiesSection.appendChild(caseStudyDiv);
});

// Call to Action Button Event
const ctaButton = document.getElementById('cta-button');
ctaButton.addEventListener('click', () => {
    alert('Thank you for your interest! We will get in touch with you soon.');
});
