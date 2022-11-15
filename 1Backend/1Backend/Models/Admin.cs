using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace ProjectApi.Models
{
    public partial class Admin
    {
        public string Admin_Id { get; set; }
        [Required(ErrorMessage = "{0} is required")]
        [StringLength(50, MinimumLength = 3,
     ErrorMessage = "First Name should be minimum 3 characters ")]
        [DataType(DataType.Text)]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "{0} is required")]
        [StringLength(50, MinimumLength = 3,
        ErrorMessage = "Last Name should be minimum 1 character")]
        [DataType(DataType.Text)]
        public string LastName { get; set; }


        [Range(1, 100, ErrorMessage = "Enter correct age")]
        public int? Age { get; set; }
        [StringLength(5, ErrorMessage = "Gender should be M/F/T")]
        public string Gender { get; set; }
        [Required]
        [DataType(DataType.EmailAddress)]
        [EmailAddress]
        public string Email { get; set; }
        [Key]
        [DataType(DataType.PhoneNumber)]
        [Phone]
        [Range(1, 10, ErrorMessage = "Phone number should be 10 digit")]
        public long? Phone { get; set; }
        [Required,MinLength(8) , MaxLength(15)]
        public string Passw { get; set; }
    }
}
