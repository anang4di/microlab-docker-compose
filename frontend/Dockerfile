FROM nginx:stable-alpine

# Hapus default html
RUN rm -rf /usr/share/nginx/html/*

# Copy file html ke dalam container
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Jalankan nginx di foreground
CMD ["nginx", "-g", "daemon off;"]