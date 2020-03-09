import { Component, OnInit } from '@angular/core';
import {ClientsServiceService} from '../services/clients/clients-service.service';

export class Client {
  login: string;
  mdp: string;
}

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  tabClients: Array<Client>;

  constructor(private service: ClientsServiceService) {}

  ngOnInit(): void {
    this.initTableau();
  }

  submitConnexion(log: string, passe: string): boolean {
    for (const client of this.tabClients) {
      if (client.login === log && client.mdp === passe) {
        return true;
      } else {
        return false;
      }
    }
  }

  initTableau() {
    this.service.getClients().subscribe(data => this.tabClients = data);
  }

}
