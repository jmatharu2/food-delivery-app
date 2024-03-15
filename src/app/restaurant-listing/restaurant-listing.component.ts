
import { Component } from '@angular/core';
import { Restaurant } from '.././../Shared/models/Restaurant';
import { RestaurantService } from '../restaurant-listing/service/restaurant.service';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-restaurant-listing',
    templateUrl: './restaurant-listing.component.html',
    styleUrls: ['./restaurant-listing.component.css'],
    standalone: true,
    imports: [NgFor ]
})
export class RestaurantListingComponent {

  public restaurantList: Restaurant[];

  ngOnInit() {
    this.getAllRestaurants();
  }

  // constructor(private router: Router, private restaurantService: RestaurantService) { }
   constructor(private restaurantService: RestaurantService, private router: Router) { }

  getAllRestaurants() {
    this.restaurantService.getAllRestaurants().subscribe(
      data => {
        this.restaurantList = data;
      }
    )
  }
  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  getRandomImage(): string {
    const imageCount = 8; // Adjust this number based on the number of images in your asset folder
    const randomIndex = this.getRandomNumber(1, imageCount);
    return `${randomIndex}.jpg`; // Replace with your image filename pattern
  }

  onButtonClick(id: number) {
    console.log("Calling onButtonClick with id "+ id);
    this.router.navigate(['/food-catalogue', id])
        .then(nav => {
          console.log(nav); // true if navigation is successful
        }, err => {
          console.log(err) // when there's an error
        });
  }
}
