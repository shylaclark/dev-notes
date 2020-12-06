# Linux Commands

Remove a swap file
```
rm -f .*.swp
```

Secure copy
```
scp username@remotehost.edu:foobar.txt /some/local/dir
```

Open a file with vim
```
$ sudo vim -r pytest.py
```

Remove all swap files
```
$ sudo find . -type f -name "*.sw[klmnop]" -delete
```

Get full path of file
```
$ sudo readlink -f filename
```
