import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DogDetailsService} from '../../services/dog-details/dog-details.service';
import {Dog} from '../../domain/Dog';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dog-details',
  templateUrl: './dog-details.component.html',
  styleUrls: ['./dog-details.component.css']
})
export class DogDetailsComponent implements OnInit {

  dog: Dog;

  public selectedFile;
  public event1;
  imgURL: any;
  receivedImageData: any;
  base64Data: any;
  convertedImage: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private dogDetailsService: DogDetailsService,
              private httpClient: HttpClient) { }

  ngOnInit() {
    this.getDogDetails();
    this.getDogImage();
  }

  getDogDetails(): void {
    const dogId = this.route.snapshot.params.id;
    this.dogDetailsService.getDogDetails(dogId).subscribe(dog => this.dog = dog);
  }

  getDogImage():void{
    const dogId = this.route.snapshot.params.id;
    this.httpClient.get(`http://localhost:8080/dogs/${dogId}/image`).subscribe(image => {
      //@ts-ignore
      this.convertedImage = `data:image/png;base64,${image.pic}`;
    })
  }

  public onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    // Below part is used to display the selected image
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };
  }


  // This part is for uploading
  onUpload() {

    const dogId = this.route.snapshot.params.id;
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);

    this.httpClient.post(`http://localhost:8080/dogs/${dogId}/image`, uploadData)
      .subscribe(
        res => {console.log(res);
          this.receivedImageData = res;
          this.base64Data = this.receivedImageData.pic;
          this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data; },
        err => console.log('Error Occured duringng saving: ' + err)
      );
  }
}
