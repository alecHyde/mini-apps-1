-- start up mysql 
-- root user doesnt need a password
-- mysql -u (declare user) -p
-- source schema.sql (have to be in right directory in terminal)

-- show databases; to see all databases
-- use (database); to select one

-- show tables; in database
-- describe (table); to see whats going on
 
-- make the schema
drop database if exists checkout;
create database checkout;
-- have to enter the db
use checkout;
-- make tables
create table f1 (
  id int not null auto_increment,
  name varchar(30) not null,
  email varchar(50) not null,
  password varchar(20) not null,
  primary key(id)
);

create table f2 (
  id int not null auto_increment,
  address1 varchar(50) not null,
  address2 varchar(50),
  city varchar(20) not null,
  state varchar(20) not null,
  zip int not null,
  phone int not null,
  primary key(id)
);

create table f3 (
  id int not null auto_increment,
  cc_num int not null, 
  exp_date varchar(5) not null,
  cvv int not null,
  bill_zip int not null,
  f1_id int not null,
  f2_id int not null,
  primary key(id),
  foreign key(f1_id) references f1(id),
  foreign key(f2_id) references f2(id)
);



