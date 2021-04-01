import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  currentPerson = null;
  message = '';

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getPerson(this.route.snapshot.paramMap.get('id'));
  }

  getPerson(id): void {
    this.personService.getAll()
      .subscribe(
        persons => {
          let p = persons.filter(proj => proj.id == id);
          this.currentPerson = p[0];
        },
        error => {
          console.log(error);
        });


  }

  updatePerson(): void {
    this.personService.update(this.currentPerson.id, this.currentPerson)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Person was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deletePerson(): void {
    this.personService.delete(this.currentPerson.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/persons']);
        },
        error => {
          console.log(error);
        });
  }
}