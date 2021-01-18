using Microsoft.AspNetCore.Identity;

namespace Core.Entitis.Identity
{
    public class AppUser : IdentityUser
    {
        public string DisplayName { get; set; }
        public Address Address { get; set; }
    }
}