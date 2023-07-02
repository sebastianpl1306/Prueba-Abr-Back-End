using Microsoft.EntityFrameworkCore;
using Prueba_Abr_Back_End.Models;

namespace Prueba_Abr_Back_End;

public class SchoolContext: DbContext
{
    public DbSet<Teacher> Teachers { get; set; }
    public DbSet<Student> Students { get; set; }
    public DbSet<Subject> Subjects { get; set; }
    public DbSet<StudentSubject> StudentSubjects { get; set; }
    //public DbSet<TeacherSubjects> TeacherSubjects { get; set; }

    public SchoolContext(DbContextOptions<SchoolContext> options) : base(options) { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        List<Teacher> teachersInit = new List<Teacher>();
        modelBuilder.Entity<Teacher>(teacher => {
            teacher.ToTable("Teacher");
            teacher.HasKey(p => p.TeacherId);
            teacher.Property(p => p.Identification).IsRequired();
            teacher.Property(p => p.Name).IsRequired();
            teacher.Property(p => p.LastName).IsRequired();
            teacher.Property(p => p.Age).IsRequired();
            teacher.Property(p => p.Address).IsRequired();
            teacher.Property(p => p.Phone).IsRequired();
        });

        List<Student> studentInit = new List<Student>();
        modelBuilder.Entity<Student>(student =>
        {
            student.ToTable("Student");
            student.HasKey(p => p.StudentId);
            //student.HasMany(p => p.Subjects).WithMany(p => p.Students);
        });

        List<Subject> subjectInit = new List<Subject>();
        modelBuilder.Entity<Subject>(subject =>
        {
            subject.ToTable("Subject");
            subject.HasKey(p => p.SubjectId);
        });

        List<StudentSubject> studentSubjectsInit = new List<StudentSubject>();
        modelBuilder.Entity<StudentSubject>(studentSubjects =>
        {
            studentSubjects.ToTable("StudentSubject");
            studentSubjects.HasKey(p => new { p.StudentId, p.SubjectId, p.AcademicYear });
            //studentSubjects.HasOne(p => p.Subject).WithMany().HasForeignKey(p => p.SubjectId);
            //studentSubjects.HasOne(p => p.Student).WithMany().HasForeignKey(p => p.StudentId);
        });

        /*List<TeacherSubjects> teacherSubjectsInit = new List<TeacherSubjects>();
        modelBuilder.Entity<TeacherSubjects>(teachersSubjects =>
        {
            teachersSubjects.ToTable("TeacherSubjects");
            teachersSubjects.HasKey(p => new { p.TeacherId, p.SubjectId });
            teachersSubjects.HasOne(p => p.Teacher).WithMany().HasForeignKey(p => p.TeacherId);
            teachersSubjects.HasOne(p => p.Subject).WithMany().HasForeignKey(p => p.SubjectId);
        });*/
    }
}

