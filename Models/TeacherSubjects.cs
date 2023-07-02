namespace Prueba_Abr_Back_End.Models;

public class TeacherSubjects
{
    public Guid TeacherId { get; set; }
    public Guid SubjectId { get; set; }
    public virtual Teacher Teacher { get; set; }
    public virtual Subject Subject { get; set; }
}