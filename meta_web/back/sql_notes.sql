-- NoSQL ?

-- DDL (define)
    -- 1) create table
    CREATE TABLE table_name (column_name1 datatype(size), column_name2 datatype(size));
    -- 2) delete table
    DROP TABLE table_name; 
    -- 3) alter table
    ALTER TABLE table_name ADD (column_name datatype(size));
    ALTER TABLE table_name ADD PRIMARY KEY (column_name);
    ALTER TABLE table_name MODIFY (column_name datatype(size));
    ALTER TABLE table_name DROP COLUMN (column_name);
    -- 4) turncate but not delete
    TRUNCATE TABLE table_name;
    -- 5) comments

-- DML (manipulate = CRUD)
    -- 1) create
    INSERT INTO table_name (col1, col2) VALUES (val1, val2);
    INSERT INTO table_name (col1, col2, col3) VALUES (val11, val12, val13), (val21, val22, val32);
    INSERT INTO table1_name (col1, col2) (SELECT (col1, col2) FROM table2_name);
    -- 2) read
    SELECT col_name FROM table_name
    SELECT col1_name, col2_name FROM table_name
    SELECT col1_name + col2_name FROM table_name
    SELECT col1_name FROM table_name WHERE col2_name = val
    SELECT col1_name / 2 FROM table_name WHERE col2_name + col3_name >= val
    SELECT * FROM table_name -- * means all
    -- 3) update
    UPDATE table_name SET col1=val1, col2=val2 WHERE col3=val3;
    -- WHERE controls its sql statement based on the bool result of the cond after it
    -- 4) delete
    DELETE FROM table_name WHERE condition;

-- DQL (query)
    -- ?

-- DCL (control acces)
    -- To do DMLs, for example, you need to have user rights set up. This is called user privileges. 
    -- This category deals with advanced funcs or operations in the db
    GRANT 
      -- Cmd to provide the user with the privileges required to allow him access and manipulate the db.
    REVOKE 
      -- Cmd to remove permissions from any user.

-- TCL (transaction)
    -- The TCL cmds are used to manage transactions in the db. 
    -- These are used to manage the changes made to the data in a table by utilizing the DML cmds. 
    -- It also allows SQL statements to be grouped together into logical transactions. 
    -- This category deals with advanced funcs or operations in a db.
    COMMIT 
      -- Cmd to save all the work you have already done in the db.
    ROLLBACK 
      -- Cmd to restore a database to the last committed state.


-- types
--------
    -- Numeric: 
      NUMBER[for oracle]=INT[for MySQL], TINYINT, BIGINT, DECIMAL, FLOAT, REAL;
        -- datatypes can be differently named in Oracle, SQL Server, MySQl

    -- Date and time: 
      DATE, TIME, DATETIME;
        -- value for date in correct format is "YYYY-MM-DD"("year-month-day")
        CURRENT_DATE() -- is a func returns the current date value in DATE datatype format
    
    -- Character and string: 
      CHAR(length): 
        -- the given length of the characters is predetermined
        -- You can type CHAR(5) in SQL for string values actually consits of 5 chars (no more .. no less)
        -- is the best option if you've predefined size of character that you want to maintain
      VARCHAR(length): 
        -- the length can be changed. It's not fixed
        -- is often used when you're not sure how many characters might be inserted in the column field
        -- You can type VARCHAR(50) in SQL to allow for any input up to max of 50 chars
        -- takes up 1byte/char + another 2bytes to hold len
      TINYTEXT(length): 
        -- is used to define columns that require less than 255 characters, like short paragraphs
      TEXT(length): 
        -- is used to define columns of less than 65,000 characters, like an article
      MEDIUMTEXT(length): 
        -- defined columns of 16.7 million characters. For example, the text of a book
      LONGTEXT(length): 
        -- datatype stores up to four gigabytes of text data
    
    -- Binary: 
      BINARY, VARBINARY;
    
    -- Miscellaneous: 
      CLOB: 
        -- Character Large Object for storing a large block of text in some form of text encoding.
      BLOB: 
        -- Binary Large Object for storing a collection of binary data such as images.


-- keys = attributes
--------------------
    -- Candidate key
      -- Candidate keys = Primary Keys + Alternate Keys
      -- any attribute that contains a unique value in each row of the table
    -- Composite key
      -- a key that is composed of two or more attributes to form a unique value in each row
    -- Alternate Key = Secondary Key
      -- a candidate key that was not selected to be the primary key
    -- Primary Key & Foreign Key
      -- The foreign key is an attribute on the table that references a unique key in another table
      -- the primary key can comprise more than one column or field.
        -- This happens when a single column cannot make a record in a table uniquely identifiable.


-- constraints
--------------
    ... WHERE <cond>
    ... NOT NULL;
    ... DEFAULT <value>
      -- Database default constraints are used to limit the value of data that can be stored in a table


-- Integrity Constraints
------------------------
    -- key (rules for primary key)
    -- domain (rules for datatypes & values)
    -- referential integrity (rules for foreign key)


-- Notes
--------
-- db_name must be unique and has max of 63 chars
-- don't forget to use ; at the end of sql statements
-- 


-- terms
--------
    -- db (relational_SQL, NoSQL, OODBs, schema, ERD, DBMS)
    -- SQL (low-level+high-level(DDL-DML-DQL-DCL-TCL))
    -- table=entities (col=field, row=record, cell, attr, datatypes-values-domain)
    -- key=attr (candidate=unique=primary+(alternate=secondary), composite, foreign=ref, relations(121-12many-many2many))
    -- CRUD (create(INSERT) - read=retrieve(SELECT) - UPDATE - DELETE)
    -- user (privileges, permissions)
    -- datatypes (miscellaneous, CLOB, BLOB, binary, encoding)
    -- constraints=rules, Integrity, conds
    -- 


-- keywords
-----------
    WHERE LIKE
    NULL
    NOT NULL
    DEFAULT
    = "" ( , ) ;
    
    + - * / %
    SELECT arith_op

    CREATE DATABASE
    CREATE TABLE
    SHOW DATABASES;
    SHOW TABLES;
    SHOW COLUMNS FROM
    ALTER TABLE ADD
    ALTER TABLE MODIFY COLUMN
    ALTER TABLE DROP
    DROP DATABASE
    DROP TABLE

    INSERT INTO VALUES
    INSERT INTO SELECT FROM
    SELECT FROM WHERE
    UPDATE SET WHERE
    DELETE FROM WHERE

    --