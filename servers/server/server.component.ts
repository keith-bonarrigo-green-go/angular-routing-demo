import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  allowEdit = 0;

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);

    this.route.params.subscribe(
      (params:Params)=>{
        //console.log(params);
        //this.allowEdit = queryParams['allowEdit'];
        //console.log( 'p is ' + queryParams['allowEdit']);
        this.server = this.serversService.getServer(+params['id'])
      }

    );
  }

    onEditServer(){
      this.router.navigate(['/servers', this.server.id, 'edit'], { queryParamsHandling: 'preserve' })
    }

    //this.server = this.serversService.getServer(id);
    /*this.route.params
    .subscribe(
         (params: Params) => {
           this.server = this.serversService.getServer(+params['id']);
         }
      );*/
    //console.log(this.route.queryParams);
    //this.server = this.serversService.getServer(1);


}
