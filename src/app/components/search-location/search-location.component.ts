import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-location',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-location.component.html',
  styleUrl: './search-location.component.css'
})
export class SearchLocationComponent {
  @Output() citySearch = new EventEmitter<string>();
  cityInput = new FormControl('', [Validators.required]);

  onSearch() {
    if (this.cityInput.valid) {
      this.citySearch.emit(this.cityInput.value || '');
    }
  }
}