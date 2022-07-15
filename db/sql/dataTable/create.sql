CREATE TABLE dataTable(
    id serial PRIMARY KEY,
    date date NOT NULL,
    name varchar(45) NOT NULL,
    count integer NOT NULL,
    distance integer NOT NULL
)