import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [
	CommonModule]
  })

export class Enduser {
    id:number;
	PatientNo:number;
	Name:String;
	Email:String;
	MobileNo:Number;
	DateofBirth:String;
    Gender:String;
	Address:String;
	BloodPressure:Number;
	BodyTemperature:Number;
}