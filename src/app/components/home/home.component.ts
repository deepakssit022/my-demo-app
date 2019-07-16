import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from "../../services/data.services";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message: any;
  userData: any = [
    {
      "picture": "http://placehold.it/32x32",
      "age": 39,
      "eyeColor": "blue",
      "name": "Corrine Parsons",
      "gender": "female",
      "company": "TUBALUM",
      "email": "corrineparsons@tubalum.com",
      "phone": "+1 (808) 450-2472",
      "address": "194 Landis Court, Wikieup, Pennsylvania, 1677"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 34,
      "eyeColor": "green",
      "name": "Odom Burgess",
      "gender": "male",
      "company": "UPDAT",
      "email": "odomburgess@updat.com",
      "phone": "+1 (979) 417-2233",
      "address": "778 School Lane, Columbus, American Samoa, 7017"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 40,
      "eyeColor": "brown",
      "name": "Claudine Rojas",
      "gender": "female",
      "company": "QUANTASIS",
      "email": "claudinerojas@quantasis.com",
      "phone": "+1 (990) 536-3783",
      "address": "203 Hicks Street, Gilgo, Tennessee, 460"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 22,
      "eyeColor": "blue",
      "name": "Marissa Lopez",
      "gender": "female",
      "company": "EXTRAWEAR",
      "email": "marissalopez@extrawear.com",
      "phone": "+1 (800) 470-2080",
      "address": "865 Hart Place, Yardville, District Of Columbia, 6702"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 21,
      "eyeColor": "brown",
      "name": "Massey Mcfarland",
      "gender": "male",
      "company": "XEREX",
      "email": "masseymcfarland@xerex.com",
      "phone": "+1 (853) 419-3959",
      "address": "723 Broome Street, Kaka, Maine, 2708"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 32,
      "eyeColor": "green",
      "name": "Mercedes Mayo",
      "gender": "female",
      "company": "ZYTRAX",
      "email": "mercedesmayo@zytrax.com",
      "phone": "+1 (937) 403-3617",
      "address": "281 Newport Street, Teasdale, Michigan, 2185"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 29,
      "eyeColor": "blue",
      "name": "Clarice Bauer",
      "gender": "female",
      "company": "KYAGURU",
      "email": "claricebauer@kyaguru.com",
      "phone": "+1 (879) 537-3489",
      "address": "578 Beaver Street, Calverton, New Hampshire, 2163"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 40,
      "eyeColor": "blue",
      "name": "Misty Morton",
      "gender": "female",
      "company": "NIKUDA",
      "email": "mistymorton@nikuda.com",
      "phone": "+1 (855) 565-3039",
      "address": "343 Moffat Street, Delwood, Wyoming, 9037"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 37,
      "eyeColor": "blue",
      "name": "Guthrie Sims",
      "gender": "male",
      "company": "QUADEEBO",
      "email": "guthriesims@quadeebo.com",
      "phone": "+1 (902) 517-3324",
      "address": "628 Fleet Walk, Nord, Delaware, 281"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 23,
      "eyeColor": "green",
      "name": "Joni Hardy",
      "gender": "female",
      "company": "QUONATA",
      "email": "jonihardy@quonata.com",
      "phone": "+1 (953) 420-2827",
      "address": "461 Sunnyside Court, Blende, Guam, 4715"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 39,
      "eyeColor": "brown",
      "name": "Charmaine Nichols",
      "gender": "female",
      "company": "PETICULAR",
      "email": "charmainenichols@peticular.com",
      "phone": "+1 (903) 553-3051",
      "address": "104 Buffalo Avenue, Tampico, Northern Mariana Islands, 2702"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 24,
      "eyeColor": "blue",
      "name": "Parrish Richmond",
      "gender": "male",
      "company": "JETSILK",
      "email": "parrishrichmond@jetsilk.com",
      "phone": "+1 (985) 571-2292",
      "address": "116 Irwin Street, Farmington, Washington, 9234"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 34,
      "eyeColor": "brown",
      "name": "Roberson Noble",
      "gender": "male",
      "company": "KNEEDLES",
      "email": "robersonnoble@kneedles.com",
      "phone": "+1 (993) 556-3173",
      "address": "545 Thornton Street, Maury, Oregon, 6970"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 35,
      "eyeColor": "brown",
      "name": "Marshall Mcintosh",
      "gender": "male",
      "company": "KANGLE",
      "email": "marshallmcintosh@kangle.com",
      "phone": "+1 (976) 407-3853",
      "address": "566 Polhemus Place, Coyote, Illinois, 8167"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 23,
      "eyeColor": "green",
      "name": "Isabelle Livingston",
      "gender": "female",
      "company": "ZOMBOID",
      "email": "isabellelivingston@zomboid.com",
      "phone": "+1 (922) 417-3115",
      "address": "302 Whitney Avenue, Greer, Ohio, 1479"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 27,
      "eyeColor": "green",
      "name": "Benjamin Bentley",
      "gender": "male",
      "company": "BLEEKO",
      "email": "benjaminbentley@bleeko.com",
      "phone": "+1 (996) 528-2973",
      "address": "852 Butler Street, Aguila, New York, 4420"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 21,
      "eyeColor": "blue",
      "name": "Marcella Rocha",
      "gender": "female",
      "company": "OULU",
      "email": "marcellarocha@oulu.com",
      "phone": "+1 (879) 570-3342",
      "address": "525 Canda Avenue, Machias, Indiana, 576"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 21,
      "eyeColor": "brown",
      "name": "Beatriz Villarreal",
      "gender": "female",
      "company": "GEOFORMA",
      "email": "beatrizvillarreal@geoforma.com",
      "phone": "+1 (906) 428-3701",
      "address": "698 Veterans Avenue, Allendale, Connecticut, 5495"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 22,
      "eyeColor": "green",
      "name": "Darcy Mosley",
      "gender": "female",
      "company": "ROCKABYE",
      "email": "darcymosley@rockabye.com",
      "phone": "+1 (863) 546-3815",
      "address": "482 Coffey Street, Benson, Mississippi, 6076"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 27,
      "eyeColor": "blue",
      "name": "Ballard Barnes",
      "gender": "male",
      "company": "ZENTURY",
      "email": "ballardbarnes@zentury.com",
      "phone": "+1 (902) 565-2993",
      "address": "100 Halsey Street, Brethren, Puerto Rico, 5542"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 28,
      "eyeColor": "brown",
      "name": "Delacruz Mcknight",
      "gender": "male",
      "company": "ULTRIMAX",
      "email": "delacruzmcknight@ultrimax.com",
      "phone": "+1 (844) 539-2137",
      "address": "497 Pilling Street, Floris, Maryland, 7621"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 28,
      "eyeColor": "green",
      "name": "Mccray Andrews",
      "gender": "male",
      "company": "FUTURIS",
      "email": "mccrayandrews@futuris.com",
      "phone": "+1 (900) 455-3680",
      "address": "106 Gotham Avenue, Camas, Rhode Island, 4441"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 22,
      "eyeColor": "blue",
      "name": "Young House",
      "gender": "male",
      "company": "DEVILTOE",
      "email": "younghouse@deviltoe.com",
      "phone": "+1 (980) 500-3387",
      "address": "269 Bedford Avenue, Gasquet, Texas, 538"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 36,
      "eyeColor": "brown",
      "name": "Avila Williamson",
      "gender": "male",
      "company": "VALREDA",
      "email": "avilawilliamson@valreda.com",
      "phone": "+1 (820) 570-2688",
      "address": "714 Java Street, Derwood, California, 2378"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 34,
      "eyeColor": "brown",
      "name": "Fernandez Castaneda",
      "gender": "male",
      "company": "COMSTAR",
      "email": "fernandezcastaneda@comstar.com",
      "phone": "+1 (924) 588-3409",
      "address": "504 McKinley Avenue, Deltaville, Alabama, 2063"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 25,
      "eyeColor": "green",
      "name": "Celina Maldonado",
      "gender": "female",
      "company": "FURNITECH",
      "email": "celinamaldonado@furnitech.com",
      "phone": "+1 (800) 435-3865",
      "address": "173 Bethel Loop, Nipinnawasee, Minnesota, 3784"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 20,
      "eyeColor": "brown",
      "name": "Betsy Olsen",
      "gender": "female",
      "company": "LUMBREX",
      "email": "betsyolsen@lumbrex.com",
      "phone": "+1 (866) 424-3900",
      "address": "440 Everit Street, Brandermill, North Carolina, 2823"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 35,
      "eyeColor": "green",
      "name": "Brewer Pollard",
      "gender": "male",
      "company": "RUBADUB",
      "email": "brewerpollard@rubadub.com",
      "phone": "+1 (970) 449-3021",
      "address": "196 Kansas Place, Davenport, Alaska, 2806"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 33,
      "eyeColor": "brown",
      "name": "Grace Acosta",
      "gender": "female",
      "company": "IRACK",
      "email": "graceacosta@irack.com",
      "phone": "+1 (837) 591-3862",
      "address": "839 Monroe Place, Steinhatchee, Idaho, 4414"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 36,
      "eyeColor": "brown",
      "name": "Theresa Wade",
      "gender": "female",
      "company": "XOGGLE",
      "email": "theresawade@xoggle.com",
      "phone": "+1 (970) 433-3055",
      "address": "455 Madoc Avenue, Waukeenah, Montana, 5810"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 36,
      "eyeColor": "blue",
      "name": "Workman Palmer",
      "gender": "male",
      "company": "SYBIXTEX",
      "email": "workmanpalmer@sybixtex.com",
      "phone": "+1 (890) 455-2869",
      "address": "178 Devon Avenue, Moquino, Marshall Islands, 5426"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 26,
      "eyeColor": "green",
      "name": "Guy Fowler",
      "gender": "male",
      "company": "CRUSTATIA",
      "email": "guyfowler@crustatia.com",
      "phone": "+1 (966) 411-3469",
      "address": "847 Halleck Street, Windsor, Hawaii, 3106"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 36,
      "eyeColor": "green",
      "name": "Deann Talley",
      "gender": "female",
      "company": "PRINTSPAN",
      "email": "deanntalley@printspan.com",
      "phone": "+1 (803) 560-3595",
      "address": "628 Essex Street, Dixonville, Arkansas, 1889"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 40,
      "eyeColor": "blue",
      "name": "Lindsey Carpenter",
      "gender": "female",
      "company": "BULLJUICE",
      "email": "lindseycarpenter@bulljuice.com",
      "phone": "+1 (825) 570-3048",
      "address": "124 Brigham Street, Catharine, Georgia, 7357"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 39,
      "eyeColor": "blue",
      "name": "Esperanza Mooney",
      "gender": "female",
      "company": "GEEKY",
      "email": "esperanzamooney@geeky.com",
      "phone": "+1 (821) 551-3058",
      "address": "102 Verona Street, Wilmington, Colorado, 1699"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 23,
      "eyeColor": "brown",
      "name": "Barr Calderon",
      "gender": "male",
      "company": "STREZZO",
      "email": "barrcalderon@strezzo.com",
      "phone": "+1 (831) 561-2040",
      "address": "839 Cadman Plaza, Jacksonburg, New Jersey, 5972"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 40,
      "eyeColor": "green",
      "name": "Vicky Hopkins",
      "gender": "female",
      "company": "MARKETOID",
      "email": "vickyhopkins@marketoid.com",
      "phone": "+1 (801) 492-3638",
      "address": "230 Maujer Street, Matheny, Nebraska, 4298"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 32,
      "eyeColor": "green",
      "name": "Mcclain Nelson",
      "gender": "male",
      "company": "PRIMORDIA",
      "email": "mcclainnelson@primordia.com",
      "phone": "+1 (998) 552-3700",
      "address": "213 Plymouth Street, Marshall, Nevada, 2402"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 29,
      "eyeColor": "brown",
      "name": "Lucas Middleton",
      "gender": "male",
      "company": "SNACKTION",
      "email": "lucasmiddleton@snacktion.com",
      "phone": "+1 (800) 480-2146",
      "address": "833 Bristol Street, Wanamie, Virginia, 3750"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 20,
      "eyeColor": "green",
      "name": "Blanchard Harrison",
      "gender": "male",
      "company": "CORECOM",
      "email": "blanchardharrison@corecom.com",
      "phone": "+1 (994) 546-2642",
      "address": "185 Clermont Avenue, Forbestown, New Mexico, 1794"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 25,
      "eyeColor": "blue",
      "name": "Snider Cameron",
      "gender": "male",
      "company": "PERMADYNE",
      "email": "snidercameron@permadyne.com",
      "phone": "+1 (963) 573-3308",
      "address": "511 Bragg Street, Loretto, Kansas, 2553"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 20,
      "eyeColor": "brown",
      "name": "Gray Barrera",
      "gender": "male",
      "company": "GOLOGY",
      "email": "graybarrera@gology.com",
      "phone": "+1 (935) 567-2182",
      "address": "117 Marconi Place, Cochranville, Arizona, 7029"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 36,
      "eyeColor": "blue",
      "name": "Lyons Walls",
      "gender": "male",
      "company": "VIRXO",
      "email": "lyonswalls@virxo.com",
      "phone": "+1 (895) 593-2466",
      "address": "603 Flatlands Avenue, Condon, West Virginia, 301"
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 22,
      "eyeColor": "brown",
      "name": "Summer Ferrell",
      "gender": "female",
      "company": "VICON",
      "email": "summerferrell@vicon.com",
      "phone": "+1 (939) 477-2560",
      "address": "645 Woodpoint Road, Tooleville, Kentucky, 5208"
    }
  ]

  constructor(private data: DataService, private router: Router) { }

  displayedColumns: string[] = ['picture', 'age', 'eyeColor', 'name', 'gender', 'company', 'email', 'phone', 'action'];
  dataSource = new MatTableDataSource(this.userData);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  newMessage(selectedUser) {
    this.data.changeMessage(selectedUser)
    this.router.navigate(['/user']);
  }

}
