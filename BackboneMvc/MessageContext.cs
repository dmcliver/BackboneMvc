using System.Data.Entity;
using BackboneMvc.Models;
using Npgsql;

namespace BackboneMvc
{
    public class MessageContext : DbContext
    {
        public MessageContext() : base(new NpgsqlConnection("Server = 127.0.0.1; Port = 5432; User Id = postgres; Password = root; Database = MessageDb;"), true)
        {
            Database.SetInitializer<MessageContext>(null);
        }

        public DbSet<Message> Messages { get; set; }
    }
}