mkdir new-node-project
cd new-node-project

cp ../{README.md,package.json,index.js,.gitignore} .

echo "Installing node packages"
npm install {express,jade,markdown} --save

echo "Copying jade, css, and js assets"
mkdir views
mkdir -p public/{css,js}

cp ../*.jade views
cp ../*.css public/css
cp ../*.js public/js

echo "Initializing git repo"
git init
git add .
git commit -m 'Initial configuration from create-new-node-project.sh script'

echo "Configuration complete. Project located in: new-node-project/"