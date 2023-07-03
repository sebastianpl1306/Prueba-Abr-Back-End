using System.Text.Json.Serialization;
using System.Threading;

namespace Prueba_Abr_Back_End.Models;

public class Teacher
{
    public Teacher()
    {
        this.Subjects = new List<Subject>();
    }

    public Guid TeacherId {get;set;}
    public string Identification {get;set;}
    public string Name {get;set;}
    public string LastName { get;set;}
    public int Age { get;set;}
    public string Address { get;set;}
    public string Phone { get;set;}
    public virtual ICollection<Subject> Subjects { get; set; }
}