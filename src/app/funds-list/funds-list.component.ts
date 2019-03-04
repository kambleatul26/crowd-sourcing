import { Component, OnInit } from '@angular/core';

class FundraiserBlogPost {
    constructor(
        public blog_title: string,
        public blog_author: string,
        public blog_amount: number,
        public blog_content: string,
        public blog_amount_recieved: number = 0
    ) {}
}

@Component({
    selector: 'app-funds-list',
    templateUrl: './funds-list.component.html',
    styleUrls: ['./funds-list.component.css']
})
export class FundsListComponent implements OnInit {
    public CampaingList: FundraiserBlogPost [] = [];

    constructor() { }

    ngOnInit() {
        this.CampaingList.push(new FundraiserBlogPost(
            'My title one',
            'UserName one',
            10000,
            'A woman is the full circle. Within her is the power to create, nurture and transform.'
        ));

        this.CampaingList.push(new FundraiserBlogPost(
            'My title two',
            'UserName two',
            20000,
            'Women\'s empowerment is intertwined with respect for human rights.'
        ));

        this.CampaingList.push(new FundraiserBlogPost(
            'My title three',
            'UserName three',
            30000,
            `A woman is like a tea bag - you never know how strong she is until she gets in hot water.`
        ));

    }


}
