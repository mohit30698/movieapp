import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {

  movie!: Movie;


  form: FormGroup = new FormGroup({
    'movieName': new FormGroup(''),
    'theatreName': new FormGroup(''),

  });


  constructor(private toastr: ToastrService, private appService: AppServiceService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      movieName: ['', Validators.required],
      theatreName: ['', Validators.required],
      seatAvailable: ['', Validators.required],
    });


  }

  onSubmit() {

    this.movie = {
      movieName: this.form.controls['movieName'].value,
      theatreName: this.form.controls['theatreName'].value,
    };

    console.log(this.movie);

    this.appService.addMovie(this.movie).subscribe(data => {

      this.toastr.success("Movie Added Successfully.", 'Success');
      this.router.navigate(['/home']);


    }, error => {
      this.toastr.error("Something went wrong", 'Error');
    })
  }


}




interface Movie {
  movieName: string,
  theatreName: string,
}



