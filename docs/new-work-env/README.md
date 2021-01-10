# Set Up a New Work Environment

## Set up base environment

#### 1. Set up your OS
* If using Windows, start [here](windows-only.md)
* If using Mac, start [here](mac-only.md)
* Change the [background](static/)

#### 2. Install Office apps
  * Outlook
  * Teams
  * OneNote
  * PowerPoint
  * Word
  * Excel (You can't edit the PPT graphs easily without it.)

#### 3. Install and configure git
You need git right off the bat, so you can access projects and notes.

1. Check if git is installed
    ```
    git --version
    ```
    If not, install [git](https://git-scm.com/downloads)
1. Create new SSH key and add it to your GitHub/GitLab account

#### 4. Set up a file structure
Create two new directories in your home directory:
```
Users/<username>/
  Notes/
  Projects/
```

## Set up for note-taking

#### 1. Install and configure Atom
Atom is a sleek and clean IDE, just perfect for managing my notes.
1. [Install Atom](https://atom.io)
1. [Configure Atom](set-up-atom.md)

#### 2. Clone dev-notes
```
cd Users/<username>/Notes
git clone https://github.com/shylaclark/dev-notes
```
#### Note-taking resources
- [How to organize GitHub repositories](https://andreicioara.com/how-i-organize-my-github-repositories-ce877db2e8b6)
- [jamesbvaughan: How I Take Notes With Vim, Markdown, and Pandoc](https://jamesbvaughan.com/markdown-pandoc-notes/)

## Set up for dev

#### 1. Install and configure VSCode
VSCode has built-in support for Jupyter Notebooks.

1. [Install VSCode](https://code.visualstudio.com/)
1. [Configure VSCode](set-up-vscode.md)

#### 2. Install Chrome
Chrome was the only browser that reliably worked with Bokeh and Panel. [Click here](set-up-firefox.md) to set up Firefox.

[Install Chrome](https://www.google.com/chrome/)
