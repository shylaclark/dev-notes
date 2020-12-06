# Rails

## Getting Started
### Install
```
gem install rails
```
### Create new
```
$ rails new app_name
```

### Preview
Rails comes with a web server called Puma that provides immediate web browser access to your application.
```
# Launch Puma web server
$ rails server
```

## Resources
[http://guides.rubyonrails.org/command_line.html](http://guides.rubyonrails.org/command_line.html)

Languages

## ERB (a.k.a. Erubis)
A templating markup language for Rails.

Examples:
```
# Evaluates Ruby expression
<% just run code %>

# Runs and outputs to string
<%= run code and output the result %>
```
Other options: Haml

Rake

## Commands
```
$ rake db:create
$ rake db:migrate
```

As of Rails 5, you can now run `rails db:create`.

AWS S3

## AWS S3 (Simple Storage Service)
Stores files in "buckets," which are top-level directories.

* Access Key ID:  your S3 user account identifier
* Secret Access Key:  your secret password
