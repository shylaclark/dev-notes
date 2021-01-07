# Dev Notes

## About

Written in markdown and built using mkdocs.

### Project layout

    mkdocs.yml    # The configuration file.
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files.

## Quick Start for Desktop

> Tip:  Create a new conda environment
> ```
> conda create --name notes
> ```

### Install dependencies

Install MkDocs
```
conda install -c conda-forge mkdocs
```

Install theme
```
pip install mkdocs-material
```

### Install project

> Tip:  Create a dedicated notes folder
> ```
> cd C:\User\<username>\
> mkdir Notes
> ```

Clone dev-notes
```
cd Notes
git clone git@github.com:shylaclark/dev-notes.git
```

### Run

#### Run locally on live preview server
```
mkdocs serve
```
To see your changes, point your browser to http://127.0.0.1:8001/.

#### Deploy to GitHub pages
```
mkdocs gh-deploy
```

#### Build a static site
```
mkdocs build
```

## Quick Start for Mobile
1. Download GitJournal app
1. In app, click 'Setup manually'
1. Create new SSH key for mobile device
1. In GitHub, add new SSH key account
1. In app, click 'Clone repository'

## Resources
* [MkDocs docs](https://www.mkdocs.org/)
* [MkDocs tutorial](https://romandc.com/techtalk-mkdocs/)
* [Mkdocs themes](https://github.com/mkdocs/mkdocs/wiki/MkDocs-Themes)
  * [Material for MkDocs](https://github.com/squidfunk/mkdocs-material)
  * [Customize the material theme](https://squidfunk.github.io/mkdocs-material/customization/)
* [Markdown examples](http://www.unexpected-vortices.com/sw/rippledoc/quick-markdown-example.html)
