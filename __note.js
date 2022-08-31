/**
 * Cannot push to Github after deploying app to Heroku
 * Solution :
 * git remote -v > git_rem_backup.txt
rm -rf .git
git init
git add -A .
git commit -m "first"
git remote add origin <data from git_rem_backup.txt>
git push origin master -f 
 * 
 * 
 * */ 