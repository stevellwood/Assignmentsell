package org.ssa.controller;

import java.util.List;

import org.ssa.entity.Student;
import org.ssa.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.util.UriComponentsBuilder;

/**
* @author Amsal
*/

@Controller
@RequestMapping("/")
public class StudentController {
	
	@Autowired
	private IStudentService studentService;
	
	@RequestMapping("/home")
	public String home() {
 		return "home";
 	}
	//amsal had studentlist as just student
	@RequestMapping(value="/studentlist/{id}", method = RequestMethod.GET )
	public ResponseEntity<Student> getStudentById(@PathVariable("id") Integer id) {
		Student student = studentService.getStudentById(id);
		return new ResponseEntity<Student>(student, HttpStatus.OK);
	}
	@RequestMapping(value= "/studentlist", method = RequestMethod.GET)
	public ResponseEntity<List<Student>> getAllStudents() {
		List<Student> student = studentService.getAllStudents();
		return new ResponseEntity<List<Student>>(student, HttpStatus.OK);
	}
	
	@RequestMapping(value= "/studentlist", method = RequestMethod.POST)
	public ResponseEntity<Void> studentPerson(@RequestBody Student student, UriComponentsBuilder builder) {
        boolean flag = studentService.addStudent(student);
        if (flag == false) {
        	return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(builder.path("/studentlist/{id}").buildAndExpand(student.getId()).toUri());
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}
	
	@RequestMapping(value="/studentlist/{id}", method = RequestMethod.PUT )
	public ResponseEntity<Student> updateStudent(@RequestBody Student student) {
		studentService.updateStudent(student);
		return new ResponseEntity<Student>(student, HttpStatus.OK);
	}
	@RequestMapping(value="/studentlist/{id}", method = RequestMethod.DELETE )
	public ResponseEntity<Void> Student(@PathVariable("id") Integer studentId) {
		studentService.deleteStudent(studentId);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
	//other sr
// 	@Controller
// public class MainController {
// 	@RequestMapping("/")
// 	public ModelAndView home(HttpServletRequest request, ModelAndView mv) {	
// 		mv.setViewName("index");
// 		return mv;
// 	}
	
// 	@RequestMapping("/student_list")
// 	public ModelAndView student_list(HttpServletRequest request, ModelAndView mv) {
// 		mv.setViewName("students");
// 		return mv;
// 	}
	
// 	@RequestMapping("/student_details")
// 	public ModelAndView student_details(HttpServletRequest request, ModelAndView mv) {
// 		mv.setViewName("student_details");
// 		return mv;
// 	}
}
