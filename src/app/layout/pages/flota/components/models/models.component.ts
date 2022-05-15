import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { Model } from '../../store/list';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})
export class ModelsComponent implements OnInit {
  @Input() models !: Model[];
  imageUrl: string = environment.bucketUlr;

  constructor() { }

  ngOnInit(): void {
  }

}
