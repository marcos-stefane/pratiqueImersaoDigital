using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

// Classe para representar um usuário
public class User
{
    public string Name { get; set; }
    public string Email { get; set; }
    public int Age { get; set; }
}

// Classe para representar um evento
public class Event
{
    public string Name { get; set; }
    public string Address { get; set; }
    public string Category { get; set; }
    public DateTime Time { get; set; }
    public string Description { get; set; }
}

// Classe para gerenciar eventos
public class EventManager
{
    private List<Event> events = new List<Event>();

    public void AddEvent(Event e)
    {
        events.Add(e);
    }

    public List<Event> GetEvents()
    {
        return events;
    }

    // Outros métodos para manipulação de eventos
}

// Classe para gerenciar usuários
public class UserManager
{
    // Implementação do gerenciamento de usuários
}

// Classe principal
class Program
{
    static void Main(string[] args)
    {
        // Carregar eventos do arquivo events.data
        List<Event> events = LoadEventsFromFile("events.data");

        // Exemplo de uso
        Console.WriteLine("Lista de eventos:");
        foreach (var e in events)
        {
            Console.WriteLine($"{e.Name} - {e.Time}");
        }
    }

    static List<Event> LoadEventsFromFile(string fileName)
    {
        List<Event> events = new List<Event>();
        try
        {
            using (StreamReader sr = new StreamReader(fileName))
            {
                string line;
                while ((line = sr.ReadLine()) != null)
                {
                    string[] data = line.Split('|');
                    Event e = new Event
                    {
                        Name = data[0],
                        Address = data[1],
                        Category = data[2],
                        Time = DateTime.Parse(data[3]),
                        Description = data[4]
                    };
                    events.Add(e);
                }
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Erro ao carregar eventos do arquivo: {ex.Message}");
        }
        return events;
    }

    // Outros métodos auxiliares para manipulação de eventos e usuários
}
