import { z } from "zod";

// Contact Message Schema
export const insertContactMessageSchema = z.object({
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  telephone: z.string().optional(),
  destination: z.string().min(1, "Veuillez sélectionner une destination"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;

export interface ContactMessage extends InsertContactMessage {
  id: string;
  createdAt: Date;
}
