using System.Linq;
using System.Web.Mvc;
using BackboneMvc.Models;

namespace BackboneMvc.Controllers
{
    public class MessageController : Controller
    {
        private readonly MessageContext _context;

        public MessageController()
        {
            _context = new MessageContext();
        }

        [HttpGet]
        public JsonResult Messages()
        {
            return Json(_context.Messages.ToList(), JsonRequestBehavior.AllowGet);
        }

        [HttpPut]
        public JsonResult Messages(Message message)
        {
            _context.Messages.Add(message);
            _context.SaveChanges();
            return Json("success", JsonRequestBehavior.AllowGet);
        }

        [HttpDelete]
        public JsonResult Messages(int id)
        {
            Message message = _context.Messages.Single(m => m.id == id);
            _context.Messages.Remove(message);
            _context.SaveChanges();
            return Json("success", JsonRequestBehavior.AllowGet);
        }
    }
}
