# pandoc-wiki-starter

Uses Vimwiki and Pandoc.


## Using Vimwiki
Start vim:
```
vim
```
Open current index.md
```
<space>ww
```

## Compile
pandoc vim.md -t latex -o vim.pdf

pandoc -s -V geometry:margin=1in -o idp-fy19-v2.pdf idp-fy19.md
