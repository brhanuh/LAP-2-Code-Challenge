DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title varchar(100) NOT NULL,
    pseudonym varchar(200) NOT NULL,
    body varchar (500) NOT NULL
);