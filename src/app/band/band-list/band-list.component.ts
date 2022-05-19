import { Component, OnInit } from '@angular/core';
import { Band } from '../band';
import { BandDetailComponent } from '../band-detail/band-detail.component';
import { BandService } from '../band.service';

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.css']
})
export class BandListComponent implements OnInit {

  selectedBand!: Band;
  selected : Boolean = false;
  bands: Array<Band>=[];
  constructor(private bandService: BandService) { }

  onSelected(band: Band): void {
    this.selected = true;
    this.selectedBand = band;
  }

  getBands():void{
    this.bandService.getBands().subscribe((bandsService)=>{this.bands=bandsService});
  console.log("servicioLlamado");
  }

  calcularPromedioIntegrantes():number{
    let totalIntes:number = 0;
    for(let banda of this.bands)
    {
        totalIntes+=banda.numberOfMembers;
    }
    return Math.round(totalIntes/this.bands.length);
}

  ngOnInit() {
    this.getBands();
  }

}
