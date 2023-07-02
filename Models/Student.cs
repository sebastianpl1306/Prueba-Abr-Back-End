using System.ComponentModel.DataAnnotations;

namespace Prueba_Abr_Back_End.Models;

public class Student
{
    public Student()
    {
        this.Subjects = new List<StudentSubject>();
    }

    public Guid StudentId { get; set; }
    public string Identification { get; set; }
    public string Name { get; set; }
    public string LastName { get; set; }
    public int Age { get; set; }
    public string Address { get; set; }
    public string Phone { get; set; }
    public virtual ICollection<StudentSubject> Subjects { get; set; }
}