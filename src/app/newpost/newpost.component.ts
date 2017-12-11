import { Component, OnInit, Input,Output, EventEmitter  } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})

export class NewPostComponent {
  @Input() childNewPost: Post[];
  @Output() newSender = new EventEmitter();

  postId: number = 2;

  NewItems(title: string, date: string, preview: string, author: string, link: string, id: number){
    this.postId += 1;
    this.newSender.emit(new Post(title, date, preview, author, link, this.postId));

  }
}
