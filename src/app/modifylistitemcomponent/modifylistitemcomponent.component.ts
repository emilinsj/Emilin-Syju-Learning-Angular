import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Phone} from "../models/phone";
import {ActivatedRoute, Router} from "@angular/router";
import {PhoneService} from "../services/phone.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-modifylistitemcomponent',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './modifylistitemcomponent.component.html',
  styleUrl: './modifylistitemcomponent.component.css'
})
export class ModifylistitemcomponentComponent implements OnInit{
  phoneForm:FormGroup;
  phone:Phone | undefined;
  error:string|null=null;

  constructor(
    private fb:FormBuilder,
    private route:ActivatedRoute,
    private phoneService:PhoneService,
    private router: Router
  ) {
    this.phoneForm=this.fb.group({
      serialNumber:[phoneService.generateNewID()],
      brand:['',Validators.required],
      name:['',Validators.required],
      color:[''],
      software:['',Validators.required],
      path:['',Validators.required]

    })
  }
  ngOnInit(): void {
    const id=Number(this.route.snapshot.paramMap.get('serialNumber'));
    if(id){
      this.phoneService.getPhoneById(id).subscribe({
        next : phone =>{
          if(phone){
            this.phoneForm.patchValue(phone);
          }
        },
        error:err=>{
          this.error='Error fetching phone';
          console.error('Error fetching phone:' ,err);
        }
      })
    }
  }
  onSubmit():void{
    if(this.phoneForm.valid){
      const phone: Phone=this.phoneForm.value;
      if(phone.serialNumber){
        this.phoneService.updatePhone(phone).subscribe(()=>this.router.navigate(['/phones']));
      } else{
        phone.serialNumber=this.phoneService.generateNewID();
        this.phoneService.addPhone(phone).subscribe(()=>this.router.navigate(['/phones']))

      }
    }
  }



}
