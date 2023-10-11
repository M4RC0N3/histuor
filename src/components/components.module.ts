// shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabNavigation } from './tab-navigation/tab-navigation';
import { IonicModule } from '@ionic/angular';
@NgModule({
  declarations: [TabNavigation],
  imports: [CommonModule, IonicModule],
  exports: [TabNavigation] // Exporte os componentes que deseja compartilhar
})
export class ComponentsModule {}