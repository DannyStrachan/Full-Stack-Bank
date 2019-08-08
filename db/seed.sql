DROP TABLE IF EXISTS credentials;
DROP TABLE IF EXISTS transfer;
DROP TABLE IF EXISTS account;
DROP TABLE IF EXISTS user_info;

CREATE TABLE user_info(
user_id SERIAL PRIMARY KEY,
username VARCHAR(50),
email VARCHAR(100)
);

CREATE TABLE credentials(
user_id INTEGER,
hash TEXT
);

CREATE TABLE account(
account_id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES user_info(user_id),
account_balance INTEGER
);

CREATE TABLE transfer(
transfer_id SERIAL PRIMARY KEY,
account_id INTEGER REFERENCES account(account_id),
transfer_type VARCHAR(20),
transfer_amount INTEGER
);