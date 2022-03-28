# GA Capstone Project: Personal Blog

## Overview
***
### User Stories
#### Me (author)
I want this blog to be a place where I can share my experiences and reflections on my process of becoming a developer. My use for the blog will be primarily focused on discussing my experiences learning and discussions of various development languages/frameworks/libraries. That said, the range of topics will be a fairly open-ended, dynamic representation of my current interests over time. For example:

- Retrospective on general assembly projects
- Retrospective on general assembly experience
- Job search, interview process
- Discussion of some of my favorite books
- On various pieces of the history of the Indian subcontinent

The idea of building and deploying the platform I use to express my thoughts online is incredibly compelling for me.

#### Visitors
- Potential Employers
  - Gain a richer understanding of which languages/frameworks/libraries I have worked with, and my proficiency levels
  - Insight into my process of becoming a developer
  - Understand more about me to gauge my culture fit
- People learning concepts/tech I have experience with
  - Read honest depictions of my struggles and successes
  - Read helpful breakdowns of topics I feel confident in explaining
  - Provide feedback, improvements on my implementations
- People with other shared interests
  - Read my thoughts on other topics including literature, history, epistemology, sports, current events

***
### [Wireframes](https://imgur.com/a/des3nSu)

***
### Tech Stack
- MongoDB/Mongoose: Database/ORM
- Express: RESTful API
- React: Front end components/markup
- React Router v6
- React-bootstrap: Styling
- Deployment on Heroku (backend)
- Deployment on GH pages(~) (frontend)

***
### Models
```
// Post
{
  title: String,
  date: Date
  imageLink: String,
  excerpt: String,
  categories: [String],
  postBody: String
}
```


***
### Site Map
- Navigation bar (fixed, sticky)
  - Routes For:
    - Home (Logo)
    - Categories
      - Software Development
      - Personal
- Home Page
  - Featured Articles
  - Sidebar with about the author
- About page
  - Contact Info
    - Feedback on blog
    - Github
    - LinkedIn
    - Email
  - Projects
  - Resume (Embed and Download)
- Category Page
  - List all posts in that category (pagination?)
    - Link to full post view
- Footer
  - FA Links
    - Github
    - LinkedIn
    - Email
  - Signature
