using Microsoft.EntityFrameworkCore;
using Prueba_Abr_Back_End.Models;

namespace Prueba_Abr_Back_End.Services;

public class SubjectService : ISubjectService
{
    SchoolContext context;

    public SubjectService(SchoolContext dbContext)
    {
        this.context = dbContext;
    }

    public IEnumerable<Subject> Get()
    {
        try
        {
            return context.Subjects;
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.ToString());
            return context.Subjects;
        }
    }

    public async Task<Object> Save(Subject subject)
    {
        try
        {
            context.Subjects.Add(subject);
            context.SaveChanges();
            var response = new { ok = true, msg = "Subject Create" };
            return response;
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.ToString());
            var response = new { ok = false, msg = "Error Invoke" };
            return response;
        }
    }
}

public interface ISubjectService
{
    IEnumerable<Subject> Get();
    Task<Object> Save(Subject subject);
}