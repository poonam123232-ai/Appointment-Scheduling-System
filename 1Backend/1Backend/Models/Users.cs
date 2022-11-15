using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace ProjectApi.Models
{
    public partial class Users
    {
        public Users()
        {
            Appointmentss = new HashSet<Appointmentss>();
        }

        public int UserId { get; set; }
        public string FirstName { get; set; }
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
      
        public long? Phone { get; set; }
        public string Passw { get; set; }

        public virtual ICollection<Appointmentss> Appointmentss { get; set; }
    }
}
