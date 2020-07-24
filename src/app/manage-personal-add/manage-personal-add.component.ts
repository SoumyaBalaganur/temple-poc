
import { Component, OnInit, Input, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { data, extraData } from "../../assets/data";
import { Router, ActivatedRoute } from "@angular/router";
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from "@angular/material";
 
 
interface Food {
  value: string;
  viewValue: string;
}
/** @title Form field with label */
@Component({
  selector: 'app-manage-personal-add',
  templateUrl: './manage-personal-add.component.html',
  styleUrls: ['./manage-personal-add.component.css']
})
export class ManagePersonalAddComponent {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}
 