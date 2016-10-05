package org.ssa.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.ssa.entity.Student;
/**
* @author Amsal
*/
@Transactional
@Repository
public class StudentDAO implements IStudentDAO {

	@Autowired
	private HibernateTemplate  hibernateTemplate;

	@SuppressWarnings("unchecked")
	@Override
	public List<Student> getAllStudents() {
		String hql = "FROM Student as s ORDER BY s.id";
		return (List<Student>) hibernateTemplate.find(hql);
	}

	@Override
	public Student getStudentById(int studentId) {
		
		// String hql = "from Student as s where id = " + studentId;
		// List<Student> students = (List<Student>) hibernateTemplate.find(hql);
		
		// if(students.size() > 0) {		
		// 	return students.get(0);
		// } else {
		// 	return null;
		// }
		//amsal's only statement 
		return hibernateTemplate.get(Student.class, studentId);
	}

	@Override
	public boolean addStudent(Student student) {
		hibernateTemplate.save(student);
		return true;
	}

	@Override
	public void updateStudent(Student student) {
		Student record = getStudentById(student.getId());
		record.setFirst_name(student.getFirst_name());
		record.setLast_name(student.getLast_name());
		record.setSat(student.getSat());
		record.setGpa(student.getGpa());
		
		hibernateTemplate.update(student);
	}

	@Override
	public void deleteStudent(int studentId) {
		hibernateTemplate.delete(getStudentById(studentId));
		
	}
//	@Override
//	public void deleteStudent(Student student) { //steves method
//		//my method String hql = "delete from Student where id = " + student.getId();
//		hibernateTemplate.delete(student);
//	}
	

}
