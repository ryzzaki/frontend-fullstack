```bash
# Change the ownership of the folder - no need for sudo anymore because we own the folder
sudo chown -R $USER:$USER /var/www

# Proxy pass Nginx to default to port 80
sudo vi etc/nginx/sites-available/default/

location / {
  proxy_pass http://127.0.0.1:3000/;
}

# After editing the proxy pass, reload Nginx
sudo service nginx reload

# services vs systemctl

# process manager
sudo npm i -g pm2

pm2 start app.js

# Setup auto restart 
pm2 startup
```