using Microsoft.AspNetCore.Http.HttpResults;
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
            return context.Students;
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.ToString());
            return context.Students;
        }
    }

    public async Task<Object> GetOne(Guid studentId)
    {
        try
        {
            var student = context.Students.Include(p => p.Subjects).ThenInclude(p => p.Subject).FirstOrDefault(p => p.StudentId == studentId);
            if(student == null)
            {
                return new { ok = false, msg = "Student Not Found" };
            }
            return new { ok = true, student };
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.ToString());
            var response = new { ok = false, msg = "Error Invoke" };
            return response;
        }
    }

    public async Task<Object> Save(Student student)
    {
        try
        {
            context.Students.Add(student);
            context.SaveChanges();
            var response = new { ok = true, student };
            return response;
        }
        catch(Exception ex)
        {
            Console.WriteLine(ex.ToString());
            var response = new { ok = false, msg = "Error Invoke" };
            return response;
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
    Task<Object> GetOne(Guid studentId);
    Task<Object> Save(Student student);
    Task<Object> Update(Guid id, Student student);
    Task<Object> Delete(Guid id);
}