using SSE_Project.Models;

namespace SSE_Project.Services
{
    public interface IAnimalService
    {
        IEnumerable<Animal> GetAnimals();
    }
}
