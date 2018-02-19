CREATE TABLE todos(
        id serial primary key,
        task varchar(160),
        duedate date,
        notes varchar(160),
        complete varchar (1)
);

CREATE TABLE categories (
		id serial primary key,
		category varchar (20),
		task_id integer REFERENCES todos
		);
