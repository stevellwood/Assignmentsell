package org.ssa.service;

import java.util.List;

import org.ssa.entity.Student;


/**
*
* @author Amsal
*/
public interface IStudentService {
	 List<Student> getAllStudents();
	 Student getStudentById(int studentId);
	 boolean addStudent(Student student);
	 void updateStudent(Student student);
	 void deleteStudent(int studentId);
}
