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
}

public interface IStudentService
{
    IEnumerable<Student> Get();
}