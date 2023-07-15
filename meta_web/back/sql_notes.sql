-- content
----------
  -- SQL syntax, basic structure of DBs & different types of keys
  -- SQL datatypes, explore CRUD & create DBs and tables and manipulate with data
  -- SQL operators, sort and filter data using clauses
  -- DB schema, relational DB design(ERD) & DB normalization


-- NoSQL ?

-- DDL (define)
    -- 1) create table
    CREATE TABLE table_name (column_name1 datatype(size), column_name2 datatype(size));
    -- 2) delete table
    DROP TABLE table_name; 
    -- 3) alter table
    ALTER TABLE table_name ADD (column_name datatype(size));
    ALTER TABLE table_name ADD PRIMARY KEY (column_name);
    ALTER TABLE table1_name ADD FOREIGN KEY (column1_name) REFERENCES table_name (column_name);
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


-- keys=attrs
--------------------
    CREATE TABLE tbl_name(col_name datatype NOT NULL, PRIMARY KEY(col_name));
    CREATE TABLE tbl_name(col_name datatype, CONSTRAINT PK_cn PRIMARY KEY(col_name));
    CREATE TABLE tbl1_name(col1_name datatype, FOREIGN KEY(col1_name) REFERENCES tbl_name(col_name));
    -- Candidate key
      -- Candidate keys = Primary Keys + Alternate Keys
      -- any attribute that contains a unique value in each row of the table
    -- Composite key
      -- a key that is composed of two or more attributes to form a unique value in each row
        -- so it can used as primary if unique
    -- Alternate Key = Secondary Key
      -- a candidate key that was not selected to be the primary key
    -- Primary Key (PK) & Foreign Key (FK)
      -- The foreign key is an attribute on the table that references a unique key in another table
      -- the primary key can comprise more than one column or field.
        -- This happens when a single column cannot make a rec in a table uniquely identifiable.
    -- PRI (primary) means it’s a primary key
    -- UNI (unique) means it’s a unique key
    -- MUL (multiple) means the related col is permitted to contain the same val in multiple cells of that col 


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


-- Schema
---------
    -- Before dev a db, you plan how you will organize data. It's essentially a blueprint of what your data looks like
    -- an organization or grouping of information and the relationships among them
    -- is just the skeleton of the db, and it doesn’t store any actual data
    -- it's possible to trans ownership of schemas and their objs btw users and other schemas

    -- consists of:
      -- all the important data pertaining to a given scenario and their relationships
      -- unique keys for all entries and db objs
      -- a name and data type for each col in a table

    -- adv:
      -- provide logical groupings for database objs
      -- Maintain a clean set of data in the db related to an application
      -- make it easier to access and manipulate these db objs than other available methods
      -- Write efficient queries to retrieve data for reporting purposes, analytics and so on
      -- provide greater db security
        -- Avoid reverse-engineering of the underlying data model from time to time
        -- You can grant perms to sep and protect db objs based on user access rights

    -- schema is defined in different ways across different db systems:
      -- In the context of a MySQL db
        -- schema and db are interchangeable terms
        -- schema means a collection of data structs or an abstract design of how data is stored in a db
      -- In a SQL server
        -- schema is comprised of schema objs:
          -- collection of diff comps like tables, fields, relationships, datatypes, and keys
      -- In Postgres SQL
        -- schema is a namespace with the name db objects like views, indexes, and funcs
      -- In oracle
        -- schema system assigns a single schema to each user. Oracle even names each schema after its respective user

    -- schema can be broadly divided into three categories (three-schema arch):
      -- External | view schema
        -- defines different user views (the part of the db the specific user is interested in)
        -- hides the nonrelevant details of the db from a user
      -- Conceptual | logical schema
        -- db struct is described only at a concept level
        -- defines entities, attributes and relationships
        -- ERD is drawn to represent the logical schema of a db
        -- details about the physical storage and retrieval of data are hidden
      -- Internal | physical schema
        -- represents the entire db but at a very low level
        -- describes how the data is stored on disk in the form of tables, columns and recs.
        -- defines what data is stored in the db and how.


-- relationships
----------------
    -- deg of a relation: num of cols(attrs) in a table
    -- deg of cardinality: num of recs(rows) there are within a particular table in a db
    -- There are three types of relationships btw any two tables in a relational db:
        -- one-to-one (1:1)
          -- one single rec of one table is associated with one single rec of another table

        -- one-to-many (1:N)
          -- a rec of data in a row of one table is linked to multiple recs in different rows of another

        -- many-to-many (M:N)
          -- associates one rec of one table with multiple recs of another table.
          -- The same relationship also works in the other direction
          -- They are not kept in a data model:
            -- They are broken down into two 1:N relationships by introducing a junction or middle table


-- normalization
----------------
    -- The normalization process aims to (tackle): 
      -- minimize data duplications
      -- avoid errors during data modifications
      -- simplify data queries from the db
    -- The three fund normalization forms are known as:
      -- First Normal Form (1NF)
        -- enforce the data atomicity rule (one single instance val of the col attr in any cell of the table)
        -- eliminate unnecessary repeating groups of data
        -- Assign a primary key to the table
      -- Second Normal Form (2NF)
        -- avoid any partial dep (tables with a composite PK) relationships btw data
          -- where a non-key attr val dep only on one part of the composite key
        -- connect table with other tables in the db using FK
      -- Third Normal Form (3NF)
        -- it must already be in 2NF + have no transitive dep
          -- any non-key attr in the table may not be func dep on another non-key attr in the same table
        -- good enough to deal with the three anomaly challenges:
          -- INSERT ANOMALY
          -- UPDATE ANOMALY
          -- DELETE ANOMALY


-- Notes
--------
-- db_name must be unique and has max of 63 chars
-- don't forget to use ; at the end of sql statements
-- 


-- terms
--------
    -- db (relational_SQL, NoSQL, OODBs, DBMS)
    -- SQL (low_level+high_level(DDL-DML-DQL-DCL-TCL))
    -- table=entities (col, field, row, rec, tuple, cell, attr, datatypes, values, domain)
    -- key=attr (candidate=unique=primary+(alternate=secondary), composite, foreign=ref)
    -- CRUD (create(INSERT) - read=retrieve(SELECT) - UPDATE - DELETE)
    -- sorting (ascending, descending)
    -- security, user, privileges, permissions, grant
    -- datatypes (miscellaneous, CLOB, BLOB, binary, encoding)
    -- constraints=rules, Integrity
    -- keywords, clause
    -- conds, arithmetic & logic+Comparison, operation, operator, operand, modulus
    -- schema, objs, organization, relationships, ERD, ER model, blueprint
    -- relationships(1:1, 1:N, M:N), parent, child
    -- normalization(1NF, 2NF, 3NF), dep(partial, func, transitive), atomicity, redundancy, inconsistency, anomaly
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
    DELETE FROM tbl_name WHERE col_name BETWEEN val1 AND val2;

