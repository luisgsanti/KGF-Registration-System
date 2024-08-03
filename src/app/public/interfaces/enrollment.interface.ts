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
    bondType:                       string
    bondCode:                       string;

    routeDocIdentification:         string;
    routeDocBankCertificate:        string;

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
    routeDocVenture:    string;

    /********************************************/

    totalGlobal:        string;
    totalGlobalUDS:     string;
}