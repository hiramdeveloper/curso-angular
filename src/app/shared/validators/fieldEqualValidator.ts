import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export function controlFieldEqualValidation (fieldA: string, fieldB: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const formGroup = control as FormGroup;
        const fieldUno = formGroup.get(fieldA)?.value;
        const fieldDos = formGroup.get(fieldB)?.value;

        if (fieldUno === fieldDos) {
            return null;
        } else {
            return { valuesNotMatch: true }
        }
    }
}