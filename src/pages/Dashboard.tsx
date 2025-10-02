import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Pill, 
  Activity, 
  Brain, 
  Dumbbell, 
  Ambulance, 
  DollarSign,
  ArrowRight,
  Shield,
  BookOpen
} from "lucide-react";

const modules = [
  {
    id: "healthjournal",
    title: "Health Journal",
    description: "Track daily health with AI pattern detection",
    icon: BookOpen,
    path: "/health-journal",
    gradient: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20"
  },
  {
    id: "medguard",
    title: "MedGuard",
    description: "Search medicines, check interactions, find alternatives",
    icon: Pill,
    path: "/chatbot?module=medguard",
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20"
  },
  {
    id: "predictguard",
    title: "PredictGuard",
    description: "AI symptom checker and health insights",
    icon: Activity,
    path: "/chatbot?module=predictguard",
    gradient: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20"
  },
  {
    id: "mindguard",
    title: "MindGuard",
    description: "Mental health check and wellness resources",
    icon: Brain,
    path: "/chatbot?module=mindguard",
    gradient: "from-teal-500 to-emerald-500",
    bgColor: "bg-teal-50 dark:bg-teal-950/20"
  },
  {
    id: "fitguard",
    title: "FitGuard",
    description: "BMI calculator and personalized fitness plans",
    icon: Dumbbell,
    path: "/chatbot?module=fitguard",
    gradient: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20"
  },
  {
    id: "rescueguard",
    title: "RescueGuard",
    description: "Emergency services and nearby hospitals",
    icon: Ambulance,
    path: "/chatbot?module=rescueguard",
    gradient: "from-red-500 to-rose-500",
    bgColor: "bg-red-50 dark:bg-red-950/20"
  },
  {
    id: "fundguard",
    title: "FundGuard",
    description: "Financial support and insurance information",
    icon: DollarSign,
    path: "/chatbot?module=fundguard",
    gradient: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-950/20"
  }
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              <Shield className="h-4 w-4" />
              <span>Your Trusted Health Companion</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Welcome to BioGuard.AI
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Your all-in-one platform for health information, symptom checking, mental wellness, fitness guidance, and emergency support.
            </p>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Explore Our Health Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <Link 
                  key={module.id} 
                  to={module.path}
                  style={{ animationDelay: `${index * 100}ms` }}
                  className="animate-scale-in"
                >
                  <Card className="group relative overflow-hidden h-full hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/50">
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${module.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    <div className="p-6 relative z-10">
                      {/* Icon */}
                      <div className={`${module.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`h-7 w-7 bg-gradient-to-br ${module.gradient} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent' }} />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {module.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {module.description}
                      </p>
                      
                      {/* Arrow */}
                      <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 gap-1 transition-all">
                        <span>Explore</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="container mx-auto px-4 py-12 mb-12">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border-primary/20">
            <div className="p-8 text-center space-y-4">
              <Shield className="h-12 w-12 mx-auto text-primary" />
              <h3 className="text-2xl font-bold">Your Health, Our Priority</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                BioGuard.AI is designed to provide trusted health information and guidance. Always consult healthcare professionals for medical decisions. In emergencies, call your local emergency services immediately.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
