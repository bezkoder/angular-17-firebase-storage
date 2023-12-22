import { Component, Input } from '@angular/core';
import { FileUploadService } from '../../services/file-upload.service';
import { FileUpload } from '../../models/file-upload.model';

@Component({
  selector: 'app-upload-details',
  templateUrl: './upload-details.component.html',
  styleUrls: ['./upload-details.component.css']
})
export class UploadDetailsComponent {
  @Input() fileUpload!: FileUpload;

  constructor(private uploadService: FileUploadService) { }

  deleteFileUpload(fileUpload: FileUpload): void {
    this.uploadService.deleteFile(fileUpload);
  }
}
