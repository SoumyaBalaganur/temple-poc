import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LineageComponent } from "./lineage/lineage.component";
import { TeamWiseChartComponent } from "./team-wise-chart/team-wise-chart.component";
import { RegionWiseChartComponent } from "./region-wise-chart/region-wise-chart.component";
import { UsabilityWiseChartComponent } from "./usability-wise-chart/usability-wise-chart.component";
import { HomeComponent } from "./home/home.component";
import {
  AddContentIdeaComponent,
  DialogOverviewExampleDialog,
} from "./add-content-idea/add-content-idea.component";
import { ManagePersonalAlertsComponent} from "./manage-personal-alerts/manage-personal-alerts.component";
import { ManagePersonalAddComponent} from "./manage-personal-add/manage-personal-add.component";
import { ManagePersonalEditComponent} from "./manage-personal-edit/manage-personal-edit.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { GpmTableComponent } from "./gpm-table/gpm-table.component";

@NgModule({
  declarations: [
    AppComponent,
    LineageComponent,
    TeamWiseChartComponent,
    RegionWiseChartComponent,
    UsabilityWiseChartComponent,
    HomeComponent,
    AddContentIdeaComponent,
    ManagePersonalAlertsComponent,
    ManagePersonalAddComponent,
    ManagePersonalEditComponent,
    GpmTableComponent,
    DialogOverviewExampleDialog,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  entryComponents: [DialogOverviewExampleDialog],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
