package JDBCProject2;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.Connection;

public class Mainline {
    Db db = null;
    public static Connection conn = null;
    public static void main(String[] args) throws Exception {
        
        Day24Enrolling d24 = new Day24Enrolling();
        d24.actforStudent(Student.newstudents);
    }
}
