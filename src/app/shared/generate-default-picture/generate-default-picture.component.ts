import { Component, Input, OnInit } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { AppConfigService } from '../helpers/app-config.service';

@Component({
  selector: 'app-generate-default-picture',
  templateUrl: './generate-default-picture.component.html',
  styleUrls: ['./generate-default-picture.component.scss']
})
export class GenerateDefaultPictureComponent implements OnInit {
  color: string;
  alphabet =
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() theLetter: string;

  constructor(private config: AppConfigService) {
  }

  ngOnInit() {

    if (!isNullOrUndefined(this.firstName) && !isNullOrUndefined(this.lastName)) {
      this.theLetter = (this.firstName[0]).toUpperCase() + '' + (this.lastName[0].toUpperCase());
    }

    if (!isNullOrUndefined(this.theLetter)) {
      const index = this.alphabet.indexOf(this.theLetter[0]); // find the alphabet index
      const bgColors = this.config.getConfig().colors; // get all the colors from config
      const colorIndex = index % bgColors.length; // pick the color
      this.color = bgColors[colorIndex]; // set the color
    }
  }


}






