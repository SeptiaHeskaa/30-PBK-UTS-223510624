echo "start deployment..."

# abort on errors
set -e

rm -rf dist
<<<<<<< HEAD

=======
yarn build
>>>>>>> 11054b7bd8c7598d222c8ffda395ef3b18a97d5b
cd dist

git init
git add .
git cm -m "deploy"

git push -f git@github.com:eyvindove/vue3-todolist.git master:gh-pages

cd -
