{
    /**
    * GitHub username
    * Used to fetch the data from a specific GitHub profile.'
    * IMPORTANT: Don't forget to set your username here.'
    */
    "githubUsername": "github",
    
    /**
    * Full name
    * Value:
    *   NULL to use the GitHub value
    *   STRING VALUE to override the one from GitHub
    */
    "name": null,

    /**
    * Nickname
    * Values:
    *   TRUE to use the GitHub value
    *   FALSE to hide the field
    *   STRING VALUE to override the one from GitHub
    */
    "nickname": true,

    /**
    * Short description
    * Values:
    *   TRUE to use the GitHub value
    *   FALSE to hide the field
    *   STRING VALUE to override the one from GitHub
    */
    "bio": true,

    /**
    * Profile image
    * Values:
    *   NULL to use the GitHub value
    *   STRING VALUE to override the one from GitHub
    */
    "avatarUrl": null,

    /**
    * Current address
    * Values:
    *   TRUE to use the GitHub value
    *   FALSE to hide the field
    *   STRING VALUE to override the one from GitHub
    */
    "location": true,

    /**
    * Company
    * Values:
    *   TRUE to use the GitHub value
    *   FALSE to hide the field
    *   STRING VALUE to override the one from GitHub
    */
    "company": true,
    
    /**
    * Set of social profiles
    * NOTE: Order can be changed;
    * NOTE: Each icon can have text and link (not required);
    * Values:
    *   NULL to skip that section
    *   Collection of icons
    * Allowed Icon Types:
    *   ANGELLIST | EMAIL | BEHANCE | CODEPEN | DRIBBBLE | FACEBOOK | GITHUB | GOOGLE_PLUS | INSTAGRAM |
    *   LINKEDIN | PINTEREST | STACK_OVERFLOW | SKYPE | TWITTER | YOUTUBE | WEBSITE
    */
    "socialIcons": [
        // {
        //     "type": "GITHUB",
        //     "link": "https://github.com/github",
        //     "text": "My GitHub Profile"
        // }
    ]
}