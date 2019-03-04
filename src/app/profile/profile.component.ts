import { Component, OnInit } from '@angular/core';

class Posts {
  constructor(
    public blog_title: string,
    public blog_author: string,
    public blog_amount: number,
    public blog_content: string,
    public blog_amount_recieved: number= 0
  ) { }
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  public PostList: Posts[] = [];

  constructor() { }

  ngOnInit() {
    this.PostList.push(new Posts('Test Blog', 'Blog Author', 10000, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 5000));
    this.PostList.push(new Posts('Test Blog 2', 'Blog Author Again', 15000, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 1000));
  }

}
