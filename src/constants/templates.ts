export const templates = [
    {
        id: "blank",
        label: "Blank Document",
        imageUrl: "/blank-document.svg",
        initialContent: ""
    },
    {
        id: "buisness letter",
        label: "Buisness Letter",
        imageUrl: "/buisness-letter.svg",
        initialContent: `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Business Letter</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 40px;
        }
        .header {
            margin-bottom: 20px;
        }
        .header p {
            margin: 5px 0;
        }
        .recipient {
            margin-top: 20px;
        }
        .content {
            margin-top: 20px;
        }
        .content p {
            margin-bottom: 15px;
        }
        .signature {
            margin-top: 40px;
        }
        .signature p {
            margin: 5px 0;
        }
    </style>
</head>
<body>

    <div class="header">
        <p>[Your Name]</p>
        <p>[Your Position]</p>
        <p>[Your Company Name]</p>
        <p>[Your Company Address]</p>
        <p>[City, State, ZIP Code]</p>
        <p>[Email Address]</p>
        <p>[Phone Number]</p>
        <p>[Date]</p>
    </div>

    <div class="recipient">
        <p>[Recipient's Name]</p>
        <p>[Recipient's Position]</p>
        <p>[Recipient's Company Name]</p>
        <p>[Recipient's Company Address]</p>
        <p>[City, State, ZIP Code]</p>
    </div>

    <div class="content">
        <p>Dear [Recipient's Name],</p>

        <p>I am writing to you on behalf of [Your Company Name] regarding [specific purpose of the letter, e.g., a business proposal, inquiry, or collaboration opportunity]. We have been following [Recipient's Company Name]'s work in [specific field or industry] and are impressed by [specific achievement or project].</p>

        <p>At [Your Company Name], we specialize in [brief description of your company's services or products]. We believe that a partnership between our companies could lead to [specific benefit or outcome, e.g., mutual growth, innovative solutions, or expanded market reach].</p>

        <p>We would like to propose [specific proposal or request, e.g., a meeting to discuss potential collaboration, a request for a quote, or an invitation to an event]. Please let us know a convenient time for you, and we would be happy to arrange a discussion at your earliest convenience.</p>

        <p>Thank you for considering this opportunity. We look forward to the possibility of working together and are confident that our collaboration will be mutually beneficial. Please feel free to contact me directly at [your phone number] or [your email address] if you have any questions or require further information.</p>

        <p>Sincerely,</p>
    </div>

    <div class="signature">
        <p>[Your Name]</p>
        <p>[Your Position]</p>
        <p>[Your Company Name]</p>
    </div>

</body>
</html>
        `
    },
    {
        id: "cover letter",
        label: "Cover Letter",
        imageUrl: "/cover-letter.svg",
        initialContent: `
         <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Motivation Letter</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 40px;
        }
        .header {
            text-align: center;
            margin-bottom: 20px;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .header p {
            margin: 5px 0;
            font-size: 14px;
        }
        .content {
            margin-top: 20px;
        }
        .content p {
            margin-bottom: 15px;
        }
        .signature {
            margin-top: 40px;
        }
        .signature p {
            margin: 5px 0;
        }
    </style>
</head>
<body>

    <div class="header">
        <h1>Motivation Letter</h1>
        <p>[Your Name]</p>
        <p>[Your Address]</p>
        <p>[City, State, ZIP Code]</p>
        <p>[Email Address]</p>
        <p>[Phone Number]</p>
        <p>[Date]</p>
    </div>

    <div class="content">
        <p>Dear [Recipient's Name],</p>

        <p>I am writing to express my keen interest in [the position/program] at [Company/Institution Name]. With a strong background in [Your Field/Area of Expertise] and a passion for [specific interest or goal], I am excited about the opportunity to contribute to your team and further develop my skills in this field.</p>

        <p>In my previous role at [Previous Company/Institution], I successfully [describe a key achievement or responsibility]. This experience has equipped me with [specific skills or knowledge] that I believe will be valuable in [the position/program] at [Company/Institution Name].</p>

        <p>What excites me most about [Company/Institution Name] is [specific aspect of the company/institution, such as its mission, projects, or culture]. I am particularly drawn to [specific project, initiative, or aspect of the role] and am eager to bring my [specific skills or qualities] to contribute to its success.</p>

        <p>I am confident that my background, skills, and enthusiasm make me a strong candidate for [the position/program]. I am looking forward to the possibility of discussing how I can contribute to [Company/Institution Name] and am available at your earliest convenience for an interview.</p>

        <p>Thank you for considering my application. I look forward to the opportunity to further discuss how I can contribute to your team.</p>

        <p>Sincerely,</p>
    </div>

    <div class="signature">
        <p>[Your Name]</p>
    </div>

</body>
</html>
        `
    },
    {
        id: "letter",
        label: "Letter",
        imageUrl: "/letter.svg",
        initialContent: `
          <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>General Letter</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.8;
            margin: 40px auto;
            max-width: 800px;
            padding: 20px;
            background-color: #f9f9f9;
            color: #333;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            color: #2c3e50;
        }
        .header p {
            margin: 5px 0;
            font-size: 14px;
            color: #666;
            margin-bottom: 20px;

        }
        .recipient {
            margin-top: 30px;
            margin-bottom: 20px;
        }
        .recipient p {
            margin: 5px 0;
            font-size: 16px;
            color: #444;
        }
        .content {
            margin-top: 20px;
        }
        .content p {
            margin-bottom: 20px;
            font-size: 16px;
            color: #444;
        }
        .signature {
            margin-top: 40px;
            text-align: right;
        }
        .signature p {
            margin: 5px 0;
            font-size: 16px;
            color: #444;
        }
        .signature p:first-child {
            font-weight: bold;
        }
        .section-divider {
            border-top: 1px solid #ddd;
            margin: 30px 0;
        }
    </style>
</head>
<body>

    <div class="header">
        <h1>General Letter</h1>
        <p>[Your Name]</p>
        <p>[Your Address]</p>
        <p>[City, State, ZIP Code]</p>
        <p>[Email Address] | [Phone Number]</p>
        <p>[Date]</p>
    </div>

    <div class="recipient">
        <p>[Recipient's Name]</p>

        <p>[Recipient's Address]</p>

        <p>[City, State, ZIP Code]</p>
    </div>

    <div class="content">
        <p>Dear [Recipient's Name],</p>

        <p>I hope this letter finds you well. I am writing to [state the purpose of your letter, e.g., express my gratitude, invite you to an event, or share some news].</p>

        <p>[Elaborate on the purpose of your letter. For example, if it's a thank-you letter, describe what you are thankful for and how it has impacted you. If it's an invitation, provide details about the event, such as the date, time, and location.]</p>

        <p>[Add any additional information or details that are relevant to your letter. For example, if you are sharing news, provide context and explain why it is important.]</p>

        <p>Thank you for [specific action or support, if applicable]. I truly appreciate [specific aspect, e.g., your kindness, your time, or your assistance]. Please feel free to contact me at [your phone number] or [your email address] if you have any questions or would like to discuss further.</p>

        <p>I look forward to [specific next step, e.g., hearing from you, seeing you at the event, or continuing our collaboration].</p>

        <div class="section-divider"></div>

        <p>Sincerely,</p>
    </div>

    <div class="signature">
        <p>[Your Name]</p>
        <p>[Your Position, if applicable]</p>
    </div>

</body>
</html>
        `
    },
    {
        id: "project proposal",
        label: "Project Proposal",
        imageUrl: "/project-proposal.svg",
        initialContent: `
         <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Proposal</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 40px;
        }
        .header {
            text-align: center;
            margin-bottom: 20px;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
        }
        .header p {
            margin: 5px 0;
            font-size: 14px;
        }
        .section {
            margin-top: 20px;
        }
        .section h2 {
            font-size: 22px;
            margin-bottom: 10px;
            border-bottom: 2px solid #000;
            padding-bottom: 5px;
        }
        .section p {
            margin-bottom: 15px;
        }
        .section ul {
            margin: 10px 0 15px 20px;
        }
        .section ul li {
            margin-bottom: 5px;
        }
        .signature {
            margin-top: 40px;
        }
        .signature p {
            margin: 5px 0;
        }
    </style>
</head>
<body>

    <div class="header">
        <h1>Project Proposal</h1>
        <p>Prepared by: [Your Name]</p>
        <p>[Your Position]</p>
        <p>[Your Company/Organization Name]</p>
        <p>[Email Address] | [Phone Number]</p>
        <p>[Date]</p>
    </div>

    <div class="section">
        <h2>1. Introduction</h2>
        <p>This proposal outlines the plan for [Project Name], a project aimed at [briefly describe the purpose or goal of the project]. The project will address [specific problem or opportunity] and deliver [expected outcomes or benefits].</p>
    </div>

    <div class="section">
        <h2>2. Objectives</h2>
        <p>The primary objectives of this project are:</p>
        <ul>
            <li>[Objective 1: e.g., Improve efficiency in a specific process]</li>
            <li>[Objective 2: e.g., Develop a new product or service]</li>
            <li>[Objective 3: e.g., Enhance customer satisfaction]</li>
        </ul>
    </div>

    <div class="section">
        <h2>3. Scope of Work</h2>
        <p>The project will include the following key activities:</p>
        <ul>
            <li>[Activity 1: e.g., Conduct market research]</li>
            <li>[Activity 2: e.g., Design and develop a prototype]</li>
            <li>[Activity 3: e.g., Test and refine the solution]</li>
            <li>[Activity 4: e.g., Implement the final product]</li>
        </ul>
    </div>

    <div class="section">
        <h2>4. Methodology</h2>
        <p>The project will be executed using the following approach:</p>
        <ul>
            <li>[Step 1: e.g., Define project requirements]</li>
            <li>[Step 2: e.g., Assemble a project team]</li>
            <li>[Step 3: e.g., Develop a project timeline]</li>
            <li>[Step 4: e.g., Monitor progress and adjust as needed]</li>
        </ul>
    </div>

    <div class="section">
        <h2>5. Timeline</h2>
        <p>The project is expected to be completed within [duration, e.g., 6 months]. Below is a high-level timeline:</p>
        <ul>
            <li>[Phase 1: e.g., Planning - Month 1]</li>
            <li>[Phase 2: e.g., Development - Months 2-4]</li>
            <li>[Phase 3: e.g., Testing - Month 5]</li>
            <li>[Phase 4: e.g., Implementation - Month 6]</li>
        </ul>
    </div>

    <div class="section">
        <h2>6. Budget</h2>
        <p>The estimated budget for the project is [total amount]. Below is a breakdown of the costs:</p>
        <ul>
            <li>[Cost 1: e.g., Personnel - $X]</li>
            <li>[Cost 2: e.g., Materials - $Y]</li>
            <li>[Cost 3: e.g., Technology - $Z]</li>
            <li>[Cost 4: e.g., Miscellaneous - $W]</li>
        </ul>
    </div>

    <div class="section">
        <h2>7. Expected Outcomes</h2>
        <p>Upon successful completion of the project, the following outcomes are expected:</p>
        <ul>
            <li>[Outcome 1: e.g., Increased efficiency by X%]</li>
            <li>[Outcome 2: e.g., New product launched]</li>
            <li>[Outcome 3: e.g., Improved customer satisfaction scores]</li>
        </ul>
    </div>

    <div class="section">
        <h2>8. Conclusion</h2>
        <p>This project proposal outlines a clear plan to achieve [Project Name]'s objectives. We are confident that this project will deliver significant value to [stakeholders, clients, or organization]. We look forward to your feedback and approval to move forward.</p>
    </div>

    <div class="signature">
        <p>Sincerely,</p>
        <p>[Your Name]</p>
        <p>[Your Position]</p>
        <p>[Your Company/Organization Name]</p>
    </div>

</body>
</html>
        `
    },
    {
        id: "resume",
        label: "Resume",
        imageUrl: "/resume.svg",
        initialContent: `
          <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resume - [Your Name]</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 40px;
        }
        .header {
            text-align: center;
            margin-bottom: 20px;
        }
        .header h1 {
            margin: 0;
            font-size: 32px;
        }
        .header p {
            margin: 5px 0;
            font-size: 16px;
        }
        .section {
            margin-top: 20px;
        }
        .section h2 {
            font-size: 24px;
            margin-bottom: 10px;
            border-bottom: 2px solid #000;
            padding-bottom: 5px;
        }
        .section h3 {
            font-size: 20px;
            margin: 15px 0 5px;
        }
        .section p {
            margin: 5px 0;
        }
        .section ul {
            margin: 10px 0 15px 20px;
        }
        .section ul li {
            margin-bottom: 5px;
        }
    </style>
</head>
<body>

    <div class="header">
        <h1>[Your Name]</h1>
        <p>[Your Address] | [City, State, ZIP Code]</p>
        <p>[Email Address] | [Phone Number] | [LinkedIn Profile] | [Portfolio/Website]</p>
    </div>

    <div class="section">
        <h2>Professional Summary</h2>
        <p>[Write a brief summary of your professional background, key skills, and career goals. For example: "Detail-oriented software engineer with 5+ years of experience in developing scalable web applications. Proficient in JavaScript, Python, and cloud technologies. Passionate about solving complex problems and delivering high-quality solutions."]</p>
    </div>

    <div class="section">
        <h2>Skills</h2>
        <ul>
            <li>[Skill 1: e.g., Programming Languages - JavaScript, Python, Java]</li>
            <li>[Skill 2: e.g., Web Development - HTML, CSS, React, Node.js]</li>
            <li>[Skill 3: e.g., Cloud Technologies - AWS, Azure, Docker]</li>
            <li>[Skill 4: e.g., Project Management - Agile, Scrum, Jira]</li>
            <li>[Skill 5: e.g., Data Analysis - SQL, Pandas, Tableau]</li>
        </ul>
    </div>

    <div class="section">
        <h2>Professional Experience</h2>

        <h3>[Job Title]</h3>
        <p>[Company Name], [Location] | [Start Date] - [End Date or Present]</p>
        <ul>
            <li>[Responsibility/Achievement 1: e.g., Developed and maintained scalable web applications using React and Node.js.]</li>
            <li>[Responsibility/Achievement 2: e.g., Collaborated with cross-functional teams to deliver projects on time and within budget.]</li>
            <li>[Responsibility/Achievement 3: e.g., Optimized application performance, reducing load times by 30%.]</li>
        </ul>

        <h3>[Job Title]</h3>
        <p>[Company Name], [Location] | [Start Date] - [End Date]</p>
        <ul>
            <li>[Responsibility/Achievement 1: e.g., Designed and implemented RESTful APIs for mobile and web applications.]</li>
            <li>[Responsibility/Achievement 2: e.g., Led a team of 5 developers to deliver a critical project ahead of schedule.]</li>
            <li>[Responsibility/Achievement 3: e.g., Conducted code reviews and mentored junior developers.]</li>
        </ul>
    </div>

    <div class="section">
        <h2>Education</h2>
        <h3>[Degree, e.g., Bachelor of Science in Computer Science]</h3>
        <p>[University Name], [Location] | [Graduation Date]</p>
        <ul>
            <li>[Achievement 1: e.g., Graduated with honors]</li>
            <li>[Achievement 2: e.g., Relevant coursework: Data Structures, Algorithms, Web Development]</li>
        </ul>
    </div>

    <div class="section">
        <h2>Certifications</h2>
        <ul>
            <li>[Certification 1: e.g., AWS Certified Solutions Architect]</li>
            <li>[Certification 2: e.g., Certified Scrum Master (CSM)]</li>
            <li>[Certification 3: e.g., Google Data Analytics Professional Certificate]</li>
        </ul>
    </div>

    <div class="section">
        <h2>Projects</h2>
        <h3>[Project Name]</h3>
        <p>[Brief description of the project. For example: "Developed a full-stack e-commerce platform using React and Node.js."]</p>
        <ul>
            <li>[Key Contribution 1: e.g., Implemented user authentication and authorization.]</li>
            <li>[Key Contribution 2: e.g., Integrated payment gateway for seamless transactions.]</li>
        </ul>

        <h3>[Project Name]</h3>
        <p>[Brief description of the project. For example: "Created a data visualization dashboard using Python and Tableau."]</p>
        <ul>
            <li>[Key Contribution 1: e.g., Cleaned and processed large datasets using Pandas.]</li>
            <li>[Key Contribution 2: e.g., Designed interactive visualizations to highlight key insights.]</li>
        </ul>
    </div>

    <div class="section">
        <h2>Languages</h2>
        <ul>
            <li>[Language 1: e.g., English - Fluent]</li>
            <li>[Language 2: e.g., Spanish - Intermediate]</li>
        </ul>
    </div>

</body>
</html>
        `
    },
    {
        id: "software proposal",
        label: "Software Proposal",
        imageUrl: "/software-proposal.svg",
        initialContent: `
           <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Software Project Proposal</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 40px;
        }
        .header {
            text-align: center;
            margin-bottom: 20px;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
        }
        .header p {
            margin: 5px 0;
            font-size: 14px;
        }
        .section {
            margin-top: 20px;
        }
        .section h2 {
            font-size: 22px;
            margin-bottom: 10px;
            border-bottom: 2px solid #000;
            padding-bottom: 5px;
        }
        .section p {
            margin-bottom: 15px;
        }
        .section ul {
            margin: 10px 0 15px 20px;
        }
        .section ul li {
            margin-bottom: 5px;
        }
        .signature {
            margin-top: 40px;
        }
        .signature p {
            margin: 5px 0;
        }
    </style>
</head>
<body>

    <div class="header">
        <h1>Software Project Proposal</h1>
        <p>Prepared by: [Your Name]</p>
        <p>[Your Position]</p>
        <p>[Your Company/Organization Name]</p>
        <p>[Email Address] | [Phone Number]</p>
        <p>[Date]</p>
    </div>

    <div class="section">
        <h2>1. Project Overview</h2>
        <p>This proposal outlines the plan for [Project Name], a software development project aimed at [briefly describe the purpose or goal of the project]. The project will address [specific problem or opportunity] and deliver [expected outcomes or benefits].</p>
    </div>

    <div class="section">
        <h2>2. Objectives</h2>
        <p>The primary objectives of this project are:</p>
        <ul>
            <li>[Objective 1: e.g., Develop a user-friendly web application for managing customer data.]</li>
            <li>[Objective 2: e.g., Implement robust security features to protect sensitive information.]</li>
            <li>[Objective 3: e.g., Ensure scalability to support future growth.]</li>
        </ul>
    </div>

    <div class="section">
        <h2>3. Scope of Work</h2>
        <p>The project will include the following key activities:</p>
        <ul>
            <li>[Activity 1: e.g., Requirement gathering and analysis]</li>
            <li>[Activity 2: e.g., Design and development of the software]</li>
            <li>[Activity 3: e.g., Testing and quality assurance]</li>
            <li>[Activity 4: e.g., Deployment and user training]</li>
        </ul>
    </div>

    <div class="section">
        <h2>4. Methodology</h2>
        <p>The project will be executed using the following approach:</p>
        <ul>
            <li>[Step 1: e.g., Agile methodology with bi-weekly sprints]</li>
            <li>[Step 2: e.g., Regular stakeholder meetings for feedback]</li>
            <li>[Step 3: e.g., Continuous integration and deployment (CI/CD) pipeline]</li>
            <li>[Step 4: e.g., Post-deployment support and maintenance]</li>
        </ul>
    </div>

    <div class="section">
        <h2>5. Technology Stack</h2>
        <p>The following technologies will be used for the project:</p>
        <ul>
            <li>[Technology 1: e.g., Frontend - React.js]</li>
            <li>[Technology 2: e.g., Backend - Node.js]</li>
            <li>[Technology 3: e.g., Database - MongoDB]</li>
            <li>[Technology 4: e.g., Cloud Hosting - AWS]</li>
        </ul>
    </div>

    <div class="section">
        <h2>6. Timeline</h2>
        <p>The project is expected to be completed within [duration, e.g., 6 months]. Below is a high-level timeline:</p>
        <ul>
            <li>[Phase 1: e.g., Planning and Analysis - Month 1]</li>
            <li>[Phase 2: e.g., Design and Development - Months 2-4]</li>
            <li>[Phase 3: e.g., Testing and QA - Month 5]</li>
            <li>[Phase 4: e.g., Deployment and Training - Month 6]</li>
        </ul>
    </div>

    <div class="section">
        <h2>7. Budget</h2>
        <p>The estimated budget for the project is [total amount]. Below is a breakdown of the costs:</p>
        <ul>
            <li>[Cost 1: e.g., Development Team - $X]</li>
            <li>[Cost 2: e.g., Software Licenses - $Y]</li>
            <li>[Cost 3: e.g., Cloud Services - $Z]</li>
            <li>[Cost 4: e.g., Miscellaneous - $W]</li>
        </ul>
    </div>

    <div class="section">
        <h2>8. Expected Outcomes</h2>
        <p>Upon successful completion of the project, the following outcomes are expected:</p>
        <ul>
            <li>[Outcome 1: e.g., A fully functional web application]</li>
            <li>[Outcome 2: e.g., Improved efficiency in customer data management]</li>
            <li>[Outcome 3: e.g., Enhanced user satisfaction and engagement]</li>
        </ul>
    </div>

    <div class="section">
        <h2>9. Conclusion</h2>
        <p>This software project proposal outlines a clear plan to achieve [Project Name]'s objectives. We are confident that this project will deliver significant value to [stakeholders, clients, or organization]. We look forward to your feedback and approval to move forward.</p>
    </div>

    <div class="signature">
        <p>Sincerely,</p>
        <p>[Your Name]</p>
        <p>[Your Position]</p>
        <p>[Your Company/Organization Name]</p>
    </div>

</body>
</html>
        `
    },
];