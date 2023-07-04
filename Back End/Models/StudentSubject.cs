using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Prueba_Abr_Back_End.Models;

public class StudentSubject
{
    public Guid StudentId { get; set; }
    public Guid SubjectId { get; set; }
    public int AcademicYear { get; set; }
    public decimal Grade { get; set; }
    [JsonIgnore]
    public virtual Student? Student { get; set; }
    public virtual Subject? Subject { get; set; }
}