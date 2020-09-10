declare module "@bettercart/country-region-data" {
  export interface Region {
    name: string;
    code: string;
  }

  export interface Country {
    name: string;
    code: string;
    regions: Region[];
    zipRequired: boolean;
    regionLabel: string;
  }

  const CountryRegionData: Country[];

  export default CountryRegionData;
}
