namespace Prueba_Abr_Back_End.Models;

public class Teacher
{
    public Guid TeacherId {get;set;}
    public string Identification {get;set;}
    public string Name {get;set;}
    public string LastName { get;set;}
    public int Age { get;set;}
    public string Address { get;set;}
    public string Phone { get;set;}
}