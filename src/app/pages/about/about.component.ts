import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
// import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-about',
  standalone: true,
  // imports: [HttpClientModule],
  providers: [ApiService],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
