
import { Trophy, Dumbbell, Activity, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SportCard = ({ 
  title, 
  description, 
  icon: Icon, 
  imageUrl, 
  reverse = false 
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType; 
  imageUrl: string; 
  reverse?: boolean; 
}) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow`}>
      <div className="w-full md:w-1/2 relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-64 md:h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-playbook-secondary p-3 rounded-full">
            <Icon className="h-6 w-6 text-playbook-primary" />
          </div>
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
        <p className="text-muted-foreground mb-6">
          {description}
        </p>
        <Button asChild className="w-fit bg-playbook-primary hover:bg-playbook-accent">
          <Link to="/signup">Join Now</Link>
        </Button>
      </div>
    </div>
  );
};

const Sports = () => {
  return (
    <section className="py-16 bg-playbook-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Built for Your Sport</h2>
          <p className="text-muted-foreground">
            Whether you're on the court or on the field, PlayBook is designed to enhance your training and team experience.
          </p>
        </div>

        <div className="space-y-8">
          <SportCard 
            title="Basketball" 
            description="Improve your shooting, dribbling, and court awareness with position-specific drills and analytics. Connect with teammates, track game stats, and find pickup games in your area."
            icon={Trophy}
            imageUrl="https://images.unsplash.com/photo-1546519638-68e109acd27d?q=80&w=2680&auto=format&fit=crop"
          />
          
          <SportCard 
            title="Volleyball" 
            description="Master your serves, blocks, and spikes with specialized training programs. Coordinate team practices, analyze match performance, and connect with other players for extra practice sessions."
            icon={Activity}
            imageUrl="https://images.unsplash.com/photo-1592656094267-764a45160876?q=80&w=2670&auto=format&fit=crop"
            reverse
          />

          <SportCard 
            title="Personal Training" 
            description="Get customized workout plans, track your progress, and receive personalized feedback from coaches. Elevate your game with strength and conditioning routines designed for your sport."
            icon={Dumbbell}
            imageUrl="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop"
          />

          <SportCard 
            title="Team Management" 
            description="Organize your team roster, schedule practices, share playbooks, and communicate effortlessly. Manage your team's development with integrated tools for coaches and players."
            icon={User}
            imageUrl="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2029&auto=format&fit=crop"
            reverse
          />
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="border-playbook-primary text-playbook-primary hover:bg-playbook-primary hover:text-white">
            <Link to="/sports">Explore All Sports</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Sports;
