my awezum site
==============

powered by [Ghost](https://ghost.org/)

statically generated using the following script:
```
#! /bin/bash

wget \
	--recursive \
	--page-requisites \
	--no-parent \
	--convert-links \
	--progress=dot \
	--directory-prefix="github-blog" \
	--no-host-directories \
	--adjust-extension \
	--html-extension \
	--quiet \
	http://localhost:2368

cd github-blog

COMMIT_MSG=`date +"blog update on %d %b %Y at %H:%M:%S %Z"`

git add --all

git commit -a -m "$COMMIT_MSG"

git push -u origin master

cd ..
```
