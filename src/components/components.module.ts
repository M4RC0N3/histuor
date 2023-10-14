// shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabNavigation } from './tab-navigation/tab-navigation';
import { IonicModule } from '@ionic/angular';
import { Categorie } from './categorie/categorie';
import { Place } from './place/place';
@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [TabNavigation, Categorie, Place],
  exports: [TabNavigation, Categorie, Place] // Exporte os componentes que deseja compartilhar
})
export class ComponentsModule {}