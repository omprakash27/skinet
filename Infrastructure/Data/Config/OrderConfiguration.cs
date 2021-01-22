using System;
using Core.Entitis.OrderAggregate;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Config
{
    public class OrderConfiguration : IEntityTypeConfiguration<Order>
    {
        public void Configure(EntityTypeBuilder<Order> builder)
        {
            builder.OwnsOne(o => o.ShipToAddress,
            a => { a.WithOwner(); });

            builder.Property(s => s.Status)
            .HasConversion(
                o => 0.ToString(),
                o => (OrderStatus) Enum.Parse(typeof(OrderStatus), o)
            );

            builder.HasMany(o => o.OrderItems).WithOne().OnDelete(DeleteBehavior.Cascade);
        }
    }
}