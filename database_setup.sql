CREATE TABLE review (
	review_id serial PRIMARY KEY,
	reviewer_id INT NOT NULL,
	movie_id INT NOT NULL,
	title VARCHAR ( 50 ),
	short_description VARCHAR ( 100 ),
	review_text VARCHAR ( 4000 ),
	star_rating INT NOT NULL,
	release_date VARCHAR (50),
	image_url VARCHAR (200)
);

CREATE TABLE reviewer (
    id VARCHAR(40),
    name VARCHAR (50),
    username VARCHAR (50)
);