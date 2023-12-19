import { Component } from '@angular/core';

@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrls: ['./detailspage.component.scss']
})
export class DetailspageComponent {
  timelineArray = [
    {
      title: 'timeline.title1',
      text: 'timeline.text1',
    },
    {
      title: 'timeline.title2',
      text: 'timeline.text2',
    },
    {
      title: 'timeline.title3',
      text: 'timeline.text3',
    },
    {
      title: 'timeline.title4',
      text: 'timeline.text4',
    },
    {
      title: 'timeline.title5',
      text: 'timeline.text5',
    },
    {
      title: 'timeline.title6',
      text: 'timeline.text6',
    },
    {
      title: 'timeline.title2',
      text: 'timeline.text2',
    },
    {
      title: 'timeline.title3',
      text: 'timeline.text3',
    },
    {
      title: 'timeline.title4',
      text: 'timeline.text4',
    },
    {
      title: 'timeline.title5',
      text: 'timeline.text5',
    },
    {
      title: 'timeline.title2',
      text: 'timeline.text2',
    },
    {
      title: 'timeline.title3',
      text: 'timeline.text3',
    },
    {
      title: 'timeline.title4',
      text: 'timeline.text4',
    },
    {
      title: 'timeline.title5',
      text: 'timeline.text5',
    },
    {
      title: 'timeline.title2',
      text: 'timeline.text2',
    },
    {
      title: 'timeline.title3',
      text: 'timeline.text3',
    },
    {
      title: 'timeline.title4',
      text: 'timeline.text4',
    },
    {
      title: 'timeline.title5',
      text: 'timeline.text5',
    }
  ];

  ngOnInit(){
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
    
        if (entry.isIntersecting) {
          entry.target.classList.add("side-slide-in");
        } else {
          // entry.target.classList.remove("side-slide");
        }
      });
    });
    
    document.addEventListener("DOMContentLoaded", () => {
      const hiddenElements = document.querySelectorAll('.side-slide-out');
      hiddenElements.forEach((el) => observer.observe(el as Element));
    });
  }
}



