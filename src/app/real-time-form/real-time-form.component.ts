import { Component, OnInit } from '@angular/core';
import { RealTimeService } from '../Services/real-time.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { DbData, DbRequest } from '../Model/db-data.model';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-real-time-form',
  templateUrl: './real-time-form.component.html',
  styleUrls: ['./real-time-form.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class RealTimeFormComponent implements OnInit {
  itemStatusOptions = [
    { id: '1', name: 'RECEIVED' },
    { id: '2', name: 'PACKED' },
  ];
  deliveryToOptions = [
    { id: '1', name: 'SELF COLLECTION' },
    { id: '2', name: 'DIRECT DELIVERY' },
    { id: '3', name: 'DELIVER AT WAREHOUSE' },
  ];
  orderSheet: DbData;
  isFormSubmitted: boolean = false;
  constructor(
    private realTimeService: RealTimeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
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
    compliment: new FormControl({ value: null, disabled: true }),
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
    profit: new FormControl({ value: null, disabled: true }),
    remarks: new FormControl(null),
  });

  get discountDetail() {
    return this.realTimeForm.controls['discountDetail'] as FormArray;
  }
  get othersTabSupplierDetail() {
    return this.realTimeForm.controls['othersTabSupplierDetail'] as FormArray;
  }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param) => {
      console.log(param.get('id'));
      const id = param.get('id');
      this.getOrderSheeet(id);
    });
  }

  getOrderSheeet(id: string) {
    this.orderSheet = this.realTimeService.getDbData(id);
    this.realTimeForm.patchValue({
      vesselName: this.orderSheet.vesselName,
      eta: this.processDateFormat(this.orderSheet.eta),
      exchangeRate: this.orderSheet.exchangeRate,
      vesselLocation: this.orderSheet.vesselPosition?.name,
      orderConformationDate: this.processDateFormat(
        this.orderSheet.orderConfirmDate
      ),
      compliment: this.orderSheet.compliment,
      othersParty: this.orderSheet.othersParty?.shortName,
      agentDetail: this.orderSheet.agent?.name,
      boat: this.orderSheet.boat?.name,
      loadingLocation: this.orderSheet.loadingLocation,
      loadingDate: this.processDateFormat(this.orderSheet.loadingDate),
      deliveryThrough: this.orderSheet.deliveryThrough,
      boardingOfficer: this.orderSheet.boardingOfficer,
      noOfPermit: this.orderSheet.noOfPermit,
      permitExpiryDate: this.orderSheet.permitExpiryDate,
      approximatePlt: this.orderSheet.approximatePlt,
      totalPlt: this.orderSheet.totalPlt,
      profit: this.orderSheet.profit,
      remarks: this.orderSheet.remarks,
    });
    this.setDiscountDetail(this.orderSheet);
    this.setOthersTabSupplierDetail(this.orderSheet);
    //console.log(this.orderSheet);
  }

  constructPayload(): DbRequest {
    const cleanedDiscountDetail = this.discountDetail
      .getRawValue()
      .map((detail: any) => ({
        department: detail.department,
        discountForOffice: detail.discountForOffice.replace('%', ''),
        discountForVessel: detail.discountForVessel.replace('%', ''),
      }));

    return {
      discountDetail: cleanedDiscountDetail,
      othersTabSupplierDetail: this.othersTabSupplierDetail.getRawValue(),
      permitChecked: this.realTimeForm.getRawValue().permitChecked,
      noOfPermit: this.realTimeForm.getRawValue().noOfPermit,
      permitExpiryDate: this.realTimeForm.getRawValue().permitExpiryDate,
      approximatePlt: this.realTimeForm.getRawValue().approximatePlt,
      totalPlt: this.realTimeForm.getRawValue().totalPlt,
      remarks: this.realTimeForm.getRawValue().remarks,
    };
  }

  onSubmit() {
    this.isFormSubmitted = true;
    const payload = this.constructPayload();
    const orderSheetResponse = this.realTimeService.updateOrderSheet(
      String(this.orderSheet.id),
      payload
    );
    if (orderSheetResponse) {
      console.log(orderSheetResponse);

      this.messageService.add({
        severity: 'success',
        summary: 'Form Submitted',
        detail: 'Form successfully updated',
      });

      setTimeout(() => {
        this.router.navigate(['../']);
      }, 2000);
    }
  }

  canExit(): Observable<boolean> {
    if (!this.isFormSubmitted && this.realTimeForm.dirty) {
      return new Observable<boolean>((observer) => {
        this.confirmationService.confirm({
          message:
            'You have unsaved changes. Do you want to save before leaving?',

          accept: () => {
            console.log('Accepted changes');
            this.saveFormData().subscribe(() => {
              observer.next(true);
              observer.complete();
            });
          },
          reject: () => {
            observer.next(true);
            observer.complete();
          },
        });
      });
    }
    return of(true);
  }

  saveFormData() {
    return new Observable((observer) => {
      const payload = this.constructPayload();
      const orderSheetResponse = this.realTimeService.updateOrderSheet(
        String(this.orderSheet.id),
        payload
      );
      console.log('working');

      if (orderSheetResponse) {
        this.messageService.add({
          severity: 'success',
          summary: 'Saved',
          detail: 'Changes have been saved.',
        });
        setTimeout(() => observer.next(), 2000);
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Something went wrong',
        });
        setTimeout(() => observer.error(), 2000);
      }
    });
  }

  setDiscountDetail(orderSheet: DbData) {
    const discountDetail = orderSheet.discountDetail;
    this.discountDetail.clear();
    discountDetail.forEach((detail) => {
      this.discountDetail.push(
        new FormGroup({
          department: new FormControl({
            value: detail.department,
            disabled: true,
          }),
          discountForOffice: new FormControl({
            value: `${detail.discountForOffice}%`,
            disabled: true,
          }),
          discountForVessel: new FormControl(`${detail.discountForVessel}%`),
        })
      );
    });

    this.discountDetail.setValue(
      discountDetail.map((discountDetail) => ({
        department: discountDetail.department,
        discountForOffice: `${discountDetail.discountForOffice}%`,
        discountForVessel: `${discountDetail.discountForVessel}%`,
      }))
    );
  }
  setOthersTabSupplierDetail(orderSheet: DbData) {
    const supplierDetails = orderSheet.othersTabSupplierDetail;
    this.othersTabSupplierDetail.clear();
    supplierDetails.forEach((detail) => {
      this.othersTabSupplierDetail.push(
        new FormGroup({
          supplierName: new FormControl({
            value: detail.supplierName,
            disabled: true,
          }),
          supplierAmount: new FormControl({
            value: detail.supplierAmount,
            disabled: true,
          }),
          deliveryTo: new FormControl(detail.deliveryTo.id),
          itemStatus: new FormControl(detail.itemStatus.id),
          pallets: new FormControl(detail.pallets),
          numberOfInvoice: new FormControl(detail.numberOfInvoice),
        })
      );
    });

    this.othersTabSupplierDetail.setValue(
      supplierDetails.map((detail) => ({
        supplierName: detail.supplierName,
        supplierAmount: detail.supplierAmount,
        deliveryTo: String(detail.deliveryTo.id),
        itemStatus: String(detail.itemStatus.id),
        pallets: detail.pallets,
        numberOfInvoice: detail.numberOfInvoice,
      }))
    );
  }

  processDateFormat(date: string | Date): Date | string {
    if (date !== undefined && date !== null) {
      date = date.toString().trim();

      if (date.length) {
        return new Date(date);
      }
    }

    return '';
  }
}
