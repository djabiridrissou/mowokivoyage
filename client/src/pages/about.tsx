import { Card } from "@/components/ui/card";
import { Globe, Heart, Shield, Sparkles } from "lucide-react";
import teamImage from "@assets/stock_images/african_travel_guide_cebd5e5d.jpg";

const values = [
  {
    icon: Globe,
    title: "Authenticité",
    description: "Nous privilégions les expériences authentiques et les rencontres véritables avec les cultures locales",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Notre amour pour l'Afrique transparaît dans chaque voyage que nous organisons",
  },
  {
    icon: Shield,
    title: "Durabilité",
    description: "Nous nous engageons pour un tourisme responsable qui respecte l'environnement et les communautés",
  },
  {
    icon: Sparkles,
    title: "Excellence",
    description: "Chaque détail compte pour créer des souvenirs mémorables et des expériences exceptionnelles",
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <section
        className="relative h-[50vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${teamImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-5xl sm:text-6xl font-light text-white mb-4" data-testid="text-about-hero-title">
            Notre Histoire
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto" data-testid="text-about-hero-subtitle">
            Une passion pour l'Afrique transmise à chaque voyageur
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-serif text-4xl font-normal text-foreground mb-6" data-testid="text-about-story-title">
              MOWOKI - Home for Africa
            </h2>
            <p className="text-lg text-foreground leading-relaxed mb-6" data-testid="text-about-story-p1">
              MOWOKI est née d'un rêve simple mais profond : partager la beauté et la diversité de l'Afrique avec le monde entier. Notre nom même, qui signifie "Home for Africa", reflète notre engagement à être votre porte d'entrée vers ce continent extraordinaire.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6" data-testid="text-about-story-p2">
              Fondée par des passionnés de voyage ayant grandi en Afrique, notre agence combine une connaissance intime du continent avec une expertise professionnelle du tourisme. Nous ne sommes pas simplement des organisateurs de voyages – nous sommes des conteurs d'histoires, des créateurs d'expériences, et des ambassadeurs de la richesse culturelle africaine.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-8" data-testid="text-about-story-p3">
              Chaque membre de notre équipe partage la même vision : créer des voyages qui vont au-delà du tourisme traditionnel. Nous croyons aux rencontres authentiques, aux découvertes hors des sentiers battus, et au respect profond des cultures et des environnements que nous vous invitons à explorer.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-normal text-foreground mb-4" data-testid="text-mission-title">
              Notre Mission
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-mission-subtitle">
              Créer des ponts entre les cultures et révéler la magie de l'Afrique
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 lg:p-12">
              <p className="text-xl text-foreground leading-relaxed text-center mb-8" data-testid="text-mission-statement">
                Notre mission est de vous faire découvrir l'Afrique dans toute sa splendeur – de ses paysages époustouflants à ses traditions millénaires, de sa faune extraordinaire à la chaleur de son hospitalité.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed text-center" data-testid="text-mission-commitment">
                Nous nous engageons à créer des expériences de voyage qui enrichissent non seulement nos voyageurs, mais aussi les communautés locales que nous visitons. Chaque voyage est une opportunité de créer des liens authentiques et de contribuer positivement au développement durable du tourisme en Afrique.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-normal text-foreground mb-4" data-testid="text-values-title">
              Nos Valeurs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-values-subtitle">
              Les principes qui guident chacune de nos actions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-8 text-center hover-elevate active-elevate-2 transition-all"
                data-testid={`card-value-${index}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-6">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3" data-testid={`text-value-title-${index}`}>
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm" data-testid={`text-value-desc-${index}`}>
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl lg:text-5xl font-normal text-foreground mb-6" data-testid="text-team-title">
            Notre Équipe
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12" data-testid="text-team-intro">
            MOWOKI, c'est avant tout une équipe de passionnés dévoués à créer des expériences de voyage exceptionnelles. Nos guides locaux, experts en tourisme et spécialistes régionaux travaillent ensemble pour vous offrir le meilleur de l'Afrique.
          </p>
          <div className="relative rounded-xl overflow-hidden shadow-xl mb-8">
            <img
              src={teamImage}
              alt="L'équipe MOWOKI"
              className="w-full h-[400px] object-cover"
              data-testid="img-team"
            />
          </div>
          <p className="text-lg text-foreground leading-relaxed" data-testid="text-team-description">
            Chaque membre de notre équipe apporte son expertise unique, sa connaissance approfondie du terrain et sa passion contagieuse pour le continent africain. Ensemble, nous formons une famille unie par le même objectif : faire de votre voyage une expérience inoubliable.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl lg:text-5xl font-normal text-foreground mb-6" data-testid="text-why-title">
            Pourquoi Choisir MOWOKI ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-5xl font-serif font-bold text-primary mb-2" data-testid="text-stat-years">10+</div>
              <p className="text-muted-foreground" data-testid="text-stat-years-label">Années d'Expérience</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-serif font-bold text-primary mb-2" data-testid="text-stat-countries">7</div>
              <p className="text-muted-foreground" data-testid="text-stat-countries-label">Pays Couverts</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-serif font-bold text-primary mb-2" data-testid="text-stat-travelers">500+</div>
              <p className="text-muted-foreground" data-testid="text-stat-travelers-label">Voyageurs Satisfaits</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
