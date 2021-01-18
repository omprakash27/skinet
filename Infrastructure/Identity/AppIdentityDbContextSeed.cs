using System.Linq;
using System.Threading.Tasks;
using Core.Entitis.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUserAsync(UserManager<AppUser> userManager)
        {
            if(!userManager.Users.Any())
            {
                var user = new AppUser{
                    DisplayName ="Bob",
                    Email="bob@test.com",
                    UserName="bob@test.com",
                    Address = new Address{
                        FirstName ="Bob",
                        LastName ="bobbity",
                        Street="10 Th Street",
                        City="New York",
                        State="NY",
                        Zipcode="123456",
                        Country="USA"
                    }
                };
                await userManager.CreateAsync(user,"Pa$$w0rd");
            }
        }
    }
}