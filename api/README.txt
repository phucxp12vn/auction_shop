Need: install composer and npm

Run command: 
1. Install library of php : "composer install"
2. import db
3. config db in file .env, include:
	DB_CONNECTION=mysql
	DB_HOST= "your sql host"
	DB_PORT= "your sql port"
	DB_DATABASE=auction_shop
	DB_USERNAME= "your user name sql"
	DB_PASSWORD= "your password sql"
4. Run server api: php artisan serve 