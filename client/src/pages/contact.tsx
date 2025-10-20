import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      nom: "",
      email: "",
      telephone: "",
      destination: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les 24 heures.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl lg:text-6xl font-light text-foreground mb-4" data-testid="text-contact-title">
              Contactez-Nous
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-contact-subtitle">
              Nous sommes là pour répondre à toutes vos questions et créer votre voyage sur-mesure
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <Card className="p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-6" data-testid="text-contact-info-title">
                  Informations de Contact
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1" data-testid="text-contact-email-label">Email</p>
                      <a
                        href="mailto:contact@mowoki.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        data-testid="link-contact-email"
                      >
                        contact@mowoki.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1" data-testid="text-contact-phone-label">Téléphone</p>
                      <a
                        href="tel:+221123456789"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        data-testid="link-contact-phone"
                      >
                        +221 12 345 67 89
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <SiWhatsapp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1" data-testid="text-contact-whatsapp-label">WhatsApp</p>
                      <a
                        href="https://wa.me/221123456789"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        data-testid="link-contact-whatsapp"
                      >
                        +221 12 345 67 89
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1" data-testid="text-contact-address-label">Adresse</p>
                      <p className="text-muted-foreground" data-testid="text-contact-address">
                        Dakar, Sénégal
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1" data-testid="text-contact-hours-label">Heures d'ouverture</p>
                      <p className="text-muted-foreground text-sm" data-testid="text-contact-hours-weekday">
                        Lundi - Vendredi : 9h00 - 18h00
                      </p>
                      <p className="text-muted-foreground text-sm" data-testid="text-contact-hours-saturday">
                        Samedi : 10h00 - 16h00
                      </p>
                      <p className="text-muted-foreground text-sm" data-testid="text-contact-hours-sunday">
                        Dimanche : Fermé
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-primary/5 border-primary/20">
                <h3 className="text-lg font-semibold text-foreground mb-3" data-testid="text-response-time-title">
                  Temps de Réponse
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-response-time-info">
                  Nous nous engageons à répondre à toutes les demandes dans un délai de <span className="font-semibold text-foreground">24 heures</span> maximum. Pour les urgences, n'hésitez pas à nous contacter par téléphone ou WhatsApp.
                </p>
              </Card>
            </div>

            <div className="lg:col-span-3">
              <Card className="p-8 lg:p-10">
                <h2 className="text-2xl font-semibold text-foreground mb-2" data-testid="text-form-title">
                  Envoyez-nous un Message
                </h2>
                <p className="text-muted-foreground mb-8" data-testid="text-form-subtitle">
                  Remplissez le formulaire ci-dessous et nous vous contacterons rapidement
                </p>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="nom"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom complet *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Votre nom"
                              {...field}
                              data-testid="input-nom"
                              className="rounded-lg"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="votre@email.com"
                                {...field}
                                data-testid="input-email"
                                className="rounded-lg"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="telephone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Téléphone</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="+221 XX XXX XX XX"
                                {...field}
                                data-testid="input-telephone"
                                className="rounded-lg"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="destination"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Destination d'intérêt *</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger data-testid="select-destination" className="rounded-lg">
                                <SelectValue placeholder="Sélectionnez une destination" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="senegal">Sénégal</SelectItem>
                              <SelectItem value="kenya">Kenya</SelectItem>
                              <SelectItem value="maroc">Maroc</SelectItem>
                              <SelectItem value="tanzanie">Tanzanie</SelectItem>
                              <SelectItem value="afrique-du-sud">Afrique du Sud</SelectItem>
                              <SelectItem value="madagascar">Madagascar</SelectItem>
                              <SelectItem value="zanzibar">Zanzibar</SelectItem>
                              <SelectItem value="autre">Autre / Plusieurs destinations</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Parlez-nous de votre projet de voyage, vos dates préférées, le nombre de voyageurs..."
                              className="min-h-[160px] resize-none rounded-lg"
                              {...field}
                              data-testid="input-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full rounded-lg"
                      disabled={contactMutation.isPending}
                      data-testid="button-submit"
                    >
                      {contactMutation.isPending ? (
                        "Envoi en cours..."
                      ) : (
                        <>
                          Envoyer Votre Demande
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
