namespace Prueba_Abr_Back_End.Models;

public class StudentSubjects
{
    public Guid StudentId { get; set; }
    public Guid SubjectId { get; set; }
    public int AcademicYear { get; set; }
    public decimal Grade { get; set; }
    public virtual Student Student { get; set; }
    public virtual Subject Subject { get; set; }
}