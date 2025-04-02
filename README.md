# ReYohoho
[Desktop App](https://github.com/reyohoho/reyohoho-desktop)

# Mirrors
[reyohoho.github.io/reyohoho](https://reyohoho.github.io/reyohoho)

[reyohoho.serv00.net](https://reyohoho.serv00.net)

[reyohoho.surge.sh](https://reyohoho.surge.sh)

[reyohoho.vercel.app](https://reyohoho.vercel.app)

# Server-side example
```
nohup ./ssl-proxy-linux-amd64 -from 0.0.0.0:443 -to 127.0.0.1:8000  -domain=your.domain > proxy_kino.log &
nohup gunicorn kinoserver:app --workers 4 --worker-class uvicorn.workers.UvicornWorker --bind 0.0.0.0:8000 > kino_server.log &
```
