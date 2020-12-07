# Dev Notes

Written in markdown and built using mkdocs.

## Getting Started
1. Clone project to `C:\User\<username>\Notes` directory.
1. Create new conda environment: `conda create --name mkdocs`
1. Activate it: `conda activate mkdocs`
1. Install mkdocs: `conda install -c conda-forge mkdocs`

### Project layout

    mkdocs.yml    # The configuration file.
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files.

### Run

Run on a live preview server: `mkdocs serve`

To see your changes, point your browser to http://127.0.0.1:8001/.

Deploy to GitHub pages: `mkdocs gh-deploy`

Build a static site: `mkdocs build`


## Resources
* [MkDocs docs](https://www.mkdocs.org/)
* [MkDocs tutorial](https://romandc.com/techtalk-mkdocs/)
* [Mkdocs themes](https://github.com/mkdocs/mkdocs/wiki/MkDocs-Themes)
  * [Customize the material theme](https://squidfunk.github.io/mkdocs-material/customization/)
* [Markdown examples](http://www.unexpected-vortices.com/sw/rippledoc/quick-markdown-example.html)
