import { Component } from '@angular/core';

@Component({
  selector: 'rad-avatar',
  template: `
    <div class="rad-avatar" radBg="success">
      <img src="assets/images/portraits/photo.png" alt="portrait" />
    </div>
  `,
  styleUrls: ['./avatar.component.scss']
})
export class RadAvatarComponent {}

