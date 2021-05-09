import { Component, Output, EventEmitter, OnInit, Input} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter(); 
  @Output() onDebounde: EventEmitter<string> = new EventEmitter();

  @Input() leyenda:string="";

  debouncer: Subject <string> = new Subject();

  termino:string = "";

  ngOnInit(){
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(valor => {
        console.log("deboncer:", valor);
        this.onDebounde.emit(valor);
    });
  }


  buscar(){
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(){
    this.debouncer.next( this.termino );
  }



}
