import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PersonasService } from 'src/app/services/personas.service';
import { SetPersonasComponent } from '../set-personas/set-personas.component';
import { ConfirmacionComponent } from '../confirmacion/confirmacion.component';
import { IPersonas } from 'src/app/interface/personas';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
  public personas: any[]=[]
  
  constructor(
    private personasService :PersonasService,
    private matDialog: MatDialog
  ){}
  ngOnInit():void{
    this.getPersonas()

  }
  getPersonas() {
    this.personas = []
    this.personasService.getPersonas().subscribe(resp => {
      this.personas = resp
      console.log(resp)
    });
  }
  registrarPersona() {
    const dialogRef = this.matDialog.open(SetPersonasComponent, {
      width: '600px',
      panelClass: 'fondo',
      data: null
    })
    dialogRef.afterClosed().subscribe(() => {
      this.getPersonas();
    });
  }
  actualizarPersona( persona: any){
    alert(persona.idPersonas);
    localStorage.setItem("usuario",JSON.stringify(persona));
    const dialogRef = this.matDialog.open(SetPersonasComponent, {
      width: '580px',
      height:'450px',
      panelClass: 'fondo',
      data: null
    })
    dialogRef.afterClosed().subscribe(() => {
      this.getPersonas();
    });
  }
  openConfirmationDialog(persona: IPersonas): void {
    const dialogRef = this.matDialog.open(ConfirmacionComponent, {
      width: '300px',
      data: {
        message: '¿Estás seguro de eliminar el cliente seleccionado?',
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.personasService.deletePersonas(persona.idPersonas).subscribe(resp => {
          if (resp) {
            alert("Se elmino correctamente");
            this.ngOnInit();
          } else { alert("No se pudo eliminar la persona") }
        });
        console.log('Usuario confirmó');
      } else {
        console.log('Usuario canceló');
      }
    });
  }

}
