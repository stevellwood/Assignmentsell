package JDBCDay26Adv;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

public class StudentCollection {

    SQLConnection conn = null;
    
    public int deleteById(int id) {

        try {
            connecttoDB();
            String query = "DELETE student where id = " + id;
            int changedRows = conn.executeUpdate(query);
           //Do I need to close connection in each method
            return changedRows;
        } catch (SQLException e) {
            System.out.println("Delete Student error");e.printStackTrace();
        }
        return -1;
    }
    // Insert a student, given all columns EXCEPT id
    public int insert(Student student) {
        try {
            connecttoDB();
            String query = String.format(
                    "INSERT student (first_name,last_name,sat,gpa,major_id) values ('%s','%s',%d,%f,%d)",
                    student.getFirstName(), student.getLastName(), student.getSAT(), student.getGPA(),
                    student.getMajorId());
            int rowsAffected = conn.executeUpdate(query);
            conn.close();
            return rowsAffected;
        } catch (SQLException e) {
            System.out.println("Insert Student error");e.printStackTrace();
        }
        return -1;
    }

    // Update student record in DB to match student object parameter, ID must not be null
    public int update(Student stud) {

        int changes = 0;
        try {
            String query;
            Student originalRecord = this.selectbyID(stud.getId());
            //sql.close();

            if (stud.getFirstName() != originalRecord.getFirstName()) {
                connecttoDB();
                query = "UPDATE student SET first_name = '" + stud.getFirstName() + "' WHERE id = "
                        + stud.getId();
                conn.executeUpdate(query);
                changes++;
                conn.close();
            }
            if (stud.getLastName() != originalRecord.getLastName()) {
                connecttoDB();
                query = "UPDATE student SET last_name = '" + stud.getLastName() + "' WHERE id = "
                        + stud.getId();
                conn.executeUpdate(query);
                changes++;
                conn.close();
            }
            if (stud.getSAT() != originalRecord.getSAT()) {
                connecttoDB();
                query = "UPDATE student SET sat = " + stud.getSAT() + " WHERE id = " + stud.getId();
                conn.executeUpdate(query);
                changes++;
                conn.close();
            }
            if (stud.getGPA() != originalRecord.getGPA()) {
                connecttoDB();
                query = "UPDATE student SET gpa = " + stud.getGPA() + " WHERE id = " + stud.getId();
                conn.executeUpdate(query);
                changes++;
                conn.close();
            }
            if (stud.getMajorId() != originalRecord.getMajorId()) {
                connecttoDB();
                query = "UPDATE student SET major_id = " + stud.getMajorId() + " WHERE id = " + stud.getId();
                conn.executeUpdate(query);
                changes++;
                conn.close();
            }
            return changes;
        } catch (SQLException e) {
            System.out.println("Update Student error");e.printStackTrace();
        }
        return -1;
    }

    // Update students id, given the current id and the new id
    public int updateIdonly(int currentId, int desiredId) {

        int chgRecords=-1;
        try {
            connecttoDB();
            String query = String.format("UPDATE student SET id = %d WHERE id = %d", desiredId, currentId);

            chgRecords = conn.executeUpdate(query);
            conn.close();
            return chgRecords;
        } catch (SQLException e) {
            System.out.println("Update Studentbyid error");e.printStackTrace();
        }
        return chgRecords;
    }
    
    // Update students id, given the last name and id they wish to change it to
    public int changeIDforName(String lastName, int idwanted) {

        int changedRows= -1;
        try {
            connecttoDB();
            String query = String.format("UPDATE student SET id = %d WHERE last_name = '%s'", idwanted, lastName);

            changedRows = conn.executeUpdate(query);
            conn.close();
            return changedRows;
        } catch (SQLException e) {
            System.out.println("Update Studentbyid error");e.printStackTrace();
        }
        return changedRows;
    }

    // Delete student record by last name
    public int deleteByLastName(String lastName) {

        try {
            connecttoDB();
            String query = "DELETE FROM student WHERE last_name = '" + lastName + "'";
            int rowsAffected = conn.executeUpdate(query);
            conn.close();
            return rowsAffected;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return -1;
    }
 
    // Select student record by id
    public Student selectbyID(int id) {
        Student student = new Student();
        try {
            connecttoDB();
            ResultSet rs = conn.executeQuery(String.format("SELECT * FROM student where id = %d", id));

            while (rs.next()) {
                student.setId(rs.getInt("id"));
                student.setFirstName(rs.getString("first_name"));
                student.setLastName(rs.getString("last_name"));
                student.setSAT(rs.getInt("sat"));
                student.setGPA(rs.getInt("gpa"));
                student.setMajorId(rs.getInt("major_id"));
            }

            rs.close();
            conn.close();
            return student;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return student;
    }

    // Select student records given a certain where clause
    public ArrayList<Student> selectbyWhere(String whereClause) {
        ArrayList<Student> students = new ArrayList<>();

        try {
            connecttoDB();
            ResultSet rs = conn.executeQuery("SELECT * FROM student " + whereClause);

            while (rs.next()) {
                Student student = new Student();
                student.setId(rs.getInt("id"));
                student.setFirstName(rs.getString("first_name"));
                student.setLastName(rs.getString("last_name"));
                student.setSAT(rs.getInt("sat"));
                student.setGPA(rs.getDouble("gpa"));
                student.setMajorId(rs.getInt("major_id"));
                students.add(student);
            }

            rs.close();
            conn.close();
            return students;
        } catch (SQLException e) {
            System.out.println("Update getWhere error");e.printStackTrace();
        }
        return students;
    }

    // Get a student by last name
    public Student selectbyLastName(String lastName) {
        Student student = new Student();
        try {
            connecttoDB();
            ResultSet rs = conn.executeQuery(String.format("SELECT * FROM student where last_name = '%s'", lastName));

            while (rs.next()) {
                student.setId(rs.getInt("id"));
                student.setFirstName(rs.getString("first_name"));
                student.setLastName(rs.getString("last_name"));
                student.setSAT(rs.getInt("sat"));
                student.setGPA(rs.getInt("gpa"));
                student.setMajorId(rs.getInt("major_id"));
            }

            rs.close();
            conn.close();
            return student;
        } catch (SQLException e) {
            System.out.println("Update selectbylastname error");e.printStackTrace();
        }
        return student;
    }

    // Get all students in student table
    public List<Student> getAll() {
        List<Student> students = new ArrayList<>();

        try {

            connecttoDB();
            ResultSet rs = conn.executeQuery("SELECT * FROM student");
            while (rs.next()) {
                students.add(new Student(rs.getInt("id"), rs.getString("first_name"), rs.getString("last_name"),
                        rs.getInt("sat"), rs.getDouble("gpa"), rs.getInt("major_id")));
            }
            rs.close();
            conn.close();
            return students;
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return students;
    }

    /* Parameters column name to order by, order can is true for asc, false for
       desc" */
    public ArrayList<Student> getAllinOrderAscn(String column, boolean isOrdered) {
        ArrayList<Student> students = new ArrayList<>();

        try {

            connecttoDB();
            ResultSet rs = null;
            if (isOrdered) {
                //rs = conn.executeQuery("SELECT * FROM student WHERE ORDER by " + "'"+column+ "'"+ " asc");
                rs = conn.executeQuery("SELECT * FROM student ORDER by " +column+  " asc");
            } else {
                //rs = conn.executeQuery("SELECT * FROM student ORDER by " + "'"+ column+ "'" + " DESC");//this doesn't work!!!
               rs = conn.executeQuery("SELECT * FROM student ORDER by " +  column+  " DESC");
            }
         
            while (rs.next()) {
                students.add(new Student(rs.getInt("id"), rs.getString("first_name"), rs.getString("last_name"),
                        rs.getInt("sat"), rs.getDouble("gpa"), rs.getInt("major_id")));
            }
            rs.close();
            conn.close();
            return students;
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return students;
    }

    // Create a connection object for sql queries
    private void connecttoDB() {
        try {
            Properties prop = new Properties();
            prop.load(new java.io.FileInputStream("connection.properties"));
            String url = prop.getProperty("dburl");
            String usr = prop.getProperty("usr");
            String pwd = prop.getProperty("pwd");
            conn = new SQLConnection(url, usr, pwd);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

}