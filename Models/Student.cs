namespace Prueba_Abr_Back_End.Models;

public class Student
{
    public Guid StudentId { get; set; }
    public string Identification { get; set; }
    public string Name { get; set; }
    public string LastName { get; set; }
    public int Age { get; set; }
    public string Address { get; set; }
    public int Phone { get; set; }
    public virtual ICollection<StudentSubjects> StudentSubjects { get; set; }
}