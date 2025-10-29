import { ServiceZoneDTO } from '@medusajs/framework/types';
export declare const remapServiceZoneFieldsToSellerServiceZone: (fields: string[]) => string[];
export declare const remapSellerServiceZoneQuery: (data: {
    service_zone: ServiceZoneDTO;
}[]) => ServiceZoneDTO[];
