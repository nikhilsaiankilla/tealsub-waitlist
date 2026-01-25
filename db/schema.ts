import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

// waitlist emails table
export const waitlistEmails = pgTable('waitlist_emails', {
    id: uuid('id').defaultRandom().primaryKey(),
    email: varchar('email', { length: 255 }).notNull().unique(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
})

export type WaitlistEmails = typeof waitlistEmails.$inferSelect;
export type NewWaitlistEmails = typeof waitlistEmails.$inferInsert;