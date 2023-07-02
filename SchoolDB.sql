CREATE DATABASE SchoolDB;
USE SchoolDB;

CREATE TABLE Teacher (
    TeacherId UNIQUEIDENTIFIER PRIMARY KEY,
    Identification VARCHAR(255) NOT NULL,
    Name VARCHAR(255) NOT NULL,
    LastName VARCHAR(255) NOT NULL,
    Age INT NOT NULL,
    Address VARCHAR(255) NOT NULL,
    Phone VARCHAR(255) NOT NULL
);

INSERT INTO Teacher (TeacherId, Identification, Name, LastName, Age, Address, Phone) VALUES ('C2F890A7-7BFD-4D84-BD45-957A2567E59F', '123456789', 'John', 'Doe', 35, '123 Main St', 5551234);

CREATE TABLE Student (
    StudentId UNIQUEIDENTIFIER PRIMARY KEY,
    Identification VARCHAR(255) NOT NULL,
    Name VARCHAR(255) NOT NULL,
    LastName VARCHAR(255) NOT NULL,
    Age INT NOT NULL,
    Address VARCHAR(255) NOT NULL,
    Phone VARCHAR(255) NOT NULL
);

INSERT INTO Student (StudentId, Identification, Name, LastName, Age, Address, Phone) VALUES ('C2F230A8-7BFD-4D23-BD42-237A3678E58F', '123456789', 'John', 'Doe', 25, '123 Main Street', '555-1234');

CREATE TABLE Subject (
    SubjectId UNIQUEIDENTIFIER PRIMARY KEY,
    Name VARCHAR(255) NOT NULL
);

INSERT INTO Subject (SubjectId, Name) VALUES ('EC53AB79-BB4A-4DF2-BD69-5FE8A52AC21F', 'Matematicas');
INSERT INTO Subject (SubjectId, Name) VALUES ('FCA4BE8B-718A-4A45-8D2C-CF67A7FCA72E', 'Ciencias');
INSERT INTO Subject (SubjectId, Name) VALUES ('39F98F67-2D88-4E8C-AB4D-A66E4C9247C9', 'Historia');

CREATE TABLE TeacherSubject (
    TeacherId UNIQUEIDENTIFIER,
    SubjectId UNIQUEIDENTIFIER,
    PRIMARY KEY (TeacherId, SubjectId),
    FOREIGN KEY (TeacherId) REFERENCES Teacher(TeacherId),
    FOREIGN KEY (SubjectId) REFERENCES Subject(SubjectId)
);

INSERT INTO TeacherSubject (TeacherId, SubjectId) VALUES ('C2F890A7-7BFD-4D84-BD45-957A2567E59F','EC53AB79-BB4A-4DF2-BD69-5FE8A52AC21F');

CREATE TABLE StudentSubject (
    StudentId UNIQUEIDENTIFIER,
    SubjectId UNIQUEIDENTIFIER,
    AcademicYear INT,
    Grade DECIMAL(3, 1),
    PRIMARY KEY (StudentId, SubjectId, AcademicYear),
    FOREIGN KEY (StudentId) REFERENCES Student(StudentId),
    FOREIGN KEY (SubjectId) REFERENCES Subject(SubjectId)
);

INSERT INTO StudentSubject (StudentId, SubjectId, AcademicYear, Grade) VALUES ('C2F230A8-7BFD-4D23-BD42-237A3678E58F', 'EC53AB79-BB4A-4DF2-BD69-5FE8A52AC21F', 2023, 4.5);