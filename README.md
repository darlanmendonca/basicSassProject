# Basic Sass Project v0.3.0
This is a Yeoman generator for a simple and basic web project using Sass and Grunt =P

## Install 
To create project, first install this module as global, then inside your directory project, run:
```sh
yo basicSassProject
```

## Usage
### Build task _(compile)_
#### For development 
```sh
> grunt build:dev
```

This build task runs the following sub-tasks:
 - Erase/delete files from dist folder
 - Process Sass files into CSS and copy them into dist folder
 - Copy html files into dist folder
 - If you have a images folder, copy it into dist folder
 - If you have a resources (pdf, typography, doc, etc) folder, copy it into dist folder
 - Watch for changes in html and Sass files

#### For production
```console
> grunt build:prod
```

This build task runs the following sub-tasks:
 - Erase/delete files from dist folder
 - Process Sass files into CSS and copy them into dist folder
 - Minify css files and copy them into dist folder
 - Copy html files into dist folder
 - If you have a images folder, copy it into dist folder
 - If you have a resources (pdf, typography, doc, etc) folder, copy it into dist folder

## Glossary 
 - Dist folder => is where compiled files are placed after each task run
