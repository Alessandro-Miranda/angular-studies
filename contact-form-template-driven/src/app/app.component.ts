import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'template-driven-form';
  name = {
    firstName: '',
    lastName: '',
  }
  email = '';
  queryType = '';
  message = '';
  accepted = false;

  onSubmit() {
    console.log(`Seu nome é ${this.name.firstName} ${this.name.lastName}, seu e-mail é: ${this.email} a query type selecionada foi ${this.queryType} e vc digitou a mensagem ${this.message} e vc escolheu ${this.accepted} para consentimento`);
  }
}
