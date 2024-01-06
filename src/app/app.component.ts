import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Permission, User, UserPermission } from '../entities/entities';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'simple-app';

  userList:User[] = [
    {
      id: 1,
      firstName: "Yakup",
      lastNane: "Eyisan",
      age: 29
    },
    {
      id: 2,
      firstName: "Emrah",
      lastNane: "Yücel",
      age: 38,
    },
    {
      id: 3,
      firstName: "Murat",
      lastNane: "Yücel",
      age: 35
    }
  ];
  permissionList:Permission[] = [
    {
      id: 1,
      name: "Supervisor",
    },
    {
      id: 2,
      name: "Admin",
    },
    {
      id:3,
      name: "Guest",
    }
  ];
  userPermissionList:UserPermission[] = [
    {
      id: 1,
      userId: 1,
      permissionId: 1,
    },
    {
      id: 2,
      userId: 2,
      permissionId: 2,
    },
    {
      id: 3,
      userId: 2,
      permissionId: 3,
    },
    {
      id: 4,
      userId: 3,
      permissionId: 2,
    }
  ];

  getUserById (id:number):any | undefined {
    return this.userList.map(user=>{return {id:user.id, fullName:user.firstName + " " + this.makeMask(user.lastNane)} }).find(user=>user.id ==id)
  }

  getPermissionById (id:number):Permission | undefined {
    return this.permissionList.find(permission=>permission.id == id)
  }

  makeMask (text:string):string {
    return text.substring(0,2) + "***"
  }
}
