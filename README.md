# Dev Notes

## About

Written in markdown and built using mkdocs.


> On computer:
> 1. Keep notes in a `C:\User\<username>\Notes` directory
> 1. Have a separate conda environment for notes `conda create --name notes`
>
> On iPhone:
> 1. Download GitJournal app and add this repository


### Project layout

    mkdocs.yml    # The configuration file.
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files.v

## Quick Start

### Install

#### Install dependencies

Install MkDocs
```
conda install -c conda-forge mkdocs
```

Install theme
```
pip install mkdocs-material
```

#### Install project

Create a Notes folder
```
cd C:\User\<username>\
mkdir Notes
```

Clone dev-notes
```
cd Notes
git clone git@github.com:shylaclark/dev-notes.git
```

### Run
Run on a live preview server: `mkdocs serve`

To see your changes, point your browser to http://127.0.0.1:8001/.

Deploy to GitHub pages: `mkdocs gh-deploy`

Build a static site: `mkdocs build`

## Resources
* [MkDocs docs](https://www.mkdocs.org/)
* [MkDocs tutorial](https://romandc.com/techtalk-mkdocs/)
* [Mkdocs themes](https://github.com/mkdocs/mkdocs/wiki/MkDocs-Themes)
  * [Material for MkDocs](https://github.com/squidfunk/mkdocs-material)
  * [Customize the material theme](https://squidfunk.github.io/mkdocs-material/customization/)
* [Markdown examples](http://www.unexpected-vortices.com/sw/rippledoc/quick-markdown-example.html)
