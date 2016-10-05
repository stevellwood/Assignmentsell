package org.ssa.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ssa.dao.IStudentDAO;
import org.ssa.entity.Student;
/**
* @author Amsal
*/
@Service
public class StudentService implements IStudentService {

	@Autowired
	private IStudentDAO studentDAO;
	
	@Override
	public List<Student> getAllStudents() {
		return studentDAO.getAllStudents();
	}

	@Override
	public Student getStudentById(int studentId) {
		Student student = studentDAO.getStudentById(studentId);
		return student;
	}

	@Override
	public synchronized boolean addStudent(Student student) {
		 studentDAO.addStudent(student);
  	   return true;
	}

	@Override
	public void updateStudent(Student student) {
		studentDAO.updateStudent(student);
	}

	@Override
	public void deleteStudent(int studentId) {
		studentDAO.deleteStudent(studentId);
	}

}
