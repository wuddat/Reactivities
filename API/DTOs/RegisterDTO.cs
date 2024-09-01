using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDTO
    {
        [Required]
        public string DisplayName { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [RegularExpression("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{4,20}$", ErrorMessage = "Password must include at least 8 characters and a number, lowercase, and uppercase character")]
        public string Password { get; set; }

        [Required]
        public string Username { get; set; }
    }
}