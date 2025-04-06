
import {
  Calendar,
  Users,
  Target,
  Award,
  MessageSquare,
  BarChart2,
  Clock,
  History,
} from "lucide-react";

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => {
  return (
    <div className="card-playbook hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="bg-playbook-secondary p-3 rounded-md">
          <Icon className="h-6 w-6 text-playbook-primary" />
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: Target,
      title: "Custom Workouts",
      description:
        "Design personalized workouts based on your position, skill level, and goals.",
    },
    {
      icon: Calendar,
      title: "Team Scheduling",
      description:
        "Organize practices, games, and team events with integrated calendar and notifications.",
    },
    {
      icon: Users,
      title: "Athlete Matchmaking",
      description:
        "Connect with other players for pickup games, practice sessions, or mentorship.",
    },
    {
      icon: BarChart2,
      title: "Performance Tracking",
      description:
        "Monitor your progress with detailed statistics and visual performance reports.",
    },
    {
      icon: MessageSquare,
      title: "Team Communication",
      description:
        "Chat with teammates, share resources, and stay connected on and off the court.",
    },
    {
      icon: Award,
      title: "Achievement System",
      description:
        "Earn badges and rewards as you complete workouts, improve skills, and reach milestones.",
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description:
        "Get instant notifications for team activities, matches, and training opportunities.",
    },
    {
      icon: History,
      title: "Progress History",
      description:
        "View your athletic journey with comprehensive history of workouts and achievements.",
    },
  ];

  return (
    <section className="py-16 bg-playbook-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Everything You Need to Excel</h2>
          <p className="text-muted-foreground">
            PlayBook combines training, team management, and social features to help you reach your athletic potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
