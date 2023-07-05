using Microsoft.EntityFrameworkCore;

namespace Prueba_Abr_Back_End.Services;

public class ReportService : IReportService
{
    SchoolContext context;

    public ReportService(SchoolContext dbContext)
    {
        this.context = dbContext;
    }

    public async Task<Object> Get()
    {
        try
        {
            var report = context.StudentSubjects
                .Include(ss => ss.Subject)
                .Include(ss => ss.Subject.Teacher)
                .Select(ss => new
                {
                    AcademicYear = ss.AcademicYear,
                    StudentIdentification = ss.Student.Identification,
                    StudentName = $"{ss.Student.Name} {ss.Student.LastName}",
                    CodeSubject = ss.Subject.SubjectId,
                    SubjectName = ss.Subject.Name,
                    TeacherIdentification = ss.Subject.Teacher.Identification,
                    TeacherName = ss.Subject.Teacher.Name,
                    Grade = ss.Grade,
                    Passed = (ss.Grade >= 3 ? true : false),
                });
            return new { ok = true, report };
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.ToString());
            return new { ok = true, msg = "Error Invoke" };
        }
    }
}

public interface IReportService
{
    Task<Object> Get();
}