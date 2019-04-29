import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {

  matColors = ['ff1744', 'D500F9', '2979FF', '00E676', 'FFC400'];

  HOBBIES = 'assets/hobbies/';

  hs = [
    {
      name: 'Gaming',
      icon: 'videogame_asset',
      color: 'c3',
      bg: this.HOBBIES + 'gaming.jpg'
    },
    {
      name: 'Workout',
      icon: 'fitness_center',
      color: 'c2',
      bg: this.HOBBIES + 'gym.jpg'

    },
    {
      name: 'Music',
      icon: 'audiotrack',
      color: 'c5',
      bg: this.HOBBIES + 'music.jpg'

    }
    ,
    {
      name: 'Runnning',
      icon: 'directions_run',
      color: 'c4',
      bg: this.HOBBIES + 'running.jpg'
    },
  ];

  p = this.hs[0];
  constructor() { }

  getRandomColorClassName() {
    const r = Math.floor((Math.random() * 10)) % 5;
    return 'c' + r;
  }


  ngOnInit() {
  }

}
