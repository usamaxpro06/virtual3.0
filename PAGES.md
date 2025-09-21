# PAGE COMPONENTS

## **src/pages/Homepage.tsx**
```typescript
import { ArrowRight, Shield, Zap, Globe, Star, Users, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SearchBar from "@/components/SearchBar";
import heroImage from "@/assets/hero-bg.jpg";

const Homepage = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with encrypted connections and data protection protocols."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Quick response times and efficient service delivery to get your work done faster."
    },
    {
      icon: Globe,
      title: "Available 24/7",
      description: "Round-the-clock support and services available whenever you need assistance."
    }
  ];

  const stats = [
    { label: "Satisfied Clients", value: "10,000+", icon: Users },
    { label: "Success Rate", value: "99.9%", icon: CheckCircle },
    { label: "Average Response", value: "< 5 min", icon: Clock },
    { label: "Client Rating", value: "4.9/5", icon: Star }
  ];

  const services = [
    "Windows Activation & Licensing",
    "Software Installation & Configuration", 
    "Data Entry & Processing",
    "Technical Support & Troubleshooting",
    "System Optimization & Maintenance",
    "Remote Desktop Assistance"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(99, 102, 241, 0.9), rgba(168, 85, 247, 0.8)), url(${heroImage})`
          }}
        />
        <div className="relative container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
            Professional Virtual Computer Services
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Expert Remote
            <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Computer Solutions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Professional Windows activation, software installation, data entry, and technical support. 
            Fast, secure, and reliable remote computer services worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg px-8 py-4 text-lg font-medium">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg">
              View Services
            </Button>
          </div>

          <div className="mb-16">
            <SearchBar placeholder="Search for computer services..." />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    <IconComponent className="h-8 w-8 text-white mx-auto mb-3" />
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-blue-200 text-sm">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose VirtualTech Pro?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience professional-grade virtual computer services with unmatched reliability and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="border-border hover:shadow-card-hover transition-all duration-300 bg-card/50 backdrop-blur-sm">
                  <CardHeader className="text-center pb-4">
                    <div className="bg-gradient-primary rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-button">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Comprehensive Computer Services
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From Windows activation to technical support, we provide complete virtual computer solutions 
                tailored to your specific needs.
              </p>
              
              <div className="grid gap-4 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-primary hover:opacity-90 shadow-button">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-border hover:bg-accent">
                  Get Quote
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-primary rounded-3xl p-8 shadow-card-hover">
                <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
                  <p className="text-blue-100 mb-6">
                    Join thousands of satisfied customers who trust us with their computer needs.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-white">
                      <CheckCircle className="h-5 w-5" />
                      <span>Instant service activation</span>
                    </div>
                    <div className="flex items-center space-x-3 text-white">
                      <CheckCircle className="h-5 w-5" />
                      <span>Professional support team</span>
                    </div>
                    <div className="flex items-center space-x-3 text-white">
                      <CheckCircle className="h-5 w-5" />
                      <span>100% satisfaction guarantee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Your Project Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get professional virtual computer services from certified experts. 
            Fast turnaround, competitive pricing, guaranteed results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg px-8 py-4">
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4">
              Call Us Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
```

## **src/pages/Services.tsx**
```typescript
import { Computer, Shield, Zap, Settings, Database, Users, ArrowRight, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const services = [
    {
      icon: Computer,
      title: "Windows Activation",
      description: "Professional Windows activation services for all versions including Windows 10, 11, and Server editions.",
      features: ["Genuine activation keys", "All Windows versions", "Instant activation", "Lifetime support"],
      price: "Starting at $15",
      popular: true
    },
    {
      icon: Settings,
      title: "Software Installation",
      description: "Complete software installation and configuration services for productivity, security, and specialized applications.",
      features: ["Any software type", "Custom configuration", "License management", "Post-install support"],
      price: "Starting at $10",
      popular: false
    },
    {
      icon: Database,
      title: "Data Entry Services",
      description: "Professional data entry, processing, and management services with accuracy guarantee.",
      features: ["99.9% accuracy", "Fast turnaround", "Secure handling", "Multiple formats"],
      price: "Starting at $5/hour",
      popular: false
    },
    {
      icon: Shield,
      title: "Technical Support",
      description: "Comprehensive technical support for troubleshooting, maintenance, and system optimization.",
      features: ["24/7 availability", "Remote assistance", "Expert technicians", "Follow-up support"],
      price: "Starting at $20",
      popular: false
    },
    {
      icon: Zap,
      title: "System Optimization",
      description: "Complete system cleanup, optimization, and performance enhancement services.",
      features: ["Speed optimization", "Malware removal", "Registry cleanup", "Startup optimization"],
      price: "Starting at $25",
      popular: false
    },
    {
      icon: Users,
      title: "Business Solutions",
      description: "Tailored IT solutions for businesses including setup, maintenance, and ongoing support.",
      features: ["Multi-user setup", "Network configuration", "Security implementation", "Ongoing maintenance"],
      price: "Custom pricing",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional Computer Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive virtual computer services delivered by certified professionals. 
            Fast, secure, and reliable solutions for all your technical needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className={`relative border-border hover:shadow-card-hover transition-all duration-300 ${service.popular ? 'ring-2 ring-primary' : ''}`}>
                  {service.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader>
                    <div className="bg-gradient-primary rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{service.price}</span>
                      <Button 
                        className={service.popular ? "bg-gradient-primary hover:opacity-90 shadow-button" : ""}
                        variant={service.popular ? "default" : "outline"}
                      >
                        Get Quote
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, secure, and efficient process to get your computer services done right.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-button">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Request Service</h3>
              <p className="text-muted-foreground">
                Choose your service and provide details about your requirements. Get instant quote.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-button">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Secure Connection</h3>
              <p className="text-muted-foreground">
                Our certified technician connects securely to your system using encrypted protocols.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-button">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Service Delivery</h3>
              <p className="text-muted-foreground">
                Service completed professionally with full documentation and follow-up support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers. Get professional computer services today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg">
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
```