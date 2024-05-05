import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { info } from 'src/app/mock/info.mock';
import { Info } from 'src/app/model/info';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public email: string = '';
  private infoUser: Info = info;

  formGroup: FormGroup;

  public nameError: boolean = false;
  public emailError: boolean = false;
  public messageError: boolean = false;

  isOpen: boolean = false;
  fadeOut: boolean = false;

  constructor(private formBuilder: FormBuilder, private clipboard: Clipboard) {
    this.formGroup = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.email = this.infoUser.email;
  }

  listeningForm(): void {
    const values = this.formGroup.value;
    Object.keys(values).forEach((key) => {
      const control = this.formGroup.get(key);
      if (control) {
        control.setValue(values[key]);
        if (control.valid) {
          if (key === 'name') {
            this.nameError = false; // Activar el indicador de error para el nombre
          } else if (key === 'email') {
            this.emailError = false; // Activar el indicador de error para el email
          } else if (key === 'message') {
            this.messageError = false; // Activar el indicador de error para el mensaje
          }
        }
      }
    });
  }

  copyToClipboard() {
    const emailInput = document.getElementById(
      'emailInput'
    ) as HTMLInputElement;
    this.clipboard.copy(emailInput.value);
    const copyMessage: any = document.getElementById('copyMessage');
    copyMessage.style.display = 'block';
    setTimeout(() => {
      copyMessage.style.display = 'none';
    }, 2000); // Oculta el mensaje después de 2 segundos
  }

  toggleCollapse() {
    if (!this.isOpen) {
      this.isOpen = true;
      // Asegúrate de que isOpen se actualice antes de cambiar fadeOut
      setTimeout(() => {
        this.fadeOut = false;
      }, 0);
    } else {
      this.fadeOut = true;
      setTimeout(() => {
        this.isOpen = false;
      }, 2000);
    }
  }

  onSubmit() {
    this.nameError = false;
    this.emailError = false;
    this.messageError = false;

    if (this.formGroup.invalid) {
      this.invalidCheckForm(this.formGroup);
    }

    if (this.formGroup.valid) {
      const payload = {
        name: this.formGroup?.value.name,
        email: this.formGroup?.value.email,
        message: this.formGroup?.value.message,
      };
      console.log(JSON.stringify(payload));
    }
  }

  invalidCheckForm(form: FormGroup): void {
    const values = form.value;
    Object.keys(values).forEach((key) => {
      const control = this.formGroup.get(key);
      if (control) {
        control.setValue(values[key]);

        if (control.invalid) {
          if (key === 'name') {
            this.nameError = true; // Activar el indicador de error para el nombre
          } else if (key === 'email') {
            this.emailError = true; // Activar el indicador de error para el email
          } else if (key === 'message') {
            this.messageError = true; // Activar el indicador de error para el mensaje
          }
        }
      }
    });
  }
}
