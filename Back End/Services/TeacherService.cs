using Microsoft.EntityFrameworkCore;
using Prueba_Abr_Back_End.Models;

namespace Prueba_Abr_Back_End.Services;

public class TeacherService: ITeacherService
{
    SchoolContext context;

    public TeacherService(SchoolContext dbContext)
    {
        this.context = dbContext;
    }

    public IEnumerable<Teacher> Get()
    {
        return context.Teachers.Include(p => p.Subjects);
    }

    public async Task<Object> Save(Teacher teacher)
    {
        try
        {
            context.Add(teacher);
            context.SaveChanges();
            return new { ok = true, teacher };
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.ToString());
            return new { ok = false, msg = "Error Invoke" };
        }
    }

    public async Task Update(Guid id, Teacher teacher)
    {
        var currentTeacher = context.Teachers.Find(id);
        if(currentTeacher != null) {
            currentTeacher.Identification = teacher.Identification;
            currentTeacher.Address = teacher.Address;
            currentTeacher.Phone = teacher.Phone;
            currentTeacher.Name = teacher.Name;
            currentTeacher.LastName = teacher.LastName;
            currentTeacher.Age = teacher.Age;

            context.SaveChanges();
        }
    }

    public async Task Delete(Guid id)
    {
        var currentTeacher = context.Teachers.Find(id);
        if (currentTeacher != null)
        {
            context.Remove(currentTeacher);
            context.SaveChanges();
        }
    }
}

public interface ITeacherService
{
    IEnumerable<Teacher> Get();
    Task<Object> Save(Teacher teacher);
    Task Update(Guid id, Teacher teacher);
    Task Delete(Guid id);
}