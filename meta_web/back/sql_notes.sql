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
    SELECT col_name FROM table_name WHERE cond;
    SELECT col1_name, col2_name FROM table_name
    SELECT col1_name + col2_name FROM table_name
    SELECT col1_name FROM table_name WHERE col2_name = val
    SELECT col1_name / 2 FROM table_name WHERE col2_name + col3_name >= val
    SELECT * FROM table_name -- * means all
    -- 3) update
    UPDATE table_name SET col1=val1, col2=val2 WHERE cond;
    -- WHERE controls its sql statement based on the bool result of the cond after it
    -- 4) delete
    DELETE FROM table_name WHERE cond;

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


-- Sorting (ORDER BY clause)
----------------------------
    SELECT col_name FROM table_name ORDER BY col_name;
    SELECT col1_name, col2_name FROM table_name ORDER BY col_name ASC;
    SELECT * FROM table_name ORDER BY col_name DESC;
    SELECT * FROM table_name ORDER BY col1_name ASC, col2_name DESC;
      -- ASC initial to final | DESC final to initial
      -- if not provided ASC | DESC it's ASC by default
      -- sorting for str vals is as alphabetical order
      -- when sorting with 2 cols: 1st col has priority then excutes 2nd if 1st col vals are the same


-- Filteration (WHERE clause)
----------------------------- 
  SELECT * FROM table_name WHERE logic_op;
    -- % in a string form while using WHERE clauses is a wild card (means IDC how many chars)
    ALL
      -- compare a single val to all the vals in another val set.
    ANY
      -- compare a val to any applicable val in the list as per the cond.
    BETWEEN AND
      -- search for vals that are within a set of vals, given the min val and the max val.
    EXISTS
      -- search for the presence of a row in a specified table that meets a certain criterion.
    IN (val1, val2)
      -- compare a val to a list of literal vals that have been specified.
    LIKE "%"
      -- compare a val to similar vals using wildcard operators.
    IS NULL
      -- Used to compare a value with a NULL value.
    UNIQUE
      -- Searches every row of a specified table for uniqueness (no duplicates).
    NOT
      -- Reverses the meaning of the logical operator with which it is used.
      -- For example: NOT EXISTS, NOT BETWEEN, NOT IN, NOT NULL, etc. This is a negate operator.
    cond1 AND cond2 AND cond3
    cond1 OR cond2 OR cond3
    cond1 AND (cond2 OR cond3)
      -- for multiple conds in WHERE clause.


-- DISTINCT clause
------------------
    SELECT DISTINCT col_name FROM tbl_name;
    SELECT count(DISTINCT col1_name, col2_name) FROM tbl_name
      -- For one col or expression is provided, the query will return the unique vals for that col. 
      -- For more than one col or expression, the query will retrieve unique combinations for those cols.
      -- doesn't ignore NULL vals as they are considered as unique vals by DISTINCT.
      -- can also be used with SQL aggregate funcs like COUNT, AVG, MAX


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
    -- sorting (ascending, descending)
    -- user (privileges, permissions)
    -- datatypes (miscellaneous, CLOB, BLOB, binary, encoding)
    -- constraints=rules, Integrity
    -- keywords, clause
    -- conds, arithmetic & logic+Comparison, operation, operator, operand, modulus
    -- 


-- keywords
-----------
    + - * / %
    SELECT arith_op

    = > >= < <= <> != !> !<
    SELECT FROM WHERE logic_cond

    CREATE DATABASE db_name;
    CREATE TABLE tbl_name;

    SHOW DATABASES;
    SHOW TABLES;
    SHOW COLUMNS FROM tbl_name;

    ALTER TABLE tbl_name ADD (col1_name datatype1, col2_name datatype2);
    ALTER TABLE tbl_name MODIFY (col1_name datatype1, col2_name datatype2);
    ALTER TABLE tdl_name DROP COLUMN col_name;
    -- ALTER TABLE tdl_name DROP COLUMNS col1_name, col2_name;

    DROP DATABASE db_name;
    DROP TABLE tbl_name;
    TRUNCATE TABLE tbl_name;

    INSERT INTO tbl_name(col1_name datatype1, col2_name datatype2) VALUES (val11, val21), (val12, val22);
    INSERT INTO tbl1_name SELECT col_name FROM tbl2_name;

    SELECT DISTINCT col_name FROM tbl_name;
    SELECT * FROM tbl_name WHERE logic_op;

    SELECT arith_op;
    SELECT col1_name + col2_name FROM tbl_name;
    SELECT col1_name / col2_name FROM tbl_name WHERE col3_name - col4_name <> val;

    SELECT col_name FROM tbl_name ORDER BY col_name;
    =
    SELECT col_name FROM tbl_name ORDER BY col_name ASC;
    SELECT col1_name FROM tbl_name ORDER BY col2_name DESC;
    SELECT col1_name FROM tbl_name ORDER BY col2_name ASC, col3_name DESC;
    
    UPDATE tbl_name SET col1_name = val1, col2_name = val2 WHERE col3_name LIKE "Val%";
    DELETE * FROM tbl_name WHERE col_name BETWEEN val1 AND val2;
