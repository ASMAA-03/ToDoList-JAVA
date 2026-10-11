import java.sql.*;
import java.util.InputMismatchException;
import java.util.Scanner;

public class ToDoListTasks {

    Scanner scan = new Scanner(System.in);
    private boolean flag = true;

    public void start() {
        menu();
    }

    public void menu() {
        System.out.println("\n\t*** To-Do List ***");
        System.out.println("1- Add Task");
        System.out.println("2- Delete Task");
        System.out.println("3- Search for Task");
        System.out.println("4- Exit");
        System.out.println("5- Show Uncompleted Tasks");
        System.out.println("6- Show All Tasks");
        System.out.println("7- Mark As Complete");
        System.out.println("8- Show Completed Tasks");
        System.out.print("Your Choice: ");

        chooseFrom();
    }

    public void chooseFrom() {

        while (flag) {

            try {

                int userInput = scan.nextInt();
                display(userInput);

                if (flag)
                    menu();

            } catch (InputMismatchException e) {

                System.out.println("Invalid Input.");
                scan.nextLine();

                if (flag)
                    menu();
            }
        }
    }

    public void display(int userInput) {

        switch (userInput) {

            case 1 -> {
                scan.nextLine();
                System.out.print("Enter Task: ");
                add();
            }

            case 2 -> {
                System.out.print("Enter Task ID: ");
                delete();
            }

            case 3 -> {
                System.out.print("Enter Task ID: ");
                searchForTask();
            }

            case 4 -> {
                System.out.println("bye");
                flag = false;
            }

            case 5 -> showUnCompletedList();

            case 6 -> theList();

            case 7 -> {
                System.out.print("Enter Task ID: ");
                markAsComplete();
            }

            case 8 -> showCompletedList();

            default -> System.out.println("Invalid Choice.");
        }

    }

    public void add() {

        String task = scan.nextLine();

        try {

            Connection con = DBConnection.getConnection();

            String sql = "INSERT INTO tasks(content,is_done) VALUES(?,?)";

            PreparedStatement ps = con.prepareStatement(sql);

            ps.setString(1, task);
            ps.setBoolean(2, false);

            ps.executeUpdate();

            System.out.println("Task Added Successfully.");

            ps.close();
            con.close();

        } catch (Exception e) {
            e.printStackTrace();
        }

    }


    public void delete() {

        int id = scan.nextInt();

        try {

            Connection con = DBConnection.getConnection();

            String sql = "DELETE FROM tasks WHERE id=?";

            PreparedStatement ps = con.prepareStatement(sql);

            ps.setInt(1, id);

            int rows = ps.executeUpdate();

            if (rows > 0)
                System.out.println("Task Deleted.");
            else
                System.out.println("Invalid ID.");

            ps.close();
            con.close();

        } catch (Exception e) {
            e.printStackTrace();
        }

    }


    public void theList() {

        try {

            Connection con = DBConnection.getConnection();

            Statement st = con.createStatement();

            ResultSet rs = st.executeQuery("SELECT * FROM tasks");

            while (rs.next()) {

                System.out.println(
                        rs.getInt("id")
                                +"- "
                                + rs.getString("content")
                                + " is "
                                + (rs.getBoolean("is_done") ? "Done" : "Not Done")
                );

            }

            rs.close();
            st.close();
            con.close();

        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    public void searchForTask() {

        int id = scan.nextInt();

        try {

            Connection con = DBConnection.getConnection();

            String sql = "SELECT * FROM tasks WHERE id=?";

            PreparedStatement ps = con.prepareStatement(sql);

            ps.setInt(1, id);

            ResultSet rs = ps.executeQuery();

            if (rs.next()) {

                System.out.println("ID      : " + rs.getInt("id"));
                System.out.println("Task    : " + rs.getString("content"));
                System.out.println("Status is : "
                        + (rs.getBoolean("is_done") ? "Done" : "Not Done"));

            } else {

                System.out.println("Task Not Found.");

            }

            rs.close();
            ps.close();
            con.close();

        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    public void markAsComplete() {

        int id = scan.nextInt();

        try {

            Connection con = DBConnection.getConnection();

            String sql = "UPDATE tasks SET is_done=true WHERE id=?";

            PreparedStatement ps = con.prepareStatement(sql);

            ps.setInt(1, id);

            int rows = ps.executeUpdate();

            if (rows > 0)
                System.out.println("Task Completed.");
            else
                System.out.println("Invalid ID.");

            ps.close();
            con.close();

        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    public void showCompletedList() {

        try {

            Connection con = DBConnection.getConnection();

            String sql = "SELECT * FROM tasks WHERE is_done=true";

            PreparedStatement ps = con.prepareStatement(sql);

            ResultSet rs = ps.executeQuery();

            boolean found = false;

            while (rs.next()) {

                System.out.println(
                        rs.getInt("id")
                                + " - "
                                + rs.getString("content"));

                found = true;
            }

            if (!found)
                System.out.println("No Completed Tasks.");

            rs.close();
            ps.close();
            con.close();

        } catch (Exception e) {
            e.printStackTrace();
        }

    }


    public void showUnCompletedList() {

        try {

            Connection con = DBConnection.getConnection();

            String sql = "SELECT * FROM tasks WHERE is_done=false";

            PreparedStatement ps = con.prepareStatement(sql);

            ResultSet rs = ps.executeQuery();

            boolean found = false;

            while (rs.next()) {

                System.out.println(
                        rs.getInt("id")
                                + " - "
                                + rs.getString("content"));

                found = true;
            }

            if (!found)
                System.out.println("No Uncompleted Tasks.");

            rs.close();
            ps.close();
            con.close();

        } catch (Exception e) {
            e.printStackTrace();
        }

    }

}