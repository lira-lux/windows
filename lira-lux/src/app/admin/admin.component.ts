import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {StorageService} from '../storage.service';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  form: FormGroup;
  items: any [] = [];
  @ViewChild('val') val;
  constructor(public formBuilder: FormBuilder, public router: Router, public storageService: StorageService) {
  }

  back() {
    this.router.navigate( ['/']);
  }

  ngOnInit(): void {
    this.getItems();
    const group = {};
    this.items.forEach(inputTemplate => {
      group[inputTemplate.cardTitle] = new FormControl(inputTemplate.price);
    });
    this.form = new FormGroup(group);
  }
  getItems(){
    this.items = this.storageService.getCards();
  }
  update() {

    this.items.forEach(item => {
      for (const key in this.form.value) {
        if (item.cardTitle === key) {
          item.price = this.form.value[key];
        }
      }
    });
    this.storageService.updateCards(this.items);
  }
}
