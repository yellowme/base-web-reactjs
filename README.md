# Brandon Web #

## Stack
* ReactJS
* ...

## Setup ##
### Requirements ###
* NodeJS -> 6.11.3

### Install ###
* ` $ git clone URL_REPO_PATH`
* ` $ cd NAME_PROJECT`
* ` $ npm install`

### Run ###
* ` $  npm start`

### Run Testing ###
* ` $  nmp run test`

### Run Production ###
* ` $  npm run build`

### Install in Heroku ###
* ` $  heroku create $APP_NAME --buildpack https://github.com/mars/create-react-app-buildpack.git `

More info in: [https://github.com/mars/create-react-app-buildpack#environment-variables](https://github.com/mars/create-react-app-buildpack#environment-variables)

APP should be available at http://localhost:3000

# FONTCUSTOM #
For compile svg assets.

## Install ##
### On Mac ###
* `$ brew install fontforge --with-python`
* `$ brew install eot-utils`
* `$ gem install fontcustom`

### On Linux ###
* `$ sudo apt-get install fontforge`
* `$ wget http://people.mozilla.com/~jkew/woff/woff-code-latest.zip`
* `$ unzip woff-code-latest.zip -d sfnt2woff && cd sfnt2woff && make && sudo mv sfnt2woff /usr/local/bin/`
* `$ gem install fontcustom `

### Add assets in svg format###
* ` /src/assets/vectors/`

### Compile Assets ###
* `$ fontcustom compile`

More info in: [https://github.com/FontCustom/fontcustom](https://github.com/FontCustom/fontcustom)

## TODO ##
Install [http://todolist.site/](http://todolist.site/) for see the list for todo in your console.