import { Component, OnInit } from '@angular/core';

class fundraiser_blog_post {
    constructor(
        public blog_title:string,
        public blog_author:string,
        public blog_amount:number,
        public blog_content:string,
        public blog_amount_recieved:number=0
    ){}
}

@Component({
    selector: 'app-funds-list',
    templateUrl: './funds-list.component.html',
    styleUrls: ['./funds-list.component.css']
})
export class FundsListComponent implements OnInit {
    public CampaingList:fundraiser_blog_post [] = [];

    constructor() { }

    ngOnInit() {
        this.CampaingList.push(new fundraiser_blog_post(
            "My title",
            "UserName",
            10000,
            `Struggling to pen down a fundraiser story on your own? No worries, just use the template below:Hi,My name is (your name) and I am raising funds for (name of your project). This initiative/project/film/novel is about (add a brief description). I am an aspiring director/ singer/ writer/ musician (write a bit about your background) and want to create this for (what is the purpose of the project? How will it benefit?). Please help me fulfill my dream by contributing towards my project or sharing this fundraiser with your friends and family! We are grateful for your help!`,5000
        ));

        this.CampaingList.push(new fundraiser_blog_post(
            "My title",
            "UserName",
            10000,
            `Struggling to pen down a fundraiser story on your own? No worries, just use the template below:Hi,My name is (your name) and I am raising funds for (name of your project). This initiative/project/film/novel is about (add a brief description). I am an aspiring director/ singer/ writer/ musician (write a bit about your background) and want to create this for (what is the purpose of the project? How will it benefit?). Please help me fulfill my dream by contributing towards my project or sharing this fundraiser with your friends and family! We are grateful for your help!`,5000
        ));

        this.CampaingList.push(new fundraiser_blog_post(
            "My title",
            "UserName",
            10000,
            `Struggling to pen down a fundraiser story on your own? No worries, just use the template below:Hi,My name is (your name) and I am raising funds for (name of your project). This initiative/project/film/novel is about (add a brief description). I am an aspiring director/ singer/ writer/ musician (write a bit about your background) and want to create this for (what is the purpose of the project? How will it benefit?). Please help me fulfill my dream by contributing towards my project or sharing this fundraiser with your friends and family! We are grateful for your help!`,5000
        ));

        this.CampaingList.push(new fundraiser_blog_post(
            "My title",
            "UserName",
            10000,
            `Struggling to pen down a fundraiser story on your own? No worries, just use the template below:Hi,My name is (your name) and I am raising funds for (name of your project). This initiative/project/film/novel is about (add a brief description). I am an aspiring director/ singer/ writer/ musician (write a bit about your background) and want to create this for (what is the purpose of the project? How will it benefit?). Please help me fulfill my dream by contributing towards my project or sharing this fundraiser with your friends and family! We are grateful for your help!`,5000
        ));

    }


}
