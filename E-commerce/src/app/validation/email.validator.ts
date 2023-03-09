import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { map, Observable } from "rxjs";
import { EmailValidatorService } from "../services/email-validator.service";




export class EmailValidator{
    static createValidator(emailService:EmailValidatorService):AsyncValidatorFn{
        return (control:AbstractControl):Observable<ValidationErrors | null> =>{
            return emailService.s_email_check(control.value).pipe(
                map((result:boolean)=> result ?    {emailexist :true}: null)
            );
        };
    }
}