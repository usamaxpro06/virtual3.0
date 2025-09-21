import { CheckCircle, Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Pricing = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  
  const packages = [
    {
      name: t('pricing.packages.basic.name'),
      price: isArabic ? "38 ر.س" : "$10",
      description: t('pricing.packages.basic.description'),
      features: t('pricing.packages.basic.features', { returnObjects: true }) as string[],
      popular: false,
      buttonText: t('pricing.packages.basic.buttonText')
    },
    {
      name: t('pricing.packages.advanced.name'),
      price: isArabic ? "94 ر.س" : "$25",
      description: t('pricing.packages.advanced.description'),
      features: t('pricing.packages.advanced.features', { returnObjects: true }) as string[],
      popular: true,
      buttonText: t('pricing.packages.advanced.buttonText')
    },
    {
      name: t('pricing.packages.premium.name'),
      price: isArabic ? "188 ر.س" : "$50",
      description: t('pricing.packages.premium.description'),
      features: t('pricing.packages.premium.features', { returnObjects: true }) as string[],
      popular: false,
      buttonText: t('pricing.packages.premium.buttonText')
    }
  ];

  const additionalServices = [
    { service: t('pricing.services.dataEntry'), price: isArabic ? "19 ر.س/ساعة" : "$5/hour", description: t('pricing.services.dataEntryDescription') },
    { service: t('pricing.services.technicalSupport'), price: isArabic ? "75 ر.س/جلسة" : "$20/session", description: t('pricing.services.technicalSupportDescription') },
    { service: t('pricing.services.virusRemoval'), price: isArabic ? "56 ر.س" : "$15", description: t('pricing.services.virusRemovalDescription') },
    { service: t('pricing.services.systemRecovery'), price: isArabic ? "113 ر.س" : "$30", description: t('pricing.services.systemRecoveryDescription') },
    { service: t('pricing.services.customInstallation'), price: isArabic ? "38 ر.س/برنامج" : "$10/software", description: t('pricing.services.customInstallationDescription') },
    { service: t('pricing.services.trainingSession'), price: isArabic ? "94 ر.س/ساعة" : "$25/hour", description: t('pricing.services.trainingSessionDescription') }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-secondary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('pricing.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t('pricing.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative hover:shadow-card transition-all duration-300 hover:-translate-y-1 ${pkg.popular ? 'ring-2 ring-primary scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold rounded-full flex items-center gap-1">
                      <Star className="h-3 w-3 fill-current" />
                      {t('common.mostPopular')}
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                  </div>
                  <p className="text-muted-foreground">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className={`w-full ${pkg.popular ? 'bg-gradient-primary hover:opacity-90' : ''}`}
                    variant={pkg.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link to="/contact">{t('services.getQuote')}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('pricing.additionalServices')}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('pricing.additionalServicesDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold">{service.service}</h3>
                    <span className="text-lg font-bold text-primary">{service.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  <Button size="sm" variant="outline" className="w-full" asChild>
                    <Link to="/contact">{t('services.getQuote')}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('pricing.securePayment')}</h2>
            <p className="text-xl text-muted-foreground">
              {t('pricing.securePaymentDescription')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                  <div className="text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-primary font-bold">💳</span>
                    </div>
                    <p className="text-sm font-medium">{t('pricing.paymentMethods.creditCards')}</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-primary font-bold">🏦</span>
                    </div>
                    <p className="text-sm font-medium">{t('pricing.paymentMethods.bankTransfer')}</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-primary font-bold">📱</span>
                    </div>
                    <p className="text-sm font-medium">{t('pricing.paymentMethods.paypal')}</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-primary font-bold">💰</span>
                    </div>
                    <p className="text-sm font-medium">{t('pricing.paymentMethods.crypto')}</p>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-muted-foreground text-sm">
                    {t('pricing.secureProcessing')}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Money Back Guarantee */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('pricing.satisfactionGuarantee')}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t('pricing.satisfactionGuaranteeDescription')}
          </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">{t('common.getStarted')}</Link>
            </Button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;