/**
 * Product Catalog - This RDLC report demonstrates the list of products rendered in Bold Report Viewer.
 */
import { Component, ViewChild } from '@angular/core';
import { Globals } from '../globals';
import { rdlcData } from '../rdlcData';
@Component({
  selector: 'ej-sample',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent {
  @ViewChild('viewer') viewerInst;
  // Specifies the report Web API service URL. It is used to process the reports.
  public serviceUrl = Globals.SERVICE_URL;
  // Specifies the path of the RDL report file
  public reportPath: string;
  public toolbarSettings = Globals.TOOLBAR_OPTIONS;
  public onToolbarItemClick = Globals.EDIT_REPORT;
  public onExportItemClick = Globals.EXPORT_ITEM_CLICK;

  constructor() {
    // this.reportPath = 'product-catalog.rdlc';
    this.reportPath = 'AgedAccountsPayable.rdlc';
    // add [AllowAnonymous] to SyncfusionReportsController
    this.serviceUrl = 'https://localhost:44325/api/support/reports/accounting';
  }

  public onReportLoaded(args): void {
    const reportNameWithoutExt = args.model.reportPath.split('.')[0];
    // this.viewerInst.widget.model.dataSources = rdlcData[reportNameWithoutExt];
    this.viewerInst.widget.model.dataSources = [
      {
        value: [
          {
            "ContactId": "058a6066-71d9-45e8-b019-e16b16577ebb",
            "BusinessName": "AgExpert Farms",
            "FromDate": "",
            "ToDate": "As of December 31, 2021",
            "Supplier": "CRA - Payroll",
            "PayableBalance": 2153.68,
            "SixtyDaysTotal": 2102.45,
            "PlusNinetyDaysTotal": 51.23
          },
          {
            "ContactId": "2ffe27c8-fe12-4496-b2f3-fb7e123b77f8",
            "BusinessName": "AgExpert Farms",
            "FromDate": "",
            "ToDate": "As of December 31, 2021",
            "Supplier": "Farmers Agro Service",
            "PayableBalance": 53604.26,
            "ThirtyDaysTotal": 332.95,
            "SixtyDaysTotal": 330.88,
            "PlusNinetyDaysTotal": 52940.43
          },
          {
            "ContactId": "5a03750c-411e-416a-b5ab-3c99b6c21e2e",
            "BusinessName": "AgExpert Farms",
            "FromDate": "",
            "ToDate": "As of December 31, 2021",
            "Supplier": "Valley  Insurance Ltd.",
            "PayableBalance": 1512.5,
            "ThirtyDaysTotal": 12.5,
            "SixtyDaysTotal": 1500
          },
          {
            "ContactId": "1ac152d3-7b3d-45eb-bb72-f8f38af84ce2",
            "BusinessName": "AgExpert Farms",
            "FromDate": "",
            "ToDate": "As of December 31, 2021",
            "Supplier": "WCB - Payroll",
            "PayableBalance": 930.44,
            "PlusNinetyDaysTotal": 930.44
          }
        ],
        name: 'AgedAccountsPayableDataset',
      }
    ]
  }

}
