declare module "@bettercart/country-region-data" {
  export interface Region {
    name: string;
    code: string;
  }

  export interface Country {
    name: string;
    code: string;
    regions: Region[];
  }

  const CountryRegionData: Country[];

  export default CountryRegionData;
}
