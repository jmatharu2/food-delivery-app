import { Routes } from '@angular/router';
import { RestaurantListingComponent } from './restaurant-listing/restaurant-listing.component';
import { FoodCatalogueComponent } from './food-catalogue/components/food-catalogue.component';
import { OrderSummaryComponent } from './order-summary/component/order-summary.component';

export const routes: Routes = [
  // {'path': '',redirectTo: 'component: RestaurantListingComponent', pathMatch: 'full'}
  { path: '', component: RestaurantListingComponent },
  { path: 'food-catalogue/:id', component:FoodCatalogueComponent },
  { path: 'orderSummary', component:OrderSummaryComponent}
];
