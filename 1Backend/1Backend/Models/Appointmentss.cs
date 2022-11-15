using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace ProjectApi.Models
{
    public partial class Appointmentss
    {
        public int? UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int? Age { get; set; }
        public string Gender { get; set; }
        public string Email { get; set; }
        public long? Phone { get; set; }
        public int AppId { get; set; }
        public string ScheduleDate { get; set; }
        public string Reason { get; set; }
        public string Status { get; set; }
        public string RescheduleDate { get; set; }

        public virtual Users User { get; set; }
    }
}
