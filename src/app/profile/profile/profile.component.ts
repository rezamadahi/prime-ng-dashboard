import { Component, OnInit } from '@angular/core';

import {Galleria} from "primeng/galleria";
import { Message } from "primeng/api";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  profileImage: string = '';
  images = [
    { source: "http://i.pravatar.cc/300?u=Anne", title: "Anne" },
    { source: "http://i.pravatar.cc/300?u=Kerri", title: "Kerri" },
    { source: "http://i.pravatar.cc/300?u=Mary", title: "Mary" },
    { source: "http://i.pravatar.cc/300?u=Nancy", title: "Nancy" },
    { source: "http://i.pravatar.cc/300?u=Peta", title: "Peta" },
  ];
  selectedProfile: any;
  messages : Message[] = [];

  constructor() {}

  onImageSelected(event: any) {
    console.log(JSON.stringify(event));
  }

  onDragStart(galleria: any) {
    this.selectedProfile = this.images[galleria.activeIndex];
    galleria.stopSlideshow();
  }

  onPicDrop() {
    this.profileImage = this.selectedProfile.source;
    this.messages.push({ severity: "info", summary: "New Profile", detail: `Changed pic to ${this.selectedProfile.title}` });
  }

}
