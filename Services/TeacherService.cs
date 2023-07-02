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
        return context.Teachers;
    }

    public async Task Save(Teacher teacher)
    {
        context.Add(teacher);
        await context.SaveChangesAsync();
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

            await context.SaveChangesAsync();
        }
    }

    public async Task Delete(Guid id)
    {
        var currentTeacher = context.Teachers.Find(id);
        if (currentTeacher != null)
        {
            context.Remove(currentTeacher);
            await context.SaveChangesAsync();
        }
    }
}

public interface ITeacherService
{
    IEnumerable<Teacher> Get();
    Task Save(Teacher teacher);
    Task Update(Guid id, Teacher teacher);
    Task Delete(Guid id);
}