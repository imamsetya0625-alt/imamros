import { pgTable, text, integer, numeric, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const ordersTable = pgTable("orders", {
  id: text("id").primaryKey(),
  orderNumber: text("order_number").notNull().unique(),
  gameId: text("game_id").notNull(),
  gameName: text("game_name").notNull(),
  productId: text("product_id").notNull(),
  productName: text("product_name").notNull(),
  userId: text("user_id").notNull(),
  serverId: text("server_id"),
  email: text("email").notNull(),
  amount: integer("amount").notNull(),
  totalPrice: numeric("total_price", { precision: 12, scale: 2 }).notNull(),
  buyPrice: numeric("buy_price", { precision: 12, scale: 2 }).notNull(),
  status: text("status", { enum: ["pending", "processing", "success", "failed"] }).notNull().default("pending"),
  paymentMethod: text("payment_method"),
  paymentUrl: text("payment_url"),
  paymentReference: text("payment_reference"),
  supplierRef: text("supplier_ref"),
  notes: text("notes"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const insertOrderSchema = createInsertSchema(ordersTable).omit({
  createdAt: true,
  updatedAt: true,
});

export type InsertOrder = z.infer<typeof insertOrderSchema>;
export type Order = typeof ordersTable.$inferSelect;
