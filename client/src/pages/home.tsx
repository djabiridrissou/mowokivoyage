import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Compass, Users, Heart, Award, ArrowRight, MapPin } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/stock_images/african_savanna_suns_7cc89978.jpg";
import senegalImage from "@assets/stock_images/senegal_vibrant_mark_53f8044d.jpg";
import kenyaImage from "@assets/stock_images/kenya_wildlife_safar_e1ce2839.jpg";
import moroccoImage from "@assets/stock_images/morocco_blue_streets_1e1c1cf8.jpg";
import tanzaniaImage from "@assets/stock_images/tanzania_mount_kilim_3d72afe4.jpg";
import southAfricaImage from "@assets/stock_images/south_africa_cape_to_c17bda5e.jpg";
import madagascarImage from "@assets/stock_images/madagascar_baobab_av_8ccc1b4a.jpg";
import zanzibarImage from "@assets/stock_images/african_coastal_beac_03710a15.jpg";
import cultureImage from "@assets/stock_images/african_authentic_cu_9b4001bd.jpg";

const destinations = [
  {
    id: "senegal",
    name: "Sénégal",
    description: "Plongez dans la culture vibrante de Dakar et explorez les marchés colorés",
    image: senegalImage,
  },
  {
    id: "kenya",
    name: "Kenya",
    description: "Safaris inoubliables dans les réserves naturelles les plus spectaculaires",
    image: kenyaImage,
  },
  {
    id: "morocco",
    name: "Maroc",
    description: "Découvrez les médinas enchanteresses et les déserts majestueux",
    image: moroccoImage,
  },
  {
    id: "tanzania",
    name: "Tanzanie",
    description: "Grimpez le Kilimandjaro et explorez le cratère du Ngorongoro",
    image: tanzaniaImage,
  },
  {
    id: "south-africa",
    name: "Afrique du Sud",
    description: "De Cape Town aux vignobles, une diversité époustouflante",
    image: southAfricaImage,
  },
  {
    id: "madagascar",
    name: "Madagascar",
    description: "L'île unique aux baobabs majestueux et à la faune endémique",
    image: madagascarImage,
  },
  {
    id: "zanzibar",
    name: "Zanzibar",
    description: "Plages paradisiaques et histoire swahilie captivante",
    image: zanzibarImage,
  },
];

const services = [
  {
    icon: Compass,
    title: "Tours Personnalisés",
    description: "Des itinéraires sur-mesure adaptés à vos envies et votre rythme de voyage",
  },
  {
    icon: Users,
    title: "Guides Experts",
    description: "Des guides locaux passionnés qui partagent leur culture et leur connaissance",
  },
  {
    icon: Heart,
    title: "Expériences Authentiques",
    description: "Rencontres authentiques avec les communautés locales et leurs traditions",
  },
];

const testimonials = [
  {
    id: 1,
    quote: "Une expérience inoubliable au Sénégal ! L'équipe MOWOKI a su nous faire découvrir l'âme véritable du pays.",
    author: "Marie Dupont",
    destination: "Sénégal",
  },
  {
    id: 2,
    quote: "Safari extraordinaire au Kenya. Chaque moment était magique, merci à nos guides exceptionnels !",
    author: "Jean-Pierre Martin",
    destination: "Kenya",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight" data-testid="text-hero-title">
            MOWOKI
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-white/95 mb-4 font-light" data-testid="text-hero-subtitle">
            Votre Porte vers l'Afrique
          </p>
          <p className="text-lg sm:text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto" data-testid="text-hero-description">
            Découvrez l'Afrique Authentique avec nos Experts
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-primary/90 backdrop-blur-sm hover:bg-primary text-primary-foreground px-8 py-6 text-lg rounded-lg shadow-xl border border-primary-border"
              data-testid="button-hero-contact"
            >
              Commencez Votre Aventure
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3">
              <h2 className="font-serif text-4xl lg:text-5xl font-normal text-foreground mb-6 leading-tight" data-testid="text-welcome-title">
                Bienvenue chez MOWOKI
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6" data-testid="text-welcome-intro">
                <span className="font-semibold text-foreground">Home for Africa</span> n'est pas qu'un slogan – c'est notre promesse. Depuis notre création, nous nous consacrons à partager la beauté, la diversité et la richesse culturelle du continent africain avec le monde entier.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6" data-testid="text-welcome-description">
                Nos voyages sont conçus pour vous immerger dans l'authenticité africaine, loin des sentiers battus. Chaque itinéraire est une invitation à découvrir des paysages à couper le souffle, des traditions millénaires et des rencontres humaines inoubliables.
              </p>
              <Link href="/a-propos">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-lg"
                  data-testid="button-learn-more"
                >
                  En Savoir Plus
                </Button>
              </Link>
            </div>
            <div className="md:col-span-2">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img
                  src={cultureImage}
                  alt="Expérience culturelle africaine authentique"
                  className="w-full h-[400px] object-cover"
                  data-testid="img-culture"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-normal text-foreground mb-4" data-testid="text-destinations-title">
              Nos Destinations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-destinations-subtitle">
              Explorez les merveilles de l'Afrique à travers nos destinations soigneusement sélectionnées
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <Card
                key={destination.id}
                className="overflow-hidden group cursor-pointer hover-elevate active-elevate-2 transition-all duration-300"
                data-testid={`card-destination-${destination.id}`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    data-testid={`img-destination-${destination.id}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 text-white/90 mb-2">
                      <MapPin className="h-4 w-4" />
                      <h3 className="text-2xl font-serif font-semibold" data-testid={`text-destination-name-${destination.id}`}>
                        {destination.name}
                      </h3>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed" data-testid={`text-destination-desc-${destination.id}`}>
                      {destination.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-normal text-foreground mb-4" data-testid="text-services-title">
              Nos Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-services-subtitle">
              Une approche personnalisée pour des voyages exceptionnels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 text-center hover-elevate active-elevate-2 transition-all"
                data-testid={`card-service-${index}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-6">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3" data-testid={`text-service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`text-service-desc-${index}`}>
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-normal text-foreground mb-4" data-testid="text-testimonials-title">
              Témoignages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-testimonials-subtitle">
              Ce que disent nos voyageurs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="p-8 hover-elevate active-elevate-2 transition-all"
                data-testid={`card-testimonial-${testimonial.id}`}
              >
                <div className="mb-6">
                  <Award className="h-10 w-10 text-primary/60" />
                </div>
                <p className="text-lg text-foreground/90 leading-relaxed mb-6 italic" data-testid={`text-testimonial-quote-${testimonial.id}`}>
                  « {testimonial.quote} »
                </p>
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <div>
                    <p className="font-semibold text-foreground" data-testid={`text-testimonial-author-${testimonial.id}`}>
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground" data-testid={`text-testimonial-destination-${testimonial.id}`}>
                      {testimonial.destination}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative py-32 px-6 overflow-hidden"
        style={{
          backgroundImage: `url(${zanzibarImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-white mb-6 leading-tight" data-testid="text-cta-title">
            Commencez Votre Aventure Africaine
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed" data-testid="text-cta-subtitle">
            Contactez-nous dès aujourd'hui pour créer votre voyage sur-mesure
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg rounded-lg"
              data-testid="button-cta-contact"
            >
              Nous Contacter
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
