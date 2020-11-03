# GitHub and Atom

It's rather useful to be able to sync what you have in Atom with your GitHub repo. This means you can upload and manage everything from Atom, making file management much easier.

## 1. Download Atom

You can get this from <https://atom.io>

## 2. Install Git

Git is not the same as GitHub. Git is a system for managing versions of software. GitHub is an online service that uses Git.

**Mac**  
If you have a Mac, Git is probably already installed. You can check though.

1. Open Terminal (find it using Spotlight)
2. Type `git --version`

If you've got git installed, it should tell you what version you've got. If it comes up with an error, you've not got it.

**Windows**  
Git doesn't usually come pre-installed on Windows computers.

**Installing**  
You've a couple of options for installation. You can download the installer from <https://git-scm.com/downloads>. Or, you could download the GitHub Desktop application, which includes an installation of Git. At some point during installation, you may be asked if you'd like to install the Command Line Interface for Git. You do.

## 3. Setup Git

Git needs to know your name and email address, as these things get added to every commit you make. To do this, you'll need to access a command line.

**Mac**  
Search for and open Terminal as before.

**Windows**  
From Windows 10, it comes with a Terminal application. Search for and run it.

**Setup**  
In the Terminal, type in the following line, substituting John Doe for your actual name, and hit `ENTER`:

```
git config --global user.name "John Doe"
```

Type in the following line, substituting in your own email address, and hit `ENTER`:

```
git config --global user.email johndoe@example.com
```

### 4. Connect Atom

In Atom, open a new window. File -> New Window.

![New Window in Atom](https://thomcorah.github.io/dmu-multimedia/resources/img/sync-atom-github/Atom-new-window.png)

In this new window, you're going to clone your existing GitHub repo. Log in to GitHub in your browser and go into your repo. Towards the top right is a green button to download your code. Click this. There will be a URL in a box, copy this.

![Clone URL in GitHub](https://thomcorah.github.io/dmu-multimedia/resources/img/sync-atom-github/github-clone-url.png)

Back in Atom, you need to open the Command Palette. Packages -> Command Palette -> Toggle.

![Toggle Command Pallet](https://thomcorah.github.io/dmu-multimedia/resources/img/sync-atom-github/Atom-toggle-cm.png)

In the box that comes up, type 'clone'. In the options that come up underneath, select GitHub: Clone

![Cloning in Atom](https://thomcorah.github.io/dmu-multimedia/resources/img/sync-atom-github/atom-github-clone.png)

You'll have a dialogue with an empty box labelled 'Clone from'. This is where you put that URL that you copied from GitHub.

The second box asks where you want to save this on your computer. Although you can change the location, you need to keep the folder name the same as your repo.

So, update these two boxes and hit 'Clone'.

![Cloning in Atom](https://thomcorah.github.io/dmu-multimedia/resources/img/sync-atom-github/atom-github-clone-2.png)

All being well, you now have a copy of your GitHub repo on your computer.

### 5. Uploading to GitHub

Any changes you make to your code in Atom are now tracked.

When you save a file after making changes, the Git label in the bottom right of the Atom window updates to tell you how many files have been updated.

![Git Update](https://thomcorah.github.io/dmu-multimedia/resources/img/sync-atom-github/atom-git-new.png)

If you click this, the Git panel will open.

Git uses a system called staging when making changes. If you change a few files, you can stage them all, and then commit them in one go.

This panel allows you to manage this. The top half tells you which files have changed since the last commit. You can click 'Stage All' if you want to commit all the updates.

![Stage All](https://thomcorah.github.io/dmu-multimedia/resources/img/sync-atom-github/atom-stage-all.png)

This will move all those files into the middle section which lists all staged files.

With your files staged, enter a short description of the change in the Commit message box, and hit the 'Commit to main' button.

![Commit](https://thomcorah.github.io/dmu-multimedia/resources/img/sync-atom-github/atom-commit.png)

You've just updated the Git record on your computer. This now needs pushing up to GitHub. You may have noticed that once you hit Commit, a little change happened in that bottom-right area of the Atom window. There's now a button that says Push. Click this.

![Push](https://thomcorah.github.io/dmu-multimedia/resources/img/sync-atom-github/atom-push.png)

And that's it. It'll upload any files you've just committed to GitHub.

The same happens if you delete files, rename them, or move them. All of those changes need committing to Git, and then pushing to Github.

### 6. Editing on github.com

If you make any changes on through the GitHub website, these will need downloading by Atom to keep your local and remote versions in sync.

In Atom, click the Fetch button in the bottom right corner.

![Fetch](https://thomcorah.github.io/dmu-multimedia/resources/img/sync-atom-github/atom-fetch.png)

This will get a list of changed files from GitHub. If there are any changes to download, the Fetch button will change to Pull. Click it.

![Pull](https://thomcorah.github.io/dmu-multimedia/resources/img/sync-atom-github/atom-pull.png)

This will download any changes.
