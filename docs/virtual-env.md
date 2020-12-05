
# Virtual Environment

#### Install
```
$ mkdir Environments
$ virtualenv --version                 # Check the install
$ virtualenv <test-environment>     # If you only have Python 3 on your machine
$ source <test-environment>/bin/activate
```

#### Remove
```
$ cd <test-environment>
$ deactivate
$ cd ..
$ sudo rm -rf <test-environment>
```

## Resources
- [https://docs.djangoproject.com/en/3.0/intro/contributing/](https://docs.djangoproject.com/en/3.0/intro/contributing/)
- [https://realpython.com/python-virtual-environments-a-primer/](https://realpython.com/python-virtual-environments-a-primer/)
- [https://djangocentral.com/how-to-a-create-virtual-environment-for-python/](https://djangocentral.com/how-to-a-create-virtual-environment-for-python/)