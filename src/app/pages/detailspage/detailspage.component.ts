import { Component } from '@angular/core';

@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrls: ['./detailspage.component.scss']
})
export class DetailspageComponent {
  timelineArray = [
    {
      title: 'details.timeline.title1',
      text: 'details.timeline.text1',
    },
    {
      title: 'details.timeline.title2',
      text: 'details.timeline.text2',
    },
    {
      title: 'details.timeline.title3',
      text: 'details.timeline.text3',
    },
    {
      title: 'details.timeline.title4',
      text: 'details.timeline.text4',
    },
    {
      title: 'details.timeline.title5',
      text: 'details.timeline.text5',
    },
    {
      title: 'details.timeline.title6',
      text: 'details.timeline.text6',
    }
  ];

  ngOnInit(){
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
    
        if (entry.isIntersecting) {
          entry.target.classList.add("alternated-side-slide-in");
        } else {
        }
      });
    });
    
    document.addEventListener("DOMContentLoaded", () => {
      const hiddenElements = document.querySelectorAll('.alternated-side-slide-out');
      hiddenElements.forEach((el) => observer.observe(el as Element));
    });
  }
}



