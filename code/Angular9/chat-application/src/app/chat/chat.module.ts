import { ChatRouteGuardService } from './chat-route-guard.service';
import { RemoveSpecialCharPipe } from './../shared/pipe/remove-special-char.pipe';
import { SharedModule } from './../shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoxComponent } from './chat-box/chat-box.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forChild([
      { path: 'chat', component: ChatBoxComponent, canActivate: [ChatRouteGuardService] }
    ]),
    SharedModule
  ],
  declarations: [ChatBoxComponent, RemoveSpecialCharPipe],
  providers: [ChatRouteGuardService]
})
export class ChatModule { }
