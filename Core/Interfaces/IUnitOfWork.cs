using System;
using System.Threading.Tasks;
using Core.Entitis;

namespace Core.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
          IGenericRepository<TEntity> Repository<TEntity>() where TEntity: BaseEntities;
          Task<int> Complete();
    }
}