# Playlist Generator GitHub Workflow

## Branch Naming Conventions
- main
  - The main branch is the branch reflecting the production-ready state. Merges into main should be reserved for new version releases and must only be done once quality assurance has been done on the changes being released and the merge must come from the dev branch.
- dev
  - The dev branch is the branch where upcoming features and release patches will be merged and tested. It is necessry to merge a feature into dev before getting it into main and therefore production.
- feature/< feature name >
  - The feature branches will be used to keep track of what is being developed. The feature name must be descriptive of the problem being solved or must be uniquely identifiable as pertaining to that task. Once the feature is developed, a PR into the dev branch can be made to be reviewed.
- bug/< bug description >
  - The bug branches will be used to keep track of what is being fixed. Bug descriptions must fit the problem being solved and can only contain code which addresses the bug being fixed. Once the bug is addressed, a PR into dev can be made where it is to be reviewed.

## Workflow Overview
### Cloning the Repository
- HTTPS
```
git clone https://github.com/santy81855/playlist-generator.git
cd playlist-generator
```
- SSH 
```
git clone git@github.com:santy81855/playlist-generator.git
cd playlist-generator
```
### Individual Workflow
- Each team member works on a feature or bug branch which follows the conventions listed in [Branch Naming Conventions](#branch-naming-conventions)
- Some rules for working are as follows
  - Before developing
    1. Checkout the main branch and pull to see any recent changes
    2. Checkout the dev branch and pull to see any recent changes
    3. From the dev branch, create a new branch with a name adhering to the conventions found in [Branch Naming Conventions](#branch-naming-conventions)
  - While developing
    1. Ensure you are on the right branch to ensure that you do not overwrite and accidentally push work onto other branches
    2. Check for changes in main and dev branches often to make sure conflicts are resolved **Before** a merge request. This will help limit code reviews to more productive sessions
    3. **COMMIT OFTEN** because this will ensure that all peers can see the most up-to-date version of your approach to the problem being solved
        - A good rule of thumb is to commit whenever you think you have a working version of a part of the solution
  - When done working on a feature or bug
    1. Ensure to get any recent from dev and main branch into your branch
    2. Do personal quality assurance and testing before the code review to ensure that standards are met and the objective of the development has been met
    3. Create a pull request to dev branch and announce to teammates what the PR is for and a description of what the PR should contain in terms of solution to the problem
    4. When the PR gets merged into dev it can do one of the following
        - If it passes all tests in dev, it will be merged into main at which point you can delete the branch
        - If it fails any tests in dev, it will be reverted from the dev branch and you must continue developing on the branch until the next PR can be opened at which point you are back in the during development section

### Merging into Dev Branch
- Once the feature or bug gets approved and merged into dev and subsequently tested and approved then the developer who worked on the branch should delete the branch which can be done with the following command
```
git branch -D < branch name >
```
### Releasing into Production
- Releases will be merged into main from the dev branch periodically and will follow the standard versioning system (v1.0.0 for example)
- Subsequent releases will increase version number as follows
  - v1.0.0 -> v1.0.2 for small bugs
  - v2.3.1 -> v2.4.0 for big feature releases
  - v3.2.1 -> v4.0.0 for drastic changes to the product