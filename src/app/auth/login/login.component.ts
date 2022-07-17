import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/auth/authentication.service';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public isPassword: boolean = true;

  constructor(
    public router: Router,
    private formBuild: FormBuilder,
    private storageService: StorageService,
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  public changeType(): void{
    this.isPassword = !this.isPassword;
  }

  public get type(): string[]{
    return this.isPassword ? ['password', 'eye'] : ['text', 'eye-slash'];
  }

  public onLogin(): void{
    const {email, password, remember} = this.loginForm.value;
    const logged = this.authService.login(email, password);
    logged && this.router.navigate(['/dashboard/solicite-card']);
    (logged && remember) && this.storageService.setUser({email, password});
  }

  private createForm(): void {
    this.loginForm = this.formBuild.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember: [false]
    });
  }

}
