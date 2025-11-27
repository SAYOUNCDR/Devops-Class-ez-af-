// If it's your first time using Git, you might want to set up your user name and email:
// git config --global user.name "Your Name"
// git config --global user.email "your.email@example.com"

// git init
// git add . [this stages all changes in the current directory]
// git commit -m "Initial commit" [this saves the changes to the local repository]
// git remote add origin <remote_repository_URL> [this links the local repository to a remote repository]
// git push -u origin main [this pushes the committed changes to the remote repository]
// git status [this shows the current status of the repository]

// git clone <remote_repository_URL> [this creates a copy of the remote repository locally]
// git pull origin main [this fetches and merges changes from the remote repository to the local repository]

// git branch feature [this creates a new branch named 'feature']
// git checkout feature [this switches to the 'feature' branch]
// git merge main [this merges changes from the 'main' branch into the current branch]
// git checkout main [this switches back to the 'main' branch]
// git merge feature [this merges changes from the 'feature' branch into the 'main' branch]

// git diff main..feature -w [this shows the differences between the main branch and the feature branch, ignoring whitespace changes]

// git log --oneline [this shows a concise log of commits]

// Stashing commands:
// git stash [this saves changes temporarily without committing]
// git stash pop [this reapplies the stashed changes and removes them from the stash list]
// git stash list [this shows the list of stashed changes]
// git stash apply stash@{0} [this reapplies a specific stash without removing it from the stash list]
// git stash drop stash@{0} [this removes a specific stash from the stash list]
// git stash clear [this removes all stashes from the stash list]
// git stash show -p stash@{0} [this shows the changes in a specific stash]
// git stash branch <branchname> stash@{0} [this creates a new branch from a specific stash and applies the stashed changes to it]