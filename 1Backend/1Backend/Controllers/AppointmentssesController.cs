using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectApi.Models;

namespace ProjectApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentssesController : ControllerBase
    {
        private readonly ProjectContext _context;

        public AppointmentssesController(ProjectContext context)
        {
            _context = context;
        }

        // GET: api/Appointmentsses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Appointmentss>>> GetAppointmentss()
        {
            return await _context.Appointmentss.ToListAsync();
        }

        // GET: api/Appointmentsses/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Appointmentss>> GetAppointmentss(int id)
        {
            var appointmentss = await _context.Appointmentss.FindAsync(id);

            if (appointmentss == null)
            {
                return NotFound();
            }

            return appointmentss;
        }

        // PUT: api/Appointmentsses/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAppointmentss(int id, Appointmentss appointmentss)
        {
            if (id != appointmentss.AppId)
            {
                return BadRequest();
            }

            _context.Entry(appointmentss).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AppointmentssExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Appointmentsses
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Appointmentss>> PostAppointmentss(Appointmentss appointmentss)
        {
            _context.Appointmentss.Add(appointmentss);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAppointmentss", new { id = appointmentss.AppId }, appointmentss);
        }

        // DELETE: api/Appointmentsses/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Appointmentss>> DeleteAppointmentss(int id)
        {
            var appointmentss = await _context.Appointmentss.FindAsync(id);
            if (appointmentss == null)
            {
                return NotFound();
            }

            _context.Appointmentss.Remove(appointmentss);
            await _context.SaveChangesAsync();

            return appointmentss;
        }

        private bool AppointmentssExists(int id)
        {
            return _context.Appointmentss.Any(e => e.AppId == id);
        }
    }
}
