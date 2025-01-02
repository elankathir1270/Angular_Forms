import { Component, OnInit } from '@angular/core';
import { RealTimeService } from '../Services/real-time.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-real-time-form',
  templateUrl: './real-time-form.component.html',
  styleUrls: ['./real-time-form.component.css'],
})
export class RealTimeFormComponent implements OnInit {
  constructor(
    private realTimeService: RealTimeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  realTimeForm: FormGroup = new FormGroup({
    vesselName: new FormControl({ value: '', disabled: true }),
    eta: new FormControl({ value: null, disabled: true }),
    exchangeRate: new FormControl({ value: null, disabled: true }),
    vesselLocation: new FormControl({ value: null, disabled: true }),
    orderConformationDate: new FormControl({ value: null, disabled: true }),
    discountDetail: new FormArray([
      new FormGroup({
        department: new FormControl({ value: null, disabled: true }),
        discountForOffice: new FormControl({ value: null, disabled: true }),
        discountForVessel: new FormControl(null),
      }),
    ]),
    othersParty: new FormControl({ value: null, disabled: true }),
    agentDetail: new FormControl({ value: null, disabled: true }),
    boat: new FormControl({ value: null, disabled: true }),
    loadingLocation: new FormControl({ value: null, disabled: true }),
    loadingDate: new FormControl({ value: null, disabled: true }),
    deliveryThrough: new FormControl({ value: null, disabled: true }), //vessel anchor location
    boardingOfficer: new FormControl({ value: null, disabled: true }),
    noOfPermit: new FormControl(0),
    permitExpiryDate: new FormControl(null),
    permitChecked: new FormControl(false),
    othersTabSupplierDetail: new FormArray([
      new FormGroup({
        supplierName: new FormControl({ value: null, disabled: true }),
        supplierAmount: new FormControl({ value: null, disabled: true }),
        deliveryTo: new FormControl(null),
        itemStatus: new FormControl(null),
        pallets: new FormControl(null),
        numberOfInvoice: new FormControl(null),
      }),
    ]),
    approximatePlt: new FormControl(null),
    totalPlt: new FormControl(null),
    remarks: new FormControl(null),
  });
  ngOnInit() {}

  onSubmit() {}
}
