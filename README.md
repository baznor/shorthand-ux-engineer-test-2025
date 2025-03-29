# A multi-page sign up process

## Objective

Using React/Typscript, design and build a mostly _(it prints to console at the end instead of sending an API call)_ functional multi-page sign up process flow.

You're welcome to take as long as you like but the idea is for this challenge to take no more than a few hours.

## Requirements

- [ ] The form needs to ask the user for the following information (broken into multiple "pages") and validate it:
   - email
   - password
   - name
   - organisation name
   - organisation size
   - organisation use case/category
   - user role
   - initial team members to invite
   - One of three different pricing plan options
   - accepting terms and conditions
   - adding to mailing list
- [ ] The user is shown a summary of their choices before submitting
- [ ] The form should respect the browsers light/dark preference.
- [ ] Form prints to the console when submitting.

The specifics are up to you to demonstrate your decision making.

## Submission

Create a repository on GitHub with your completed submission.

Once your repository is ready, add @ckortekaas and @nathanhoad and let us know via email that you've completed the challenge.

## Notes

- The more fields on a Sign-up page the less users sign up
  - Broken this into a bunch of pages
- Created basic wireframe pages with inputs
- Created some input components to make it quicker to prototype changes
  - Tried with separate labels on inputs
  - Unlined inputs 
  - Outlined with the moving label looks nice
    - Saves space because labels are no longer separate
    - Labels still exist so coming back to filled inputs still have label
    - Animation looks fancy
- Testing in Dark + Light mode
  - Grabbed some dark colors from old projects
  - Made changes to keep it readable in both
- Testing with different screen sizes
  - Added images to the right side so the mobile + desktop UI are basically the same (saves time)
  - Images from freepik with backgrounds removed
- Validation
  - added library to help with validation
  - added own error text so it looks nicer
  - made it so only some fields are required to help with user click through
- Removed the confirm password input
  - Less inputs the better signup rate
  - A nice welcome email and a good reset password system can replace that.
- Fixed eslint errors
  - not sure why my vscode wasn't picking them up as coding
- Made fixes for mobile version
  - only happened when testing on device
