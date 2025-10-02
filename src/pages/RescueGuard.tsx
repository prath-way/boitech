import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Ambulance, Phone, MapPin, Clock, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const emergencyContacts = [
  { name: "Emergency Services", number: "911", type: "General Emergency" },
  { name: "Ambulance", number: "108", type: "Medical Emergency" },
  { name: "Police", number: "100", type: "Law Enforcement" },
  { name: "Fire Department", number: "101", type: "Fire Emergency" },
  { name: "Poison Control", number: "1-800-222-1222", type: "Poisoning" }
];

const nearbyHospitals = [
  {
    name: "City General Hospital",
    distance: "1.2 km",
    estimatedTime: "5 mins",
    address: "123 Main Street",
    emergency: true
  },
  {
    name: "St. Mary's Medical Center",
    distance: "2.8 km",
    estimatedTime: "10 mins",
    address: "456 Healthcare Avenue",
    emergency: true
  },
  {
    name: "Central Community Hospital",
    distance: "4.5 km",
    estimatedTime: "15 mins",
    address: "789 Wellness Road",
    emergency: false
  }
];

const RescueGuard = () => {
  const handleEmergencyCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-950/20 rounded-2xl mb-4">
            <Ambulance className="h-8 w-8 text-red-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">RescueGuard</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Quick access to emergency services and nearby hospitals
          </p>
        </div>

        {/* Emergency Alert */}
        <Alert className="border-red-200 bg-red-50 dark:bg-red-950/20 animate-pulse-soft">
          <AlertCircle className="h-5 w-5 text-red-600" />
          <AlertDescription className="text-red-800 dark:text-red-200 font-medium">
            In case of life-threatening emergency, call 911 immediately
          </AlertDescription>
        </Alert>

        {/* Emergency Contacts */}
        <Card className="p-6 shadow-card animate-slide-up">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Phone className="h-5 w-5 text-red-500" />
            Emergency Contacts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {emergencyContacts.map((contact) => (
              <Card key={contact.number} className="p-4 hover:shadow-md transition-shadow border-2">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-semibold">{contact.name}</h4>
                    <p className="text-sm text-muted-foreground">{contact.type}</p>
                  </div>
                  <Badge variant="secondary" className="bg-red-100 text-red-700 dark:bg-red-950/20">
                    {contact.number}
                  </Badge>
                </div>
                <Button
                  onClick={() => handleEmergencyCall(contact.number)}
                  className="w-full bg-red-600 hover:bg-red-700"
                  size="sm"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
              </Card>
            ))}
          </div>
        </Card>

        {/* Nearby Hospitals */}
        <Card className="p-6 shadow-card animate-scale-in">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            Nearby Hospitals
          </h3>
          <div className="space-y-3">
            {nearbyHospitals.map((hospital, index) => (
              <Card key={index} className="p-4 border-2 hover:border-primary/50 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold">{hospital.name}</h4>
                      {hospital.emergency && (
                        <Badge className="bg-green-100 text-green-700 dark:bg-green-950/20 text-xs">
                          24/7 Emergency
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{hospital.address}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {hospital.distance}
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {hospital.estimatedTime}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <MapPin className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                  <Button size="sm" className="flex-1 bg-primary">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Hospital
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Card>

        {/* SOS Button */}
        <Card className="p-8 text-center shadow-elevated bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-2 border-red-200">
          <Ambulance className="h-16 w-16 mx-auto mb-4 text-red-600" />
          <h3 className="text-2xl font-bold mb-2">Emergency SOS</h3>
          <p className="text-muted-foreground mb-6">
            Press this button only in life-threatening emergencies
          </p>
          <Button
            size="lg"
            onClick={() => handleEmergencyCall("911")}
            className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 text-lg font-semibold shadow-lg"
          >
            <AlertCircle className="h-6 w-6 mr-2" />
            CALL EMERGENCY SERVICES
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default RescueGuard;
