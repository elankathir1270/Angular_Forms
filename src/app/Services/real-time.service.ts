import { Injectable } from '@angular/core';
import { DbData, DbRequest } from '../Model/db-data.model';

@Injectable({
  providedIn: 'root',
})
export class RealTimeService {
  db: DbData[] = [
    {
      id: 9,
      vesselName: 'STAR SHIP',
      eta: '2024-12-30T09:16:37.000+00:00',
      agent: { id: 5, name: 'AGENT', shortName: 'AGT' },
      approximatePlt: null,
      boardingOfficer: 'JACKIE CHAN',
      boat: { id: 1, name: 'SANDHYA', shortName: 'SANDY' },
      compliment:
        'JACKFRUIT IN SYRUP (565 G)-22.0 , KAMINOMOTO GOLD (150 ML) HAIR GROWTH ACCELERATOR-2.0 , ',
      deliveryThrough: 1,
      discountDetail: [
        {
          id: 11,
          department: 'PROVISION',
          discountForOffice: 10,
          discountForVessel: 0,
        },
        {
          id: 12,
          department: 'BONDED',
          discountForOffice: 10,
          discountForVessel: 0,
        },
      ],
      exchangeRate: 1.3,
      forLoadingOrderSheetTeam: false,
      loadingDate: '2024-12-30 09:16:37.0',
      loadingLocation: 'JURONG',
      noOfPermit: 3,
      orderConfirmDate: '2024-12-30T09:18:16.000+00:00',
      othersParty: {
        id: 6,
        name: 'EAST',
        shortName: 'SRK1',
        highlightedColour: '#FFC400',
      },
      othersTabSupplierDetail: [
        {
          id: 27,
          supplierName: 'NEWPORT',
          numberOfInvoice: '12',
          itemStatus: { id: 1, name: 'RECEIVED' },
          pallets: '9',
          supplierAmount: 50,
          deliveryTo: { id: 1, name: 'SELF COLLECTION' },
        },
        {
          id: 28,
          supplierName: 'TSS',
          numberOfInvoice: '2',
          itemStatus: { id: 1, name: 'RECEIVED' },
          pallets: '2',
          supplierAmount: 50,
          deliveryTo: { id: 1, name: 'SELF COLLECTION' },
        },
        {
          id: 29,
          supplierName: 'SSKIM',
          numberOfInvoice: '9',
          itemStatus: { id: 1, name: 'RECEIVED' },
          pallets: '2',
          supplierAmount: 50,
          deliveryTo: { id: 1, name: 'SELF COLLECTION' },
        },
        {
          id: 36,
          supplierName: 'MUS',
          numberOfInvoice: null,
          itemStatus: { id: 1, name: 'RECEIVED' },
          pallets: null,
          supplierAmount: 50,
          deliveryTo: { id: 1, name: 'SELF COLLECTION' },
        },
      ],
      permitChecked: true,
      permitExpiryDate: '10/10,11/12',
      profit: 318.89,
      remarks: null,
      totalPlt: '19',
      vesselPosition: { id: 1, name: 'Anchorage' },
    },
    {
      id: 10,
      vesselName: 'OCEAN QUEEN',
      eta: '2024-12-31T15:45:00.000+00:00',
      agent: { id: 6, name: 'GLOBAL AGENT', shortName: 'GLB' },
      approximatePlt: null,
      boardingOfficer: 'JOHN DOE',
      boat: { id: 2, name: 'MARINA', shortName: 'MARI' },
      compliment: 'CANNED TUNA (150 G)-15.0 , PREMIUM COFFEE (500 G)-10.0 , ',
      deliveryThrough: 2,
      discountDetail: [
        {
          id: 13,
          department: 'PROVISION',
          discountForOffice: 8,
          discountForVessel: 2,
        },
        {
          id: 14,
          department: 'BONDED',
          discountForOffice: 5,
          discountForVessel: 3,
        },
      ],
      exchangeRate: 1.25,
      forLoadingOrderSheetTeam: true,
      loadingDate: '2024-12-31 15:45:00.0',
      loadingLocation: 'PASIR PANJANG',
      noOfPermit: 2,
      orderConfirmDate: '2024-12-31T16:00:00.000+00:00',
      othersParty: {
        id: 7,
        name: 'WEST',
        shortName: 'SRK2',
        highlightedColour: '#00FFC4',
      },
      othersTabSupplierDetail: [
        {
          id: 30,
          supplierName: 'SEAWAVE',
          numberOfInvoice: '5',
          itemStatus: { id: 2, name: 'PENDING' },
          pallets: '3',
          supplierAmount: 50,
          deliveryTo: { id: 1, name: 'SELF COLLECTION' },
        },
        {
          id: 31,
          supplierName: 'BLUE SEA',
          numberOfInvoice: '4',
          itemStatus: { id: 1, name: 'RECEIVED' },
          pallets: '4',
          supplierAmount: 50,
          deliveryTo: { id: 1, name: 'SELF COLLECTION' },
        },
      ],
      permitChecked: false,
      permitExpiryDate: '12/12,13/01',
      profit: 420.5,
      remarks: 'Urgent delivery',
      totalPlt: '7',
      vesselPosition: { id: 2, name: 'Docked' },
    },
    {
      id: 11,
      vesselName: 'SEA BREEZE',
      eta: '2025-01-02T10:30:00.000+00:00',
      agent: { id: 7, name: 'PACIFIC AGENT', shortName: 'PAC' },
      approximatePlt: null,
      boardingOfficer: 'EMILY SMITH',
      boat: { id: 3, name: 'VOYAGER', shortName: 'VOY' },
      compliment: 'OLIVE OIL (1 L)-20.0 , SPAGHETTI (500 G)-25.0 , ',
      deliveryThrough: 3,
      discountDetail: [
        {
          id: 15,
          department: 'PROVISION',
          discountForOffice: 12,
          discountForVessel: 4,
        },
        {
          id: 16,
          department: 'BONDED',
          discountForOffice: 7,
          discountForVessel: 2,
        },
      ],
      exchangeRate: 1.4,
      forLoadingOrderSheetTeam: false,
      loadingDate: '2025-01-02 10:30:00.0',
      loadingLocation: 'TUAS',
      noOfPermit: 4,
      orderConfirmDate: '2025-01-02T11:00:00.000+00:00',
      othersParty: {
        id: 8,
        name: 'NORTH',
        shortName: 'SRK3',
        highlightedColour: '#FF5733',
      },
      othersTabSupplierDetail: [
        {
          id: 32,
          supplierName: 'OCEANIC',
          numberOfInvoice: '6',
          itemStatus: { id: 1, name: 'RECEIVED' },
          pallets: '5',
          supplierAmount: 50,
          deliveryTo: { id: 1, name: 'SELF COLLECTION' },
        },
        {
          id: 33,
          supplierName: 'MARITIME',
          numberOfInvoice: '3',
          itemStatus: { id: 2, name: 'PENDING' },
          pallets: '2',
          supplierAmount: 50,
          deliveryTo: { id: 1, name: 'SELF COLLECTION' },
        },
      ],
      permitChecked: true,
      permitExpiryDate: '15/01,16/02',
      profit: 512.75,
      remarks: 'High priority',
      totalPlt: '10',
      vesselPosition: { id: 3, name: 'Anchorage' },
    },
    {
      id: 12,
      vesselName: 'HORIZON',
      eta: '2025-01-05T14:00:00.000+00:00',
      agent: { id: 8, name: 'ATLANTIC AGENT', shortName: 'ATL' },
      approximatePlt: null,
      boardingOfficer: 'MICHAEL JOHNSON',
      boat: { id: 4, name: 'NAVIGATOR', shortName: 'NAV' },
      compliment: 'RICE (5 KG)-30.0 , SUGAR (1 KG)-50.0 , ',
      deliveryThrough: 4,
      discountDetail: [
        {
          id: 17,
          department: 'PROVISION',
          discountForOffice: 15,
          discountForVessel: 5,
        },
        {
          id: 18,
          department: 'BONDED',
          discountForOffice: 10,
          discountForVessel: 3,
        },
      ],
      exchangeRate: 1.35,
      forLoadingOrderSheetTeam: true,
      loadingDate: '2025-01-05 14:00:00.0',
      loadingLocation: 'SENTOSA',
      noOfPermit: 5,
      orderConfirmDate: '2025-01-05T14:30:00.000+00:00',
      othersParty: {
        id: 9,
        name: 'SOUTH',
        shortName: 'SRK4',
        highlightedColour: '#8E44AD',
      },
      othersTabSupplierDetail: [
        {
          id: 34,
          supplierName: 'CAPTAIN SUPPLIES',
          numberOfInvoice: '8',
          itemStatus: { id: 1, name: 'RECEIVED' },
          pallets: '6',
          supplierAmount: 50,
          deliveryTo: { id: 1, name: 'SELF COLLECTION' },
        },
        {
          id: 35,
          supplierName: 'SHIPMATE',
          numberOfInvoice: '2',
          itemStatus: { id: 2, name: 'PENDING' },
          pallets: '1',
          supplierAmount: 50,
          deliveryTo: { id: 1, name: 'SELF COLLECTION' },
        },
      ],
      permitChecked: false,
      permitExpiryDate: '20/01,21/02',
      profit: 612.0,
      remarks: 'Standard delivery',
      totalPlt: '12',
      vesselPosition: { id: 4, name: 'Docked' },
    },
  ];

  orderSheetUpdates: DbRequest[] = [];

  constructor() {}

  getAllDatas() {
    return this.db;
  }

  getDbData(id: string) {
    const data: DbData = this.db.find((data) => data.id == +id);
    return data;
  }

  updateOrderSheet(id: string, payload: DbRequest): DbRequest[] {
    if (id && payload) {
      const alteredPayload = { id: id, ...payload };
      const existingIndex = this.orderSheetUpdates.findIndex(
        (update) => update.id == id
      );

      if (existingIndex !== -1) {
        this.orderSheetUpdates[existingIndex] = alteredPayload;
      } else {
        this.orderSheetUpdates.push(alteredPayload);
      }
    }
    return this.orderSheetUpdates;
  }
}
