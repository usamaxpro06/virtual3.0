## **src/pages/Pricing.tsx**
```typescript
import { Check, Star, ArrowRight, Shield, Zap, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Pricing = () => {
  const packages = [
    {
      name: "Basic",
      price: "$25",
      description: "Perfect for individual users with basic computer needs",
      features: [
        "Windows activation (1 PC)",
        "2 software installations",
        "Basic technical support",
        "Email support",
        "1-hour remote assistance"
      ],
      popular: false,
      buttonText: "Get Started"
    },
    {
      name: "Professional",
      price: "$49",
      description: "Ideal for professionals and small businesses",
      features: [
        "Windows activation (up to 3 PCs)",
        "5 software installations",
        "Priority technical support",
        "Phone & email support",
        "3-hour remote assistance",
        "System optimization",
        "Security audit"
      ],
      popular: true,
      buttonText: "Most Popular"
    },
    {
      name: "Enterprise",
      price: "$99",
      description: "Comprehensive solution for businesses and power users",
      features: [
        "Windows activation (up to 10 PCs)",
        "Unlimited software installations",
        "24/7 premium support",
        "Dedicated support manager",
        "Unlimited remote assistance",
        "Complete system optimization",
        "Advanced security setup",
        "Monthly maintenance"
      ],
      popular: false,
      buttonText: "Contact Sales"
    }
  ];

  const additionalServices = [
    { name: "Windows Activation (Single)", price: "$15", description: "Professional Windows activation for one computer" },
    { name: "Software Installation", price: "$10", description: "Install and configure any software application" },
    { name: "Data Entry (per hour)", price: "$8", description: "Professional data entry and processing services" },
    { name: "System Cleanup", price: "$20", description: "Complete system cleanup and optimization" },
    { name: "Malware Removal", price: "$25", description: "Professional malware detection and removal" },
    { name: "Data Recovery", price: "$50", description: "Recover lost or corrupted data files" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. All plans include professional service, 
            secure connections, and satisfaction guarantee.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative border-border hover:shadow-card-hover transition-all duration-300 ${pkg.popular ? 'ring-2 ring-primary scale-105' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary mb-2">{pkg.price}</div>
                  <CardDescription className="text-muted-foreground">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${pkg.popular ? 'bg-gradient-primary hover:opacity-90 shadow-button' : ''}`}
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    {pkg.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Need something specific? Choose from our individual services or create a custom package.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card key={index} className="border-border hover:shadow-card-hover transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-semibold">{service.name}</CardTitle>
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Secure Payment Options
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We accept all major payment methods with enterprise-grade security.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-primary rounded-xl p-6 mb-4 shadow-button">
                <Shield className="h-8 w-8 text-white mx-auto" />
              </div>
              <h3 className="font-semibold text-foreground">Secure Payments</h3>
              <p className="text-sm text-muted-foreground">256-bit SSL encryption</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-primary rounded-xl p-6 mb-4 shadow-button">
                <Zap className="h-8 w-8 text-white mx-auto" />
              </div>
              <h3 className="font-semibold text-foreground">Instant Activation</h3>
              <p className="text-sm text-muted-foreground">Service starts immediately</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-primary rounded-xl p-6 mb-4 shadow-button">
                <Clock className="h-8 w-8 text-white mx-auto" />
              </div>
              <h3 className="font-semibold text-foreground">Quick Processing</h3>
              <p className="text-sm text-muted-foreground">Payment in under 2 minutes</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-primary rounded-xl p-6 mb-4 shadow-button">
                <Users className="h-8 w-8 text-white mx-auto" />
              </div>
              <h3 className="font-semibold text-foreground">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">Always here to help</p>
            </div>
          </div>
        </div>
      </section>

      {/* Satisfaction Guarantee */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Star className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              100% Satisfaction Guarantee
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              We're so confident in our services that we offer a full money-back guarantee. 
              If you're not completely satisfied, we'll refund your payment - no questions asked.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
```