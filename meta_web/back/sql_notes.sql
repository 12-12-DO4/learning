-- NoSQL ?

-- DDL (define)
    -- 1) create table
    CREATE TABLE table_name (column_name1 datatype(size), column_name2 datatype(size));
    -- 2) delete table
    DROP TABLE table_name; 
    -- 3) alter table
    ALTER TABLE table_name ADD (column_name datatype(size));
    ALTER TABLE table_name ADD primary key (column_name);
    -- 4) turncate but not delete
    TRUNCATE TABLE table_name;
    -- 5) comments

-- DML (manipulate = CRUD)
    -- 1) create
    INSERT INTO table_name (column1, column2) VALUES (value1, value2);
    -- 2) read
    SELECT * FROM table_name -- * means all
    -- 3) update
    UPDATE table_name SET column1 = value1, column2 = value2 WHERE condition;
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

-- types: 
    -- Numeric:  
      INT, TINYINT, BIGINT, FLOAT, REAL;
    -- Date and time: 
      DATE, TIME, DATETIME;
    -- Character and string: 
      CHAR, VARCHAR;
    -- Binary: 
      BINARY, VARBINARY;
    -- Miscellaneous: 
      -- Character Large Object (CLOB) for storing a large block of text in some form of text encoding.
      -- Binary Large Object (BLOB) for storing a collection of binary data such as images.

-- keys = attributes
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

-- Integrity Constraints: 
    -- key (rules for primary key)
    -- domain (rules for datatypes & values)
    -- referential integrity (rules for foreign key)

-- 

-- terms
    -- db (relational_SQL, NoSQL, OODBs, schema, ERD, DBMS)
    -- SQL (low-level+high-level(DDL-DML-DQL-DCL-TCL))
    -- table=entities (col=field, row=record, cell, attr, datatypes-values-domain)
    -- key=attr (candidate=unique=primary+(alternate=secondary), composite, foreign=ref, relations(121-12many-many2many))
    -- CRUD (create(INSERT) - read=retrieve(SELECT) - UPDATE - DELETE)
    -- user (privileges, permissions)
    -- datatypes (miscellaneous, CLOB, BLOB, binary, encoding)
    -- constraints=rules, Integrity, conds
    -- 