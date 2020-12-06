# Git
Create new branch and push to remote
```
git checkout -b <new-branch>
git push -u origin <new-branch>
```
Check out a remote branch
```
git checkout <branch-name>
```

Stash
```
git stash
```

Recover stashed changes
```
git stash pop
```

See remote branches
```
git branch -r
```
Pull changes from all remote branches and merge remote with the checked-out branch
```
git pull
```

Pull changes from the remote origin master branch and merge them with the local checked-out branch
```
git pull origin master
```
Bring in changes from all branches (no merge)
```
git fetch
```
Blow away local changes
```
git reset — hard origin/master
```
Look at commits (q to exit)
```
git log
```
Refer to most recent commit
```
git show HEAD
```

Sync a fork [[source](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork)]
```
git fetch upstream
git checkout master
git merge upstream/master
git pull
git push origin master
git checkout file-browser-spinner
git merge master
pip install -e .
```

To undo git add before a commit
```
git reset <file>

```

To undo git commit:
```
git reset --hard origin/master
```

## Commits

See your commits
```
git log --oneline
```

> Note:  "Snapshot" is another name for commit.

#### Write long commit message [[source](https://chris.beams.io/posts/git-commit/#separate)]
```
git commit -a
```
This should open vim editor, and now you can create a two-part commit message.
1. Subject line (50 chars max)
1. Body
  - Use the body to explain what and why vs. how
  - Wrap each line of the body at 72 chars

> Tip: It’s easy to configure Vim to wrap text at 72 characters when you’re writing a Git commit.

Example long commit
```
commit eb0b56b19017ab5c16c745e6da39c53126924ed6
Author: Pieter Wuille <pieter.wuille@gmail.com>
Date:   Fri Aug 1 22:57:55 2014 +0200

   Simplify serialize.h's exception handling

   Remove the 'state' and 'exceptmask' from serialize.h's stream
   implementations, as well as related methods.

   As exceptmask always included 'failbit', and setstate was always
   called with bits = failbit, all it did was immediately raise an
   exception. Get rid of those variables, and replace the setstate
   with direct exception throwing (which also removes some dead
   code).

   As a result, good() is never reached after a failure (there are
   only 2 calls, one of which is in tests), and can just be replaced
   by !eof().

   fail(), clear(n) and exceptions() are just never called. Delete
   them.
   ```
Change a commit message [[source](https://docs.github.com/en/github/committing-changes-to-your-project/changing-a-commit-message)]
```
```

Undo last commit (but preserve changes)
```
git reset --soft HEAD~1
```

Add a git merge tool
```
git config --global merge.tool vscode
```

## Merge Requests

- The MR title should describe the change you want to make.
- The MR description should give a reason for your change.
  - If you are contributing code, fill in the description according to the default template already provided in the “Description” field.
  - If you are contributing documentation, choose Documentation from the “Choose a template” menu and fill in the description according to the template.
  - Mention the issue(s) your merge request solves, using the Solves #XXX or Closes #XXX syntax to auto-close the issue(s) once the merge request is merged.
- If you’re allowed to, set a relevant milestone and labels.
