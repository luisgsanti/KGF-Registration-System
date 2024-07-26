export interface Enrollment{
    id?:                            number;
    identificationNumber:           string;
    name:                           string;
    email:                          string;
    phone:                          string;
    address:                        string;
    country:                        string;
    department:                     string;
    city:                           string;
    municipality:                   string;
    bankAccount:                    string;
    accountType:                    string;


    RouteDocIdentification:         string;
    RouteDocBankCertificate:        string;

    /********************************************/

    totalDebt:          string;
    routeDocDebt:       string; 

    /********************************************/

    totalUpcomingAssets:    string;
    routeDocHome:           string;
    routeDocFurniture:      string;
    routeDocVehicle:        string;

    /********************************************/

    totalVenture:       string;
    routeDocVenture:    string
}