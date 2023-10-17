import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../services/api/products/product.service";
import {ProductRepresentation} from "../services/api/models/product-representation";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  param: any;
  queryParam: any;
  politesse: any;

  constructor(private activatedRoute: ActivatedRoute, private service: ProductService) {
  }

  ngOnInit(): void {
    //this.param = this.activatedRoute.snapshot.params['username'];
    this.activatedRoute.params.subscribe(params => {this.param=params['firstname']});
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.queryParam=queryParams['lastname'];
      this.politesse=queryParams['politesse'];
    });
  }

}
