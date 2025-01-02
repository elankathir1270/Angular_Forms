export interface DbData {
  id: number;
  vesselName: string;
  eta: string;
  agent: Agent;
  approximatePlt: any;
  boardingOfficer: string;
  boat: Boat;
  compliment: string;
  deliveryThrough: number;
  discountDetail: DiscountDetail[];
  exchangeRate: number;
  forLoadingOrderSheetTeam: boolean;
  loadingDate: string;
  loadingLocation: string;
  noOfPermit: number;
  orderConfirmDate: string;
  othersParty: OthersParty;
  othersTabSupplierDetail: OthersTabSupplierDetail[];
  permitChecked: boolean;
  permitExpiryDate: string;
  profit: number;
  remarks: string;
  totalPlt: string;
  vesselPosition: VesselPosition;
}

export interface Agent {
  id: number;
  name: string;
  shortName: string;
}

export interface Boat {
  id: number;
  name: string;
  shortName: string;
}

export interface DiscountDetail {
  id: number;
  department: string;
  discountForOffice: number;
  discountForVessel: number;
}

export interface OthersParty {
  id: number;
  name: string;
  shortName: string;
  highlightedColour: string;
}

export interface OthersTabSupplierDetail {
  id: number;
  supplierName: string;
  numberOfInvoice?: string;
  itemStatus: ItemStatus;
  pallets?: string;
  supplierAmount: number;
  deliveryTo: OthersTabDropDown;
}

export interface OthersTabDropDown {
  id: number;
  name: string;
}

export interface ItemStatus {
  id: number;
  name: string;
}

export interface VesselPosition {
  id: number;
  name: string;
}

export interface DbRequest {
  discountDetail: DiscountDetail[];
  othersTabSupplierDetail: OthersTabSupplierDetail[];
  permitChecked: boolean;
  noOfPermit: number;
  permitExpiryDate: string | Date;
  approximatePlt: string;
  totalPlt: string;
  remarks: string;
}
