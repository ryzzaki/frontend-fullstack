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

# grep
# aux - All processes, U - show process' user/owner, X - show processes not attached to terminal
ps aux > grep node

# Nginx redirect

location / {
 return 301 https://google.com/;
}

# Nginx subdomain

server {
  listen 80;
  listen [::]80; #IPV6 Notation

  server_name staging.myserver.com;

    location / {
      proxy_pass http://127.0.0.1:3000/;
    }
}

# Unattended upgrades
sudo apt install unattended-upgrades
# Config file for unattended upgrades
cat /etc/apt/apt.conf.d/50attended-upgrades

# Nmap
sudo apt install nmap
nmap SERVER_IP_ADDRESS
# Run nmap with more service info
nmap -sV SERVER_IP_ADDRESS

# Uncomplicated Firewall
sudo ufw enable
ufw deny https # this will black hole the request and won't send a response
ufw reject ssh # never do this btw lol
sudo ufw status

# Certbot will automatically modify the nginx config for us

# Adding HTTP/2 - it can do multiplexing over 1 connection pipe - much better than TCP handshakes + HTTP/2 allows HPACKs
sudo vi etc/nginx/sites-available/default/
# edit the below
listen 443 http2 ssl; # Managed by certbot
```