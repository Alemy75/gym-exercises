=== Migrations ===

Create
```
npx typeorm migration:generate -d src/migrations -n MigrationName
```

Apply
```
npx typeorm migration:run
```

Revert
```
npx typeorm migration:revert
```

=== Database ===

Create DB container
```
docker run --name=root -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=gym -p 3306:3306 -d mysql:latest
```

Exec MySql
```
docker exec -it mysql-container mysql -uroot -p
```

Create DB
```
CREATE user
```
