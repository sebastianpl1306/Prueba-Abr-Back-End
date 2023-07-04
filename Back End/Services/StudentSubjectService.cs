using Microsoft.AspNetCore.Http.HttpResults;
using Prueba_Abr_Back_End.Models;

namespace Prueba_Abr_Back_End.Services;

public class StudentSubjectService : IStudentSubjectService
{
    SchoolContext context;

    public StudentSubjectService(SchoolContext dbContext)
    {
        this.context = dbContext;
    }

    public async Task<Object> Assign(StudentSubject studentSubject)
    {
        try
        {
            var student = context.Students.Find(studentSubject.StudentId);

            if (student == null)
            {
                return new { ok = true, msg = "Student Not Found" };
            }

            var subject = context.Subjects.Find(studentSubject.SubjectId);

            if (subject == null)
            {
                return new { ok = true, msg = "Subject Not Found" };
            }

            var subjectAssign = context.StudentSubjects
                .FirstOrDefault(
                    p => p.StudentId == studentSubject.StudentId &&
                    p.SubjectId == studentSubject.SubjectId &&
                    p.AcademicYear == studentSubject.AcademicYear
                );

            if (subjectAssign != null)
            {
                return new { ok = true, msg = "A student cannot be assigned the same subject more than once in the same academic year." };
            }

            context.StudentSubjects.Add(studentSubject);
            context.SaveChanges();
            return new { ok = true, msg = "Subject Assign"};
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.ToString());
            return new { ok = false, msg = "Error Invoke" };
        }
    }
}

public interface IStudentSubjectService
{
    Task<Object> Assign(StudentSubject studentSubject);
}