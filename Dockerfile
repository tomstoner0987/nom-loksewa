FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 8080
CMD ["sh","-c","PORT=${PORT:-8080}; sed -i 's/listen       80;/listen       $PORT;/; s/listen  \\[::\\]:80;/listen  [::]:$PORT;/' /etc/nginx/conf.d/default.conf; nginx -g 'daemon off;'"]