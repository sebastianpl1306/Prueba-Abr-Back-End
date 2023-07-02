using Microsoft.EntityFrameworkCore;
using Prueba_Abr_Back_End.Models;

namespace Prueba_Abr_Back_End.Services;

public class StudentService : IStudentService
{
    SchoolContext context;

    public StudentService(SchoolContext dbContext)
    {
        this.context = dbContext;
    }

    public IEnumerable<Student> Get()
    {
        try
        {
            return context.Students.Include(p => p.Subjects).ThenInclude(ss => ss.Subject);
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.ToString());
            return context.Students;
        }
    }

    public async Task Save(Student student)
    {
        try
        {
            context.Students.Add(student);
            context.SaveChanges();
        }catch(Exception ex)
        {
            Console.WriteLine(ex.ToString());
        }
    }

    public async Task<Object> Update(Guid id, Student student)
    {
        var currentStudent = context.Students.Find(id);
        if (currentStudent != null)
        {
            currentStudent.Identification = student.Identification;
            currentStudent.Address = student.Address;
            currentStudent.Phone = student.Phone;
            currentStudent.Name = student.Name;
            currentStudent.LastName = student.LastName;
            currentStudent.Age = student.Age;

            context.SaveChanges();

            var response = new { ok = true, studentUpdate = currentStudent };
            return response;
        }
        else
        {
            var response = new { ok = true, studentUpdate = currentStudent };
            return response;
        }
    }

    public async Task<Object> Delete(Guid id)
    {
        try
        {
            var currentStudent = context.Students
            .Include(p => p.Subjects)
            .FirstOrDefault(s => s.StudentId == id);
            if (currentStudent != null && currentStudent.Subjects.Count == 0)
            {
                context.Remove(currentStudent);
                context.SaveChanges();
                var response = new { ok = true, msg = "Student Delete" };
                return response;
            }
            else
            {
                var response = new { ok = false, msg = "The student have subjects assigned" };
                return response;
            }
        }
        catch (Exception ex)
        {
            var response = new { ok = true, msg = ex.ToString() };
            return response;
        }
    }
}

public interface IStudentService
{
    IEnumerable<Student> Get();
    Task Save(Student student);
    Task<Object> Update(Guid id, Student student);
    Task<Object> Delete(Guid id);
}