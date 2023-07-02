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
        return context.Students.Include(p => p.Subjects).ThenInclude(ss => ss.Subject);
    }

    public async Task Save(Student student)
    {
        context.Students.Add(student);
        await context.SaveChangesAsync();
    }

    public async Task Update(Guid id, Student student)
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

            await context.SaveChangesAsync();
        }
    }

    public async Task Delete(Guid id)
    {
        var currentStudent = context.Students.Find(id);
        if (currentStudent != null)
        {
            context.Remove(currentStudent);
            await context.SaveChangesAsync();
        }
    }
}

public interface IStudentService
{
    IEnumerable<Student> Get();
    Task Save(Student student);
    Task Update(Guid id, Student student);
    Task Delete(Guid id);
}