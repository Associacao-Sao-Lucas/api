import { Get, Controller, Render } from "routing-controllers";

@Controller("/")
export class HomeController {
	@Get("/")
	@Render("index")
  home() {
	  
  }

  
}


// router.get('/about', (req, res) => {
//   res.render('about', {title: "something"});
// });



// app.get('/', (req, res) => {
// 	res.render('index', {
// 		titulo: 'Aula de Pug',
// 		mensagem: 'Primeira página com pug!'
// 	})
// })



