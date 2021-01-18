using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Core.Entitis.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions
{
    public static class UserManagerExtensions
    {
        public async static Task<AppUser> FindByUserClaimsPrincipalWithAddressAsync(this UserManager<AppUser> input
        , ClaimsPrincipal user)
        {
            var email = user?.Claims?.FirstOrDefault(a => a.Type == ClaimTypes.Email)?.Value;

            return await input.Users.Include(a => a.Address).SingleOrDefaultAsync(b => b.Email == email);

        }

        public async static Task<AppUser> FindByEmailFromClaimsPrincipalAsync(this UserManager<AppUser> input
        , ClaimsPrincipal user)
        {
            var email = user?.Claims?.FirstOrDefault(a => a.Type == ClaimTypes.Email)?.Value;

            return await input.Users.SingleOrDefaultAsync(b => b.Email == email);

        }
    }
}