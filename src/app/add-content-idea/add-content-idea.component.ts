import { Component, OnInit, Input, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { data, extraData } from "../../assets/data";
import { Router, ActivatedRoute } from "@angular/router";
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from "@angular/material";

@Component({
  selector: "app-add-content-idea",
  templateUrl: "./add-content-idea.component.html",
  styleUrls: ["./add-content-idea.component.css"],
})
export class AddContentIdeaComponent implements OnInit {
  contentIdeaForm: FormGroup;

  // dropdown lists
  allContentType = [
    "Messaging Decks",
    "Allego Videos",
    "White Papers",
    "Portfolio Inquiries",
    "Portfolio Profiles",
    "Institutional Competitor Decks",
    "Monthly Platform Summaries/Updates",
    "Distribution Support",
    "Market Conditions",
    "Special projects",
    "Qualitative Comments",
  ];
  allChannel;
  allGpmTeams = Array.from(
    new Set(data.map((item) => item["GPM Team"]))
  ).filter((item) => item !== "");
  allPointPerson = [];
  yesNo = ["Yes", "No"];
  allPlatfrom = Array.from(
    new Set(extraData.map((item) => item["Platform"]))
  ).filter((item) => item !== "");
  allStrategy = Array.from(
    new Set(extraData.map((item) => item["Strategy"]))
  ).filter((item) => item !== "");
  allProduct = Array.from(
    new Set(extraData.map((item) => item["Product"]))
  ).filter((item) => item !== "");
  // replyUrl;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.initialiseForm();
  }

  replyUrl = () => {
    let url =
      "https://app.powerbi.com/sharedwithme/reports/0118b71b-6f92-45bb-bca7-366179bd6378/ReportSection928e7c1366a0766a18a4?ctid=b9b831a9-6c10-40bf-86f3-489ed83c81e8&openReportSource=ReportInvitation";
    window.open(url, "_self");
  };

  initialiseForm() {
    this.contentIdeaForm = this._fb.group({
      "Content Idea": ["", [Validators.required]],
      "Fiscal Year": ["FY20"],
      "Target Month": [""],
      "Target Week": [this.getDefaultTargetDate()],
      "GPM Team": [],
      "GPM Point Person": [{ value: null, disabled: true }],
      "USAS (Yes, Yes - Spotlight, BLANK)": [""],
      "IAS (Yes, Yes - Spotlight, BLANK)": [""],
      "CANADA (Yes, Yes - Spotlight, BLANK)": [""],
      "INSTITUTIONAL (Yes, Yes - Spotlight, BLANK)": [""],
      "Monthly GPM Email (Yes, BLANK)": [""],
      "Ad Hoc Email (Yes, BLANK)": [""],
      "Date Completed": [""],
      "Is it OK for external use (subject to compliance review)? (Yes, BLANK)": [
        "",
      ],
      "If OK for external use, what is the priority (H/M/L)?": [""],
      "Straight to External (Yes, BLANK)": [""],
      "Allego (Yes, BLANK)": [""],
      "Allego Channel - USAS": [""],
      "Allego Channel - IAS": [""],
      "Allego Channel - CANADA": [""],
      "Allego Channel - INSTITUTIONAL": [""],
      "Allego - Which Week was It Completed?": [""],
      "Content Type": ["", [Validators.required]],
      "Spotlight Fund": ["No"],
      Platform: [""],
      Strategy: [{ value: "", disabled: true }],
      Product: [{ value: "", disabled: true }],
      "Link (s) to content": [""],
      "Additional Content Details": [""],
      "External Use": ["No"],
      "Compliance Review required": ["No"],
      "Additional Distribution Details": [""],
    });
  }

  getPointPerson() {
    const team = this.contentIdeaForm.get("GPM Team").value;
    const filteredTeam = data.filter((item) => item["GPM Team"] === team);
    this.allPointPerson = Array.from(
      new Set(filteredTeam.map((item) => item["GPM Point Person"]))
    ).filter((item) => item !== "");
    this.contentIdeaForm.get("GPM Point Person").enable();

    console.log(this.allPointPerson);
  }

  filterStrategy() {
    const platform = this.contentIdeaForm.get("Platform").value;
    const filteredStrategy = extraData.filter(
      (item) => item["Platform"] === platform
    );
    this.allStrategy = Array.from(
      new Set(filteredStrategy.map((item) => item["Strategy"]))
    ).filter((item) => item !== "");
    this.contentIdeaForm.get("Strategy").enable();
  }

  filterProduct() {
    const platform = this.contentIdeaForm.get("Platform").value;
    const strategy = this.contentIdeaForm.get("Strategy").value;
    const filteredStrategy = extraData.filter(
      (item) => item["Strategy"] === strategy && item["Platform"] === platform
    );
    this.allProduct = Array.from(
      new Set(filteredStrategy.map((item) => item["Product"]))
    ).filter((item) => item !== "");
    this.contentIdeaForm.get("Product").enable();
  }

  getDefaultTargetDate() {
    let numWeeks = 2;
    let now = new Date();
    now.setDate(now.getDate() + numWeeks * 7);
    return now;
  }

  sanitiseData() {
    if (
      this.contentIdeaForm.get("USAS (Yes, Yes - Spotlight, BLANK)").value ===
      true
    )
      this.contentIdeaForm.patchValue({
        "USAS (Yes, Yes - Spotlight, BLANK)": "Yes",
      });
    if (
      this.contentIdeaForm.get("IAS (Yes, Yes - Spotlight, BLANK)").value ===
      true
    )
      this.contentIdeaForm.patchValue({
        "IAS (Yes, Yes - Spotlight, BLANK)": "Yes",
      });
    if (
      this.contentIdeaForm.get("CANADA (Yes, Yes - Spotlight, BLANK)").value ===
      true
    )
      this.contentIdeaForm.patchValue({
        "CANADA (Yes, Yes - Spotlight, BLANK)": "Yes",
      });
    if (
      this.contentIdeaForm.get("INSTITUTIONAL (Yes, Yes - Spotlight, BLANK)")
        .value === true
    )
      this.contentIdeaForm.patchValue({
        "INSTITUTIONAL (Yes, Yes - Spotlight, BLANK)": "Yes",
      });
  }

  getRequestBody() {
    return {
      Content_Idea: this.contentIdeaForm.get("Content Idea").value,
      Work_Type: this.contentIdeaForm.get("Content Type").value,
      Fiscal_Year: `FY${(this.contentIdeaForm.get("Target Week").value as Date)
        .getFullYear()
        .toString()
        .substr(2)}`,
      Target_Date: this.contentIdeaForm.get("Target Week").value,
      Content_Completion_Date: this.contentIdeaForm.get("Date Completed").value,
      GPM_Team: this.contentIdeaForm.get("GPM Team").value,
      GPM_Point_Person: this.contentIdeaForm.get("GPM Point Person").value,
      Spotlight_Fund: this.contentIdeaForm.get("Spotlight Fund").value,
      Platform: this.contentIdeaForm.get("Platform").value,
      Strategy: this.contentIdeaForm.get("Strategy").value,
      Product: this.contentIdeaForm.get("Product").value,
      Channel_US: this.contentIdeaForm.get("USAS (Yes, Yes - Spotlight, BLANK)")
        .value,
      Channel_IAS: this.contentIdeaForm.get("IAS (Yes, Yes - Spotlight, BLANK)")
        .value,
      Channel_CANADA: this.contentIdeaForm.get(
        "CANADA (Yes, Yes - Spotlight, BLANK)"
      ).value,
      Channel_INSTITUTIONAL: this.contentIdeaForm.get(
        "INSTITUTIONAL (Yes, Yes - Spotlight, BLANK)"
      ).value,
      Link_to_Content_Details: this.contentIdeaForm.get("Link (s) to content")
        .value,
      Monthly_Email: "",
      Adhoc_Email: "",
      Email_Date_Completed: "",
      External_Use: "",
      If_ok_for_external_Priority: "",
      Straight_to_External: "",
      Allego: "",
      Allego_Channel_USAS: "",
      Allego_Channel_IAS: "",
      Allego_Channel_CANADA: "",
      Allego_Channel_INSTITUTIONAL: "",
      Allego_Completed_Date: "",
      Distribution_External_Use: this.contentIdeaForm.get("External Use").value,
      Distribution_Compliance_Review_Required: this.contentIdeaForm.get(
        "Compliance Review required"
      ).value,
      Distribution_Additional_Details: this.contentIdeaForm.get(
        "Additional Distribution Details"
      ).value,
      Content_Additional_Details: this.contentIdeaForm.get(
        "Additional Content Details"
      ).value,
    };
  }

  saveContentIdea() {
    const useAPI = true;

    this.sanitiseData();

    if (this.contentIdeaForm.valid) {
      if (!useAPI) {
        data.push(this.contentIdeaForm.value);
        this.openDialog("Content Idea Created!");
        this.initialiseForm();
        console.log(data);
        // this.goToPage();
      } else {
        let body = this.getRequestBody();
        let url =
          "https://dqmonitoring.corp.frk.com/api/GPMSQLServer?code=cDIPfgdoj4z0EkdztLzqoqm2EmI7COtwdLdFIrXfWVd9MrSDbb0LrQ==";
        fetch(url, {
          method: "POST",
          body: JSON.stringify(body),
        })
          .then((response) => {
            if (response.status === 200) {
              this.openDialog("Content Idea Created!");
              this.initialiseForm();
            } else {
              this.openDialog("Server Down!");
            }
          })
          // .then((result) => {
          //   result.data === "success";
          //   alert("Content Idea Created!");
          //   this.initialiseForm();
          // })
          .catch((error) => {
            this.openDialog("Content Idea Creation Failed");
          });
      }
    } else {
      this.openDialog("Please fill the required fields");
    }
  }
  openDialog(message: string): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: "250px",
      data: message,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      // this.animal = result;
      console.log("result: ", result);
    });
  }
  goToPage(): void {
    this._router.navigateByUrl("/home");
  }
}
@Component({
  selector: "alert-popup",
  templateUrl: "alert-popup.html",
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
