import './main.html'
import EventosU from "../collections"

Template.perfil.created = ()=>{
  console.log("Created the profile template");
}

Template.perfil.rendered = ()=>{
  console.log("Rendered the profile template");
}
/*otros helper*/
Template.perfil.helpers({

  ejhelper: () => {

    return "fucnion helper";
  },

  perfilList: ()=>{
    return [
          {
              nombre: "Juan Rodríguez",edad: 25
          },
          {
              nombre: "María Gómez",edad: 30
          },
          {
            nombre: "Esteban Martínez",edad: 15
          },
          {
            nombre: "Luisa Sánchez", edad: 19
          }
      ] 
  },

  pasandoDatos: (uno, dos)=>{

    console.log(`los strings son : ${uno} y ${dos}`)
  },

  randomHelper:()=>
  {
    return Session.get("randomNumber");
  },

  traerDeBack: () =>
  {
    
    return Perfiles.find({})
  }
});

/*eventos*/
Template.perfil.events({
'click':(e,i)=>{
  console.log("cLick!")
  console.log(i)
  console.log(e)
  Session.set("randomNumber",Math.random(0,99));
}



})

/*EventosUniveridad*/

Template.universitarios.helpers({

listarEventos: ()=>
{

  return EventosU.find({})
}

})

Template.universitarios.events({

  'submit .nuevo-evento' :(evento)=>{
    evento.preventDefault()
    let nuevoEvento=
    {
      nombre :evento.target.nombre.value,
      encargado :evento.target.encargado.value,
      descripcion: evento.target.descripcion.value,
      fechaInicio :evento.target.fechaInicio.value,
      fechaFinal :evento.target.fechaFinal.value,
      ubicacion: evento.target.ubicacion.value
    }
    
    EventosU.insert(nuevoEvento)

    evento.target.nombre.value=""
    evento.target.encargado.value=""
    evento.target.descripcion.value=""
    evento.target.fechaInicio.value=""
    evento.target.fechaFinal.value=""
    evento.target.ubicacion.value=""
  }



})