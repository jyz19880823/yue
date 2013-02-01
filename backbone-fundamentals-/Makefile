include_dir=build
source=index.md
title='Developing Backbone.js Applications'
filename='backbone-fundamentals'


all: html epub rtf pdf mobi

html:
	pandoc -s $(source) -t html5 -o index.html -c style.css \
		--include-in-header $(include_dir)/head.html \
		--include-before-body $(include_dir)/author.html \
		--include-before-body $(include_dir)/share.html \
		--include-after-body $(include_dir)/stats.html \
		--title-prefix $(title) \
		--normalize \
		--smart \
		--toc

epub:
	pandoc -s $(source) --normalize --smart -t epub -o $(filename).epub \
		--epub-metadata $(include_dir)/metadata.xml \
		--epub-stylesheet epub.css \
		--epub-cover-image img/cover.jpg \
		--title-prefix $(title) \
		--normalize \
		--smart \
		--toc

rtf:
	pandoc -s $(source) -o $(filename).rtf \
		--title-prefix $(title) \
		--normalize \
		--smart

pdf:
	# You need `pdflatex`
	# OS X: http://www.tug.org/mactex/
	# Then find its path: find /usr/ -name "pdflatex"
	# Then symlink it: ln -s /path/to/pdflatex /usr/local/bin
	pandoc -s $(source) -o $(filename).pdf \
		--title-prefix $(title) \
		--normalize \
		--smart \
		--toc

mobi: epub
	# Download: http://www.amazon.com/gp/feature.html?ie=UTF8&docId=1000765211
	# Symlink bin: ln -s /path/to/kindlegen /usr/local/bin
	kindlegen $(filename).epub
