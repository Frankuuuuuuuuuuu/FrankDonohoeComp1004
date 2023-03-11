#Frank Donohoe's Coursework Application for Comp1004

##Summary
This repository contains the story feature of the Comp1004 project for cluster L. This will include the VS file for the project, as well as image files and json files required.

##Features to implement
1 | Database of stories and profile pictures
Required for website to load profile pictures and to load the content of stories.
This task will involve implementing Json files and imbedding code to read them.

2 | Display profile pictures
Required for users to differentiate between other users and interact with the story content.
This will require deciding a palette and layout for the story bar, then implementing this in html and css.

3 | Opening stories
Required for the users to interact with the story content.
This will require deciding a layout for the story interface and implementing this is html and css, as well as a function to get the story content for the corresponding users.

4 | Order stories in order of time posted
Required for users to open the most recent stories first.
This will require attributing a time posted variable to stories, and implementing a function that calculates time elapsed and sorts the profile images accordingly.

5 | Scroll to see more stories
Required to make stories more accessible for users with many friends.
This will require a scale with the profile images will slide along with html and css.

6 | Click left or right to view previous or next story
Required to allow users to access multiple stories without exiting the story interface.
This will require implementing navigation buttons and functions.
7 | Story disappears after 24 hours
Required to keep stories temporary giving the impression of being in the moment.
This will require implementing a function that checks the time elapsed on each story and delete it from the json file if it has been more than 24 hours.

8 | Upload image/video
Required for users to upload their own content.
This will require an interface to drag or upload a file which is saved in the cloud and data appended to the json file.

9 | Delete story
Required for users to remove stories if they change their mind.
This will require implementing a settings function for the story and a function that deletes the content from the cloud and data from the json file.

10 | Timer to display next story and progress bar
Required so users don’t have to interact with navigation controls when trying to view the next story.
This will require a function to elapse time until a certain limit or the end of the content, and implementing a progress bar in html to reflect the time remaining.

11 | Profile picture fades out and moves to the back of the queue when seen
Required so users can differentiate stories they have seen to stories they haven’t.
This will require a function that changes the html of the story bar content.

12 | Edit story
A common feature of stories is allowing the user to edit the story when they upload or go back to change it.
This will require a new interface and functions to implement text and image filters.

13 | Progress bar to show upload progress
Required to show user how far along the upload has to go.
This will require installing a library that checks upload progress and implementing a progress bar to reflect this.

##Use Case Diagram
![use case diagram](/Images/Use Case Diagram.png)