DROP TABLE IF EXISTS ezrite_user;
CREATE TABLE ezrite_user
(
  ezrite_user_id UUID NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL DEFAULT 0,
  profile json NULL,

  CONSTRAINT ezrite_user_id PRIMARY KEY (ezrite_user_id)
);
CREATE INDEX ix_user_email ON ezrite_user (email);

DROP TABLE IF EXISTS job;
CREATE TABLE job
(
  job_id UUID NOT NULL,
  owner_id UUID NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,

  CONSTRAINT job_id PRIMARY KEY (job_id)
);

DROP TABLE IF EXISTS conversation;
CREATE TABLE conversation
(
  job_id UUID NOT NULL,
  message TEXT NOT NULL,
  owner_id UUID NOT NULL,
  recipient_id UUID NOT NULL
);
