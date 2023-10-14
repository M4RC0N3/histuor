// shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabNavigation } from './tab-navigation/tab-navigation';
import { IonicModule } from '@ionic/angular';
import { Categorie } from './categorie/categorie';
@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [TabNavigation, Categorie],
  exports: [TabNavigation, Categorie] // Exporte os componentes que deseja compartilhar
})
export class ComponentsModule {}