package JDBCDay26Adv;

import java.util.ArrayList;
import java.util.List;

public class Mainline {

    public static void main(String[] args) {
        
        System.out.println("^^^^^^^^^^^^^^^^^^^MAIN assignment^^^^^^^^^^^^^^^^^^^^^^^^^");
        StudentCollection students = new StudentCollection();
        // retrieve a single student with id = 110
        Student aStudent = students.selectbyID(110);
       
        // display the student
        System.out.println(aStudent); // displays the student data in a formatted way
        // retrieve all the students into a collection
        System.out.println("**Now get all the students **");
        List<Student> allStudents = students.getAll();
        // iterate through the collection and display each student data in a formatted way
        for(Student student : allStudents) {
            System.out.println(student);
        }
        System.out.println("=========================================");
        System.out.println();
        
        
        // Insert new student
        System.out.println("^^^^^^^^^^^^^^^^^^ADVANCED^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
        Student aquinas = new Student ("Thomas","Aquinas",500,4.5,4);
        students.insert(aquinas);
        System.out.println(students.selectbyLastName("Aquinas"));
        
        // Set id for update to work
        students.changeIDforName("Aquinas", 501);
        aquinas.setId(600);
        // Update student's information
        aquinas.setGPA(2.0);
        aquinas.setFirstName("Thomas");
        aquinas.setLastName("Aquinas");
        aquinas.setSAT(1600);
        int changes = students.update(aquinas);
        System.out.println("debug: " + changes + " new changes");
        System.out.println(students.selectbyLastName("Aquinas"));
        
        // Delete the new student (by last name because id auto_increments and changes every time this is run)
        students.deleteByLastName("Aquinas");
        
        // Prove deletion (prints null student)
        System.out.println("After DELETE:");
        System.out.println(students.selectbyLastName("Aquinas"));
        
        // I built a method to update the Id since it cannot be done with the normal update method
        students.updateIdonly(190, 999);
        System.out.println(students.selectbyID(999));
        students.updateIdonly(999, 190);
        System.out.println();
        
        ArrayList<Student> gpaStuds = students.selectbyWhere("WHERE gpa between 3.0 AND 3.99");
        
        System.out.println("WHERE CLAUSE (GPA between 3.0 and 3.99):");
        for (Student stud : gpaStuds) {
            System.out.println(stud);
        }
        System.out.println();
        
        ArrayList<Student> orderedStudents = students.getAllinOrderAscn("first_name", true);
        
        System.out.println("ORDERED BY FIRST NAME ASC");
        for(Student student : orderedStudents) {
            System.out.println(student);
        }
        ArrayList<Student> descStudents = students.getAllinOrderAscn("last_name", false);
        
        System.out.println("ORDERED BY LAST NAME DESC");
        for(Student student : descStudents) {
            System.out.println(student);
        }

    }

}