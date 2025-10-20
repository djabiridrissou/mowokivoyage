import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.json({ success: true, message });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({
          success: false,
          error: validationError.message,
        });
      }
      console.error("Error creating contact message:", error);
      res.status(500).json({
        success: false,
        error: "Une erreur est survenue lors de l'envoi du message",
      });
    }
  });

  app.get("/api/contact/messages", async (_req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.json({ success: true, messages });
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({
        success: false,
        error: "Erreur lors de la récupération des messages",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
