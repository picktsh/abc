# shellcheck disable=SC2164
cd /www/wwwroot/abc
git reset --hard origin/master
git pull
#重运行pm2相关任务 [聊天室,webhook服务]