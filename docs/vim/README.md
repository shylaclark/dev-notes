# My Vim Cheatsheet

## Getting Started

#### Install
1. Download installer gvim.exe (anywhere)
2. Run and save to C:\Users\sclark\AppData\Local
3. Make sure to select "Create.bat"
4. Add to "Path" in environment variables ..\Local\Vim\vim81
5. Restart machine

#### Configure
The vimrc file contains optional runtime configuration settings to initialize Vim when it starts. On Unix based systems, the file is named .vimrc, while on Windows systems it is named _vimrc.[source](https://vim.fandom.com/wiki/Open_vimrc_file)

:e $HOME/.vimrc  " on Unix, Mac or OS/2

:e $HOME/_vimrc  " on Windows

> Lines that begin with " are comments and are not read by vim.

Note the 'system vimrc file' and 'user vimrc file' paths displayed by the :version command. The system vimrc file can be created by an administrator to customize Vim for all users. In addition, each user can have his or her own user vimrc.

#### Run
In cmd.exe you can run the following:

Start vim
```
vim
```

Start insert mode
```
i
```

Start command mode
```
Esc
```

To save and name
```
:wq testing.md
```

> Vim automatically saves files in current working directory.

#### Install a Vim plugin manager
Vundle isn't being maintained anymore. Use [vim-plug](https://github.com/junegunn/vim-plug) instead.

## Learn Vim
- [VimGenius](vimgenius.com)
- [Vim-Adventures](vim-adventures.com)
- [5 Places to Learn Vim](https://www.freecodecamp.org/news/vim-isnt-that-scary-here-are-5-free-resources-you-can-use-to-learn-it-ab78f5726f8d/)
