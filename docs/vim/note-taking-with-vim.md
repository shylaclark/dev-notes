# Notetaking with Vim

_My markdown note-taking system using Vim, Vimwiki, and Pandoc_

## Getting Started

### Install Make

`xcode-select --install`

### Add a Makefile
```
MD_FILES=about.md 130-final-notes.md general-advice.md requirements.md \
         software-processes.md modeling.md architectural-design.md \
         design-of-components.md software-quality.md \
         configuration-management.md testing.md week-2-discussion.md \
         week-3-discussion.md week-4-discussion.md
PDF_FILES=$(MD_FILES:.md=.pdf)
BUILD_PDF_FILES=$(PDF_FILES:%=build/%)
EXTRA_PDFS=sample-midterm-solutions.pdf

130.pdf: $(BUILD_PDF_FILES)
        gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/default \
                -dNOPAUSE -dQUIET -dBATCH -dDetectDuplicateImages
                -dCompressFonts=true -r150 -sOutputFile=$@ $^ $(EXTRA_PDFS)

build/%.pdf: %.md
        @mkdir -p $$(dirname $@)
        pandoc -V geometry:margin=1in -o $@ $?
```

### Install Pandoc

Pandoc allows you to compile the markdown to pdf or html (for sharing).

`brew install pandoc`

### Install vim-plug
```
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```
### In your home dir, create:

1. .vimrc
2. .vim/

### Add the following to .vimrc:
```
set nocompatible
filetype plugin on
syntax on

set shiftwidth=4
set softtabstop=4
set expandtab

call plug#begin('~/.vim/plugged')

    Plug 'vimwiki/vimwiki'
    Plug 'altercation/vim-colors-solarized'

call plug#end()

let g:vimwiki_list = [{'path': '~/Documents/vimwiki/', 'syntax': 'markdown', 'ext': '.md'}]
```

### Now start Vim and run:

```
:PlugInstall
```

You can add pluginstall to your .vimrc file too, so you don't have to manually call the script.

Inside .vim/, you should now have:

- autoload/
  - plug.vim
- plugged/
  - vim-colors-solarized
  - vimwiki



## Navigating

### Start Vim and open index.wiki (or index.md):
```
\ww
```
### Add a link or select
```
# put the cursor on the word
<return>
```

### Back
```
<delete>
```

### To Compile

```
pandoc -t latex -o output-file.pdf input-file.md
```

```
pandoc input-file.md -t latex -o output-file.pdf
```

```
pandoc -s -V geometry:margin=1in -o output-file.pdf  input-file.md
```

## About

- Once a directory has been designated as the Vimwiki directory, every file therein becomes part of the text-based wiki.
- Pandoc can turn into a set of HTML pages or pdfs.
- You can also navigate it from within vim). It also has a diary function which works in a sub-directory of the wiki directory.

## Resources
- [Markdown Pandoc Notes](https://jamesbvaughan.com/markdown-pandoc-notes/)
- [Pandoc Notetaking](https://blog.getreu.net/projects/pandoc-notetaking/)
- [Install vim-plug](https://github.com/junegunn/vim-plug)
- [VimWiki](https://www.smoothterminal.com/articles/vimwiki)
- [VimWiki Gollum](https://davidyat.es/2017/09/01/vimwiki-plus-gollum/)
- [Getting Started with Vimwiki](https://blog.mague.com/?p=602)
- https://pandoc.org/MANUAL.html
- [Ultimate guide to writing and publishing in markdown](https://blog.ghost.org/markdown/)
- [Rippledoc generates HTML from markdown](http://www.unexpected-vortices.com/sw/rippledoc/index.html)
- [Deploy multiple private wikis with Docker](https://www.reddit.com/r/docker/comments/fuyn3c/best_way_to_deploy_multiple_private_wikis_with/?utm_source=share&utm_medium=ios_app&utm_name=iossmf)
